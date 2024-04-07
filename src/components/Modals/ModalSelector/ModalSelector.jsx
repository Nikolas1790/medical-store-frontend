import React, { useEffect, useRef } from 'react';
import { StyledSimpleBar, Dropdown, DropdownSvg, DropdownButton, DropdownList, DropdownItem } from "../Modals.styled";
import sprite from '../../../img/sprite.svg';

export default function  ModalSelector ({
  isDropdownOpen,
  toggleDropdown,
  selectedCategory,
  setSelectedCategory,
  formik,
  categories,
  hasError,
  reservName,
  def,
  fieldName,
  setIsDropdownOpen
}) {
  const dropdownRef = useRef();
  const defaultName= def === "supplies" ? "Status" : "Category"
// console.log(dropdownRef)

useEffect(() => {
  const handleOutsideClick = (event) => {
    // console.log(dropdownRef.current)
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false); 
    }
  };
  document.addEventListener('mousedown', handleOutsideClick);
  return () => document.removeEventListener('mousedown', handleOutsideClick);
}, []); 


  const handleDropdownButtonClick = (event) => {
    // event.stopPropagation();
    toggleDropdown();
  };

  const handleItemClick = (category) => {
    setSelectedCategory(category);
    formik.setFieldValue(fieldName, category); 
    toggleDropdown();
  };

  return (
    <Dropdown ref={dropdownRef}>
      <DropdownSvg width={20} height={20} onClick={toggleDropdown}>
        <use href={`${sprite}#icon-chevron-${isDropdownOpen ? 'up' : 'down'}`} />
      </DropdownSvg>
      <DropdownButton type="button" onClick={handleDropdownButtonClick} haserror={hasError}>{selectedCategory || reservName || defaultName}</DropdownButton>  
      <DropdownList open={isDropdownOpen}>
        <StyledSimpleBar style={{ maxHeight: 126 }}>
          {categories.map((category, index) => (
            <DropdownItem key={index} onClick={() => handleItemClick(category)}>
              {category}
            </DropdownItem>
          ))}
        </StyledSimpleBar>
      </DropdownList>                      
    </Dropdown>
  );
};