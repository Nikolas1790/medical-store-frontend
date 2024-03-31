import { useFormik } from "formik";
import { FilterForm, InputFilter } from "./OrdersUserNameFilter.styled";
import { ordersInf } from "../../redux/ePharmacy/operations";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  userName: Yup.string()
    .required('Required') // Базовая валидация, требующая заполнения поля
    // Дополнительные правила валидации можно добавить здесь
});

export default function OrdersUserNameFilter() {  
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userName: '',
    },    
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(ordersInf({ name: values.userName }));
    },
  });

  return (
    <FilterForm onSubmit={formik.handleSubmit}>
      <InputFilter
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.userName}
        placeholder="User Name"
      />
      <button type="submit">Filter</button>
    </FilterForm>
  );
}