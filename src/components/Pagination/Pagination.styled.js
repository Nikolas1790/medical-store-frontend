import color from 'common/GlobalColers';
import styled from 'styled-components'

export const PaginationConteiner = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
`

export const PaginationButton = styled.button`
  opacity: ${({ disabled, current }) => (disabled && current ? 0 : 1)};
  background: ${({disabled, current }) => disabled ? color.greenLight : (current ? color.white : color.greenSupperLight)}; /* Более тусклый фон для активной (отключенной) страницы */
  margin-right: 17px;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  color: ${color.blackModalColr};

  transition: all 0.25s linear;

    // Убираем фокус после нажатия
  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: ${({ isClicked }) => (isClicked ? 'none' : '0px 4px 8px rgba(0, 0, 0, 0.7)')};
  }

  &:disabled {
    cursor: default;
    color: ${color.white};
    scale: 1.25;
    box-shadow: none;
  }
`;
