import styled from 'styled-components'

export const ActionConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

`

export const ActionBtnProduct = styled.button`
  position: absolute;
  left: 14px;
  top: 23px;
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

  @media (min-width: 768px) {  
    left: 20px;
    top: 22px;
  }
`

export const EditDellBtn = styled.svg`
  width: 28px;
  height: 28px;

  @media (min-width: 768px) {  
    width: 32px;
    height: 32px;
  }
`



export const ActionBtnProductDell = styled.button`
  position: absolute;
  left: 50px;
  top: 23px;
  gap: 8px;

  transition: all 0.25s linear;
  &:hover,
  &:focus {
    transform: scale(1.2);
    width: 32px;
    z-index: 1000;
  }

  @media (min-width: 768px) {  
    left: 60px;
    top: 22px;
  }
`