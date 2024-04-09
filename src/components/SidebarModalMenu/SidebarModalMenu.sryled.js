import color from "common/GlobalColers";
import styled from "styled-components";

export const ConteinerSidebarModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  left: 0;
  top: 0;
  width: 21%;
  height: 100%;
  background: ${color.white};
  transform: translateX(${props => props.open ? '0' : '-100%'});
  transition: transform 0.25s linear; 
  padding: 100px 20px 20px 20px;  

  @media (min-width: 768px) {
    width: 11%;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 28px;
  right: 22px;  
  background: transparent;
  stroke: ${color.blackPrimary};
  transition: transform 0.25s linear; 
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    top: 20px;
  right: 14px; 
  }
`