import color from "common/GlobalColers";
import styled from "styled-components";

export const ConteinerClarifyingGuestion = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 335px;
  min-height: 240px;
  background: ${color.white};
  border-radius: 12px;
  padding: 40px ;

  @media (min-width: 768px) {
    width: 536px;
  }
`;

export const ClosingSymbol = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${color.blackPrimary};
  background: transparent;
  transition: transform 0.25s linear; 
  &:hover,
  &:focus {
    transform: scale(1.1);
    outline: none;
  }
`;

export const BtnConteiner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
  margin-top: 40px;
`;

export const ProductText = styled.span`
  color: ${color.greenDarker};
  font-size: 18px;
  line-height: 1;
`;