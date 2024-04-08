
import styled from 'styled-components'

export const ActionConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

`

export const ActionBtnProduct = styled.button`
position: absolute;
left: 20px;
top: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  transition: all 0.25s linear;
  &:hover,
  &:focus {
    transform: scale(1.2);
    width: 32px;
    z-index: 1000;
  }
`


export const ActionBtnProductDell = styled.button`
  position: absolute;
  left: 60px;
  top: 22px;
  gap: 8px;

  transition: all 0.25s linear;
  &:hover,
  &:focus {
    transform: scale(1.2);
    width: 32px;
    z-index: 1000;
  }
`