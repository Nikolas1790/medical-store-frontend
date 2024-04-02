import { useFormik } from "formik";
import { Button, FilterConteiner, FilterForm, InputFilter } from "./UserNameFilter.styled";
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

export default function UserNameFilter({dataFactory, plholder }) {  
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
      setIsRestButtonVisible("true")
      dispatch(dataFactory({ name: values.userName }));
    },
  });

  const handleReset = () => {
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
        <Button><CustomButton label="Rest" onClick={() => handleReset()}/></Button>
      )}
    </FilterConteiner>
  );
}