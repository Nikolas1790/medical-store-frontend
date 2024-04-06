
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
    /* position: static; */
    transform: scale(1.2);
    width: 32px;
    z-index: 1000;
    /* scale: 1.95; */
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);  */
    /* outline: none; */
  }
`


export const ActionBtnProductDell = styled.button`
position: absolute;
left: 60px;
top: 22px;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  gap: 8px;

  transition: all 0.25s linear;
  &:hover,
  &:focus {
    /* position: static; */
    transform: scale(1.2);
    width: 32px;
    z-index: 1000;
    /* scale: 1.95; */
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);  */
    /* outline: none; */
  }
`