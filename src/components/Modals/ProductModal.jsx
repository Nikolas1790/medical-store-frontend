import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BtnConteiner, ClosingSymbol, Conteiner, Input, InputConteiner, SvgX, Title } from "./Modals.styled";
import sprite from '../../img/sprite.svg';
import CustomButton from "components/CustomButton/CustomButton";
import CustomButtonCansel from "components/CustomButtonCansel/CustomButtonCansel";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  const modalContentRef = useRef(null); 

  const initialValues = useMemo(() => {
    return isUpdate ? {
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
  }, [isUpdate, existingProduct]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      isUpdate ? dispatch(updateProduct({ id: id, productData: values })) : dispatch(addProduct(values));
      resetForm(); 
      closeModals()
    },
  });  

  const handleCloseModal = useCallback(() => {
    // console.log("Before reset", {values: formik.values, touched: formik.touched, errors: formik.errors});
    setTimeout(() => {
      formik.resetForm({
        values: initialValues,
        touched: {},
        errors: {}
      });
      setSelectedLevels(""); 
    }, 0); 
    closeModals();
  }, [formik, closeModals, initialValues]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    const handleClickOutside = (event) => {
      if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('mousedown', handleClickOutside);  
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [formik, handleCloseModal ]);

      
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const trimmedValue = typeof value === 'string' ? value.trim() : value;
    formik.setFieldValue(name, trimmedValue);
  }; 
  
  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/[^0-9.]/g, '');
    formik.setFieldValue(name, cleanedValue);
  };


  const handleBlur = (e) => {
    const { name } = e.target;
    formik.setFieldTouched(name, true);
  };

  return (
    <Conteiner ref={modalContentRef}>
      <ClosingSymbol onClick={handleCloseModal}>
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
                onBlur={handleBlur}
                value={formik.values.name}
                placeholder="Product Info"
                haserror={formik.touched.name && formik.errors.name ? 'true' : undefined}         
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
                onBlur={handleBlur}
                value={formik.values.suppliers}
                placeholder="Suppliers"
                haserror={formik.touched.suppliers && formik.errors.suppliers}
              />
              <Input
                name="stock"
                type="text"
                onChange={handleNumberChange}
                onBlur={handleBlur}
                value={formik.values.stock}
                placeholder="Stock"
                haserror={formik.touched.stock && formik.errors.stock}
              />
              <Input
                name="price"
                type="text"
                onChange={handleNumberChange}
                onBlur={handleBlur}
                value={formik.values.price}
                placeholder="Price"
                haserror={formik.touched.price && formik.errors.price}
              />        
          </InputConteiner>

          <BtnConteiner>
            <CustomButton width="133px" label={isUpdate ? 'Save' : 'Add'}  type='submit'/>
            <CustomButtonCansel width="133px" label="Cansel" onClick={handleCloseModal}/>        
          </BtnConteiner>
        </form>
      </div>
    </Conteiner>
  );
}