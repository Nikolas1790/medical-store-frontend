import color from 'common/GlobalColers';
import styled from 'styled-components'

export const FilterConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`
export const FilterForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 300px;

  @media (min-width: 375px) {  
    width: 335px;
  }
  @media (min-width: 768px) {  
    gap: 14px;
    width: 354px;
  }
`;

export const InputFilter = styled.input`
  display: flex;
  align-items: center;

  min-width: 215px;
  height: 44px;
  border: 1px solid ${color.blackPrimarySecondary};
  border-radius: 60px;
  box-shadow: 0px -1px 5px 0px rgba(71, 71, 71, 0.05);
  background: ${color.white};
  padding: 13px 18px;

  &::placeholder {
    font-size: 12px; 
    color: ${color.blackColorSecondary};
  }
  &:hover,
  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {  
    min-width: 224px;
  }
`;