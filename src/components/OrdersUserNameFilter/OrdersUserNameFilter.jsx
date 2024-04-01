import { useFormik } from "formik";
import { Button, FilterConteiner, FilterForm, InputFilter } from "./OrdersUserNameFilter.styled";
import { ordersInf } from "../../redux/ePharmacy/operations";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import CustomButton from "components/CustomButton/CustomButton";
import { useState } from "react";

const validationSchema = Yup.object({
  userName: Yup.string()
    .required('Required')
    // Дополнительные правила валидации можно добавить здесь
});

export default function OrdersUserNameFilter() {  
  const [isRestButtonVisible, setIsRestButtonVisible] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: '',
    },    
    validationSchema: validationSchema,
    onSubmit: values => {
      setIsRestButtonVisible("true")
      dispatch(ordersInf({ name: values.userName }));
    },
  });

  const handleReset = () => {
    setIsRestButtonVisible(false);
    dispatch(ordersInf({}))
    formik.resetForm();
    // dispatch(fetchBooks({ page: 1, limit: 10  }))
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
          placeholder="User Name"
        />
        <CustomButton label="Filter" type="submit" icon={true} />
      </FilterForm>
      {isRestButtonVisible && (
        <Button><CustomButton label="Rest" onClick={() => handleReset()}/></Button>
      )}
    </FilterConteiner>
  );
}