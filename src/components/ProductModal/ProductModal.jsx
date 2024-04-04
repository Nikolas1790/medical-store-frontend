import { useFormik } from 'formik';
import * as Yup from 'yup';

import { BtnConteiner, ClosingSymbol, ColumnConteiner, Conteiner, Dropdown, DropdownButton, DropdownItem, DropdownList, DropdownSvg, Input, InputConteiner, StyledSimpleBar, Title } from "./ProductModal.styled";
import sprite from '../../img/sprite.svg';
import CustomButton from "components/CustomButton/CustomButton";
import CustomButtonCansel from "components/CustomButtonCansel/CustomButtonCansel";
import { useEffect, useRef, useState } from 'react';
import { AVAILABLE_CATEGORIES } from 'components/Utils/utils';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/ePharmacy/operations';

const validationSchema = Yup.object({
  name: Yup.string().required('Product info is required'),
  category: Yup.string().oneOf(AVAILABLE_CATEGORIES, 'Invalid category').required('Category is required'),
  stock: Yup.number().required('Stock is required').positive('Stock must be positive'),
  suppliers: Yup.string().required('Suppliers are required'),
  price: Yup.number().required('Price is required').positive('Price must be positive'),
});

export default function ProductModals({ closeModals }) {  
  const [selectedLevels, setSelectedLevels] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const dropdownRef = useRef(null);
const dispatch = useDispatch();

useEffect(() => {
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false); // Исправлено на false
    }
  };
  document.addEventListener('mousedown', handleOutsideClick);
  return () => document.removeEventListener('mousedown', handleOutsideClick);
}, []);
  
    // Инициализация Formik
    const formik = useFormik({
      initialValues: {
        name: '',
        category: '',
        stock: '',
        suppliers: '',
        price: '',
      },
      validationSchema,
      onSubmit: (values, { resetForm }) => {
           dispatch(addProduct(values))  
           resetForm(); 
           closeModals()
      },
    });  
    // const showRedBorder = (fieldName) => attemptedSubmit && formik.touched[fieldName] && Boolean(formik.errors[fieldName]);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const handleItemClick = (level) => {
      setSelectedLevels(level); // Обновление локального состояния
      formik.setFieldValue('category', level); // Обновление состояния Formik
      setIsDropdownOpen(false); // Закрытие выпадающего списка
    };
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
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.name}
              placeholder="Product Info"
              haserror={formik.touched.name && formik.errors.name}
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
                <Dropdown ref={dropdownRef}>
                  <DropdownSvg width={20} height={20} onClick={toggleDropdown} >
                      <use href={`${sprite}#icon-chevron-${isDropdownOpen ? 'up' : 'down'}`}  />
                  </DropdownSvg>
                  <DropdownButton  onClick={toggleDropdown} haserror={formik.touched.category && formik.errors.category}>{selectedLevels || "Select Level" }</DropdownButton>  
                  <DropdownList open={isDropdownOpen}>
                    <StyledSimpleBar style={{ maxHeight: 126 }}>
                      {AVAILABLE_CATEGORIES.map((category, index) => (
                        <DropdownItem key={index} onClick={() => handleItemClick(category)}>
                          {category}
                        </DropdownItem>
                      ))}
                    </StyledSimpleBar>
                  </DropdownList>                      
                </Dropdown>

            <Input
              name="suppliers"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.suppliers}
              placeholder="Suppliers"
              haserror={formik.touched.suppliers && formik.errors.suppliers}
            />
          </ColumnConteiner>
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
