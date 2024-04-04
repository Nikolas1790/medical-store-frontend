import { useFormik } from "formik";
import {  FilterConteiner, FilterForm, InputFilter } from "./UserNameFilter.styled";
// import { customersInf, ordersInf } from "../../redux/ePharmacy/operations";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import { useState } from "react";
// import { selectCustomersInf } from "../../redux/ePharmacy/selector";

const validationSchema = Yup.object({
  userName: Yup.string()
    .required('Required')
    // Дополнительные правила валидации можно добавить здесь
});

export default function UserNameFilter({dataFactory, plholder, setFilterName, setCurrentPage }) {  
  const [isRestButtonVisible, setIsRestButtonVisible] = useState(false);
  const dispatch = useDispatch();
//   const customers = useSelector(selectCustomersInf);  
// console.log(customers)
  const formik = useFormik({
    initialValues: {
      userName: '',
    },    
    validationSchema: validationSchema,
    onSubmit: values => {
      setCurrentPage(1)
      setFilterName( values.userName )
      setIsRestButtonVisible("true")
      dispatch(dataFactory({ name: values.userName }));
    },
  });

  const handleReset = () => {
    setCurrentPage(1)
    setFilterName( '' )
    setIsRestButtonVisible(false);
    dispatch(dataFactory({}))
    formik.resetForm();
  };

  return (
    <FilterConteiner>
      <FilterForm onSubmit={formik.handleSubmit}>
        <InputFilter
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userName}
          placeholder={plholder || "User Name"}
        />
        <CustomButton label="Filter" type="submit" icon={true} />
      </FilterForm>
      {isRestButtonVisible && (
        <CustomButton label="Rest" onClick={() => handleReset()} width="116px"/>
      )}
    </FilterConteiner>
  );
}