import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import { BtnConteiner, ClosingSymbol, Conteiner, DatePickerContainer, DatePickerSvg, Input, InputConteiner, StyledDatePicker, Title } from "./Modals.styled";
import sprite from '../../img/sprite.svg';
import CustomButton from "components/CustomButton/CustomButton";
import CustomButtonCansel from "components/CustomButtonCansel/CustomButtonCansel";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AVAILABLE_STATUS } from 'components/Utils/utils';
import { useDispatch } from 'react-redux';
import { addSupplier, updateSupplier } from '../../redux/ePharmacy/operations';
import ModalSelector from './ModalSelector/ModalSelector';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  suppliers: Yup.string().required(),
  amount: Yup.number().required('Stock is required').positive('Stock must be positive'),
  address: Yup.string().required(),
  date: Yup.string().required(),
  status: Yup.string().required(),
});

export default function SuppliesModals({ closeModals, isUpdate, existingSuppliers }) {  
  const [selectedLevels, setSelectedLevels] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const id = existingSuppliers?.[6];
  const datePickerRef = useRef();
  const modalContentRef = useRef(null); 

  const initialValues = useMemo(() => {
    return isUpdate ? {
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
  }, [isUpdate, existingSuppliers]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      isUpdate ? dispatch(updateSupplier({ id: id, supplierData: values })) : dispatch(addSupplier(values));
      resetForm(); 
      closeModals()
    },
  });  

  const handleCloseModal = useCallback(() => {
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
  const handleCalendarClick = () => {
    datePickerRef.current.setOpen(true);
  };

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
    <Conteiner height='542px' ref={modalContentRef}>
      <ClosingSymbol onClick={handleCloseModal}>
        <svg width={26} height={26}>
          <use href={`${sprite}#icon-x`} />
        </svg>   
      </ClosingSymbol>

      <Title>{ isUpdate  ? 'Edit supplier' :'Add a new supplier'}</Title>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <InputConteiner>
            <Input
              name="name"
              type="text"
              onChange={handleInputChange}
              onBlur={handleBlur} 
              value={formik.values.name}
              placeholder="Suppliers Info"
              haserror={formik.touched.name && formik.errors.name}
            />
            <Input
              name="address"
              type="text"
              onChange={handleInputChange}
              onBlur={handleBlur} 
              value={formik.values.address}
              placeholder="Address"
              haserror={formik.touched.address && formik.errors.address}
            />
            <Input
              name="suppliers"
              type="text"
              onChange={handleInputChange}
              onBlur={handleBlur} 
              value={formik.values.suppliers}
              placeholder="Company"
              haserror={formik.touched.suppliers && formik.errors.suppliers}
            />
            <DatePickerContainer>
              <StyledDatePicker
                ref={datePickerRef}
                selected={formik.values.date}
                onChange={(date) => formik.setFieldValue('date', date)}
                dateFormat="MMMM d, yyyy"
                placeholderText="Delivery date"
                haserror={formik.touched.date && formik.errors.date}
                name="date"
                type="date"
                onBlur={formik.handleBlur} 
              />
              <DatePickerSvg onClick={handleCalendarClick} width={16} height={16} >
                <use href={`${sprite}#icon-calendar`} />
              </DatePickerSvg>
            </DatePickerContainer>
            <Input
              name="amount"
              type="text"
              onChange={handleNumberChange}
              onBlur={handleBlur} 
              value={formik.values.amount}
              placeholder="Ammount"
              haserror={formik.touched.amount && formik.errors.amount}
            /> 
            <ModalSelector
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
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
          </InputConteiner>

          <BtnConteiner>
            <CustomButton width="133px" label={isUpdate ? 'Save' : 'Add'}  type='submit'/>
            <CustomButtonCansel width="133px" label="Cansel" onClick={handleCloseModal} />        
          </BtnConteiner>
        </form>
      </div>
    </Conteiner>
  );
}