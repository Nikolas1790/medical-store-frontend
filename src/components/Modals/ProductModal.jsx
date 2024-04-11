import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BtnConteiner, ClosingSymbol, Conteiner, Input, InputConteiner, SvgX, Title } from "./Modals.styled";
import sprite from '../../img/sprite.svg';
import CustomButton from "components/CustomButton/CustomButton";
import CustomButtonCansel from "components/CustomButtonCansel/CustomButtonCansel";
import { useState } from 'react';
import { AVAILABLE_CATEGORIES } from 'components/Utils/utils';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../../redux/ePharmacy/operations';
import ModalSelector from './ModalSelector/ModalSelector';

const validationSchema = Yup.object({
  name: Yup.string().required('Product info is required'),
  category: Yup.string().oneOf(AVAILABLE_CATEGORIES, 'Invalid category').required('Category is required'),
  stock: Yup.number().required('Stock is required').positive('Stock must be positive'),
  suppliers: Yup.string().required('Suppliers are required'),
  price: Yup.number().required('Price is required').positive('Price must be positive'),
});

export default function ProductModals({ closeModals, isUpdate, existingProduct }) {  
  const [selectedLevels, setSelectedLevels] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const id = existingProduct?.[5];

  const initialValues = isUpdate ? {
    name: existingProduct?.[0],
    category: existingProduct?.[1],
    stock: existingProduct?.[2], 
    suppliers: existingProduct?.[3],
    price: existingProduct?.[4],
  } : {
    name: '',
    category: '',
    stock: '',
    suppliers: '',
    price: '',
  };

    // Инициализация Formik
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      isUpdate ? dispatch(updateProduct({ id: id, productData: values })) : dispatch(addProduct(values));
      resetForm(); 
      closeModals()
    },
  });  
  
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Обрезать пробелы если значение является строкой
    const trimmedValue = typeof value === 'string' ? value.trim() : value;
    // Установить значение поля в Formik
    formik.setFieldValue(name, trimmedValue);
    // Также устанавливаем touched для поля, чтобы валидация срабатывала сразу
    formik.setFieldTouched(name, true);
  };
  return (
    <Conteiner >
      <ClosingSymbol onClick={closeModals}>
        <SvgX >
          <use href={`${sprite}#icon-x`} />
        </SvgX>   
      </ClosingSymbol>

      <Title>{ isUpdate  ? 'Edit product' :'Add a new product'}</Title>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <InputConteiner>
              <Input
                name="name"
                type="text"
                onChange={handleInputChange}
                onBlur={formik.handleBlur} 
                value={formik.values.name}
                placeholder="Product Info"
                haserror={formik.touched.name && formik.errors.name}
              />
              <ModalSelector
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                selectedCategory={selectedLevels}
                setSelectedCategory={setSelectedLevels}
                formik={formik}
                categories={AVAILABLE_CATEGORIES}
                hasError={formik.touched.category && formik.errors.category}
                reservName={ existingProduct?.[1] }
                fieldName="category"
                setIsDropdownOpen={setIsDropdownOpen}
              />              
              <Input
                name="suppliers"
                type="text"
                onChange={handleInputChange}
                onBlur={formik.handleBlur} 
                value={formik.values.suppliers}
                placeholder="Suppliers"
                haserror={formik.touched.suppliers && formik.errors.suppliers}
              />
              <Input
                name="stock"
                type="text"
                onChange={handleInputChange}
                onBlur={formik.handleBlur} 
                value={formik.values.stock}
                placeholder="Stock"
                haserror={formik.touched.stock && formik.errors.stock}
              />
              <Input
                name="price"
                type="text"
                onChange={handleInputChange}
                onBlur={formik.handleBlur} 
                value={formik.values.price}
                placeholder="Price"
                haserror={formik.touched.price && formik.errors.price}
              />        
          </InputConteiner>

          <BtnConteiner>
            <CustomButton width="133px" label="Add"  type='submit'/>
            <CustomButtonCansel width="133px" label="Cansel" onClick={closeModals} />        
          </BtnConteiner>
        </form>
      </div>
    </Conteiner>
  );
}