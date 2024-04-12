import color from "common/GlobalColers";
import styled from "styled-components";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledSimpleBar = styled(SimpleBar)`
  .simplebar-scrollbar {
    background: rgba(255, 255, 255, 0.4) !important;
    width: 6px !important;
    border-radius: 12px !important;
  }

  .simplebar-track.simplebar-vertical {
    width: 6px !important;
    right: -10px !important;
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
  gap: 20px;
  width: 335px;
  height:  ${({ height }) => height || '484px'};
  background: ${color.white};
  border-radius: 12px;
  padding: 40px 20px;

  @media (min-width: 768px) {
    width: 536px;
    height: 392px;
    padding: 40px ;
    gap: 40px;
  }
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

export const SvgX = styled.svg`
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;
////////////////////////////////////
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const InputConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 14px 8px;
  }
`;

export const Input = styled.input`
  width: 295px;
  height: 44px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  background: rgb(255, 255, 255);
  font-size: 12px;
  padding: 13px 18px;
  outline: none;
  color: rgba(29, 30, 33, 0.8);
  border-color: ${({ haserror }) => haserror ?  color.red : color.blackPrimarySecondary};

  @media (min-width: 768px) {
    width: 224px;
  }
`;

export const DatePickerContainer = styled.div`
  position: relative;

  .react-datepicker{
    background: ${color.greenLight};
    color: ${color.white};
    border-radius: 12px;    
  };

  .react-datepicker__header {
    background: ${color.greenLight};
  }

  .react-datepicker__day-name {
    color: #fff;
  }
  .react-datepicker__day {
    color: #fff;
  }
  .react-datepicker__current-month {
    color: #fff;
  }

  .react-datepicker__day--selected {
    color: #fff;
  }
  /* Цвет текста при наведении */
  .react-datepicker__day:hover {
    color: ${color.greenLight};
  }

  .react-datepicker__day--outside-month {
    color: gray;
  }

  .react-datepicker__day--selected:hover{
    background: ${color.greenDarker};
  }

  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
    background: ${color.greenDarker};
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 295px;
  height: 44px;
  font-size: 12px;
  border: 1px solid ${color.blackPrimarySecondary};
  border-radius: 60px;
  background: ${color.white};
  padding: 13px 18px;
  outline: none;
  color: ${color.blackModalColr};
  border-color: ${({ haserror }) => haserror ? color.red : color.blackPrimarySecondary};

  @media (min-width: 768px) {
    width: 224px;
  }
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
  width: 16px;
  height: 16px;
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

  width: 295px;
  color: ${({ defaultname }) => defaultname ? color.blackColorSecondary : color.blackModalColr};
  border-color: ${({ haserror }) => haserror ? color.red : color.blackPrimarySecondary};

  @media (min-width: 768px) {
    width: 224px;
  }
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


export const BtnConteiner = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
`;