import color from 'common/GlobalColers';
import styled from 'styled-components'

export const PaginationConteiner = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
`

export const PaginationButton = styled.button`
  background: ${(props) => props.disabled ? color.greenLight : color.greenSupperLight}; /* Более тусклый фон для активной (отключенной) страницы */
  margin-right: 17px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7); 
  }

  &:disabled {
    cursor: default;
    background: ${color.greenLight};
    scale: 1.25;
  }
`;
