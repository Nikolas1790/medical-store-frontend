import { useFormik } from 'formik';
import * as Yup from 'yup';

import { BtnConteiner, ClosingSymbol, ColumnConteiner, Conteiner, Input, InputConteiner, Title } from "./ProductModal.styled";
import sprite from '../../img/sprite.svg';
import CustomButton from "components/CustomButton/CustomButton";
import CustomButtonCansel from "components/CustomButtonCansel/CustomButtonCansel";
// import { useDispatch } from "react-redux";
// import { addProduct } from "redux/ePharmacy/operations";

const validationSchema = Yup.object({
  productInfo: Yup.string().required('Product info is required'),
  category: Yup.string().required('Category is required'),
  stock: Yup.number().required('Stock is required').positive('Stock must be positive'),
  suppliers: Yup.string().required('Suppliers are required'),
  price: Yup.number().required('Price is required').positive('Price must be positive'),
});

export default function ProductModals({ closeModals }) {  
    // Инициализация Formik
    const formik = useFormik({
      initialValues: {
        productInfo: '',
        category: '',
        stock: '',
        suppliers: '',
        price: '',
      },
      validationSchema,
      onSubmit: values => {
        console.log(values);
        // Здесь должен быть ваш запрос на добавление продукта
      },
    });

  // const dispatch = useDispatch();
  //   dispatch(addProduct({}))    

  return (
    <Conteiner>
      <ClosingSymbol onClick={closeModals}>
        <svg width={26} height={26}>
          <use href={`${sprite}#icon-x`} />
        </svg>   
      </ClosingSymbol>

      <Title>Add a new product</Title>
      <div>
      <form onSubmit={formik.handleSubmit}>
        <InputConteiner>
          <ColumnConteiner>
            <Input
              name="productInfo"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.productInfo}
              placeholder="Product Info"
              haserror={formik.touched.productInfo && formik.errors.productInfo}
            />
        
            <Input
              name="stock"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.stock}
              placeholder="Stock"
              haserror={formik.touched.stock && formik.errors.stock}
            />

            <Input
              name="price"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.price}
              placeholder="Price"
              haserror={formik.touched.price && formik.errors.price}
            />
          </ColumnConteiner>

          <ColumnConteiner>       
            <Input
              name="category"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.category}
              placeholder="Category"
              haserror={formik.touched.category && formik.errors.category}
            />

            <Input
              name="suppliers"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.suppliers}
              placeholder="suppliers"
              haserror={formik.touched.suppliers && formik.errors.suppliers}
            />
          </ColumnConteiner>
        </InputConteiner>

        <BtnConteiner>
        <CustomButton width="133px" label="Add"/>
        <CustomButtonCansel width="133px" label="Cansel" onClick={closeModals} />        
      </BtnConteiner>
        </form>
      </div>


    </Conteiner>
  );
}


