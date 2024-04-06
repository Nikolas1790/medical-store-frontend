import { useFormik } from 'formik';
import * as Yup from 'yup';

import { BtnConteiner, ClosingSymbol, ColumnConteiner, Conteiner, Input, InputConteiner, Title } from "./Modals.styled";
import sprite from '../../img/sprite.svg';
import CustomButton from "components/CustomButton/CustomButton";
import CustomButtonCansel from "components/CustomButtonCansel/CustomButtonCansel";
import { useEffect, useRef, useState } from 'react';
import { AVAILABLE_STATUS } from 'components/Utils/utils';
import { useDispatch } from 'react-redux';
import { addSupplier, updateSupplier } from '../../redux/ePharmacy/operations';
import ModalSelector from './ModalSelector/ModalSelector';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  suppliers: Yup.string().required(),

  amount: Yup.string().required(),
  // amount: Yup.number().required('Stock is required').positive('Stock must be positive'),

  address: Yup.string().required(),
  date: Yup.string().required(),
  status: Yup.string().required(),
});

export default function SuppliesModals({ closeModals, isUpdate, existingSuppliers }) {  
  const [selectedLevels, setSelectedLevels] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const id = existingSuppliers?.[6];
// console.log(existingSuppliers)
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
    name: existingSuppliers?.[0],
    suppliers: existingSuppliers?.[2],
    amount: existingSuppliers?.[4].replace(/^\D*/, '').trim(), 
    address: existingSuppliers?.[1],
    date: existingSuppliers?.[3],
    status: existingSuppliers?.[5],
  } : {
    name: '',
    suppliers: '',
    amount: '',
    address: '',
    date: '',
    status: '',
  };

    // Инициализация Formik
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      isUpdate ? dispatch(updateSupplier({ id: id, supplierData: values })) : dispatch(addSupplier(values));
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
                name="suppliers"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.suppliers}
                placeholder="Company"
                haserror={formik.touched.suppliers && formik.errors.suppliers}
              />

              <Input
                name="amount"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.amount}
                placeholder="Ammount"
                haserror={formik.touched.amount && formik.errors.amount}
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
                name="date"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.date}
                placeholder="Delivery date"
                haserror={formik.touched.date && formik.errors.date}
              />
              <ModalSelector
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                selectedCategory={selectedLevels}
                setSelectedCategory={setSelectedLevels}
                formik={formik}
                categories={AVAILABLE_STATUS}
                hasError={formik.touched.status && formik.errors.status}
                reservName={ existingSuppliers?.[5] }
                def="supplies"
                fieldName="status"
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



