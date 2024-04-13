import color from 'common/GlobalColers'
import styled from 'styled-components'

export const AddProductConteiner = styled.button`
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 8px;
  fill: ${color.greenLight};
  stroke: ${color.white};
  transition: all 0.25s linear;

  &:hover,
  &:focus {
    fill: ${color.greenDarker};    
    color: ${color.greenLight};
    border: none;
    outline: none;    
  }
`
export const AddProduct = styled.p`
  font-size: 14px;
`