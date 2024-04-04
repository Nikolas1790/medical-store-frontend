import color from "common/GlobalColers";
import styled from "styled-components";

export const Conteiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 536px;
  min-height: 392px;
  background: ${color.white};
  border-radius: 12px;
  padding: 40px ;

  /* @media (min-width: 768px) {
    width: 500px;
    height: 483px;
    padding: 50px ;
  } */
`;

export const ClosingSymbol = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${color.blackPrimary};
  background: transparent;
  transition: transform 0.25s linear; 
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
////////////////////////////////////
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const InputConteiner = styled.div`
  display: flex;
  gap: 8px;
`;

export const ColumnConteiner = styled.div`
    display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled.input`
  width: 224px;
height: 44px;
border: 1px solid rgba(29, 30, 33, 0.1);
border-radius: 60px;
background: rgb(255, 255, 255);
padding: 13px 18px;

border-color: ${({ haserror }) => haserror ? 'red' : 'rgba(29, 30, 33, 0.1)'};
`;












export const BtnConteiner = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`;
