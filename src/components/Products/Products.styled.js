// import color from 'common/GlobalColers';
import color from 'common/GlobalColers'
import styled from 'styled-components'

export const AddProductConteiner = styled.button`
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 8px;

  /* fill: ${color.red}; */
    /* stroke: ${color.red}; */
  transition: all 0.25s linear;
  &:hover,
  &:focus {
    scale: 1.03;
    /* fill: ${color.white}; */
    /* stroke: ${color.white}; */
    outline: none;
    
    /* color: ${color.greenLight}; */
    /* background:  ${color.greenLight}; */
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);  */
    border: none;

  }
`
export const AddProduct = styled.p`
  font-size: 14px;
`