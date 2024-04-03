import color from 'common/GlobalColers';
import styled from 'styled-components'

export const EditSuppliers = styled.p`
  color: ${color.greenLight};
  margin-left: 4px;
`
export const AddEditSuppliers = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '196px'}; // default value if width is not provided
  height: ${({ height }) => height || '44px'};
  font-size: 14px;
  border: 1px solid ${color.greenAmazing};
  border-radius: 60px;

  fill: ${color.greenLight};
  stroke: ${color.greenLight};

  transition: all 0.25s linear;
  &:hover {
    fill: ${color.white};
    stroke: ${color.white};
    
    color: ${color.white};
    background:  ${color.greenLight};
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); 
      border: none;
      ${EditSuppliers} {   
        color: ${color.white}; /* Так текст станет белым при наведении на кнопку */
      }
    }
`

