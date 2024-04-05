import { useFormik } from 'formik';
import * as Yup from 'yup';

import { BtnConteiner, ClosingSymbol, ColumnConteiner, Conteiner, Input, InputConteiner, Title } from "./Modals.styled";
import sprite from '../../img/sprite.svg';
import CustomButton from "components/CustomButton/CustomButton";
import CustomButtonCansel from "components/CustomButtonCansel/CustomButtonCansel";
import { useEffect, useRef, useState } from 'react';
import { AVAILABLE_STATUS } from 'components/Utils/utils';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../../redux/ePharmacy/operations';
import ModalSelector from './ModalSelector/ModalSelector';

const validationSchema = Yup.object({
  name: Yup.string().required('Product info is required'),
  company: Yup.string().required('Product info is required'),
  ammount: Yup.number().required('Stock is required').positive('Stock must be positive'),
  address: Yup.string().required('Product info is required'),
  suppliers: Yup.string().required('Suppliers are required'),
  price: Yup.number().required('Price is required').positive('Price must be positive'),
});

export default function SuppliesModals({ closeModals, isUpdate, existingProduct }) {  
  const [selectedLevels, setSelectedLevels] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const id = existingProduct?.[5];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); 
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []); 
  const initialValues = isUpdate ? {
    name: existingProduct?.[0],
    company: existingProduct?.[1],
    ammount: existingProduct?.[2], 
    address: existingProduct?.[3],
    suppliers: existingProduct?.[3],
    status: existingProduct?.[4],
  } : {
    name: '',
    company: '',
    ammount: '',
    address: '',
    suppliers: '',
    status: '',
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

  return (
    <Conteiner >
      <ClosingSymbol onClick={closeModals}>
        <svg width={26} height={26}>
          <use href={`${sprite}#icon-x`} />
        </svg>   
      </ClosingSymbol>

      <Title>{ isUpdate  ? 'Edit product' :'Add a new suppliers'}</Title>
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
                placeholder="Suppliers Info"
                haserror={formik.touched.name && formik.errors.name}
              />

              <Input
                name="company"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.company}
                placeholder="Company"
                haserror={formik.touched.company && formik.errors.company}
              />

              <Input
                name="ammount"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.ammount}
                placeholder="Ammount"
                haserror={formik.touched.ammount && formik.errors.ammount}
              />
            </ColumnConteiner>

            <ColumnConteiner>   
            <Input
                name="address"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.address}
                placeholder="Address"
                haserror={formik.touched.address && formik.errors.address}
              />

              <Input
                name="suppliers"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.suppliers}
                placeholder="Suppliers"
                haserror={formik.touched.suppliers && formik.errors.suppliers}
              />
              <ModalSelector
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                selectedCategory={selectedLevels}
                setSelectedCategory={setSelectedLevels}
                formik={formik}
                categories={AVAILABLE_STATUS}
                hasError={formik.touched.category && formik.errors.category}
                reservName={ existingProduct?.[1] }
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



