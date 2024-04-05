import React from 'react';
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
  reservName
}) {
  const handleDropdownButtonClick = (event) => {
    event.stopPropagation();
    toggleDropdown();
  };

  const handleItemClick = (category) => {
    setSelectedCategory(category);
    formik.setFieldValue('category', category);
    toggleDropdown();
  };

  return (
    <Dropdown>
      <DropdownSvg width={20} height={20} onClick={toggleDropdown}>
          <use href={`${sprite}#icon-chevron-${isDropdownOpen ? 'up' : 'down'}`} />
      </DropdownSvg>
      <DropdownButton type="button" onClick={handleDropdownButtonClick} haserror={hasError}>{selectedCategory || reservName || "Status"}</DropdownButton>  
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
