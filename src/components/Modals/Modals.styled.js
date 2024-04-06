import color from "common/GlobalColers";
import styled from "styled-components";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledSimpleBar = styled(SimpleBar)`
  /* Задайте общие стили для контейнера */
  .simplebar-scrollbar {
    background: rgba(255, 255, 255, 0.4) !important;
    width: 6px !important;
    /* height: 65px !important; */
    border-radius: 12px !important;
  }

  .simplebar-track.simplebar-vertical {
    width: 6px !important;
    right: -10px !important; /* Смещение вправо */
  }

  .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
    background-color: #dcdcdc;
  }

  .simplebar-track.simplebar-vertical .simplebar-scrollbar:hover:before {
    background-color: #bcbcbc;
  }
`;




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
    outline: none;
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
    outline: none;

  border-color: ${({ haserror }) => haserror ? 'red' : 'rgba(29, 30, 33, 0.1)'};
`;

export const DatePickerContainer = styled.div`
  position: relative;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 224px;
  height: 44px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  background: rgb(255, 255, 255);
  padding: 13px 18px;
outline: none;
  border-color: ${({ haserror }) => haserror ? 'red' : 'rgba(29, 30, 33, 0.1)'};
`;
export const DatePickerSvg = styled.svg`
  position: absolute;
  top: 14px;
  right: 18px;
  cursor: pointer;
`;


///////////////////////////////////////////////// 222
export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownSvg = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  stroke: ${color.blackPrimary};
  fill: none;
`;

export const DropdownButton = styled.button`
  display: flex;

  font-weight: 400;
  font-size: 12px;
  height: 44px;
  border-radius: 60px; 
  border: 1px solid ${color.blackPrimarySecondary};
  outline: none;
  cursor: pointer;

  background-color: ${color.white};
  padding: 13px 18px;

  width: 224px;
  border-color: ${({ haserror }) => haserror ? 'red' : 'rgba(29, 30, 33, 0.1)'};
`;

export const DropdownList = styled.ul`
  position: absolute;
  z-index: 1;
  top: 112%;
  left: 0;
  background-color: ${color.greenLight};

  display: ${({ open }) => (open ? 'block' : 'none')};
  max-height: 140px; 
  padding: 13px 18px;
  margin: 0;

  width: 100%;
  /* height: 140px; */
  border-radius: 15px;
`;

export const DropdownItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${color.whiterTranslucent};
  padding:  3px 0;
  cursor: pointer;  

  &:hover {
    color: ${color.white};
  }
`;


/////////////////////////////////////////////////// 222



export const BtnConteiner = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`;



