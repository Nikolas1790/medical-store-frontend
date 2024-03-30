import { Cell } from '@blueprintjs/table'
import color from 'common/GlobalColers'
import styled from 'styled-components'

export const ColumnCell = styled(Cell)`
  display: flex;
  align-items: center;
  background: ${color.white};
  padding-left: 20px;
  /* position: relative;
  border-bottom: 1px solid ${color.red}; // Горизонтальные границы

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 1px; // Ширина вертикальной границы
    background-color: ${color.red}; // Цвет вертикальной границы
  } */
  /* border-bottom: 1px solid ${color.red}; // Горизонтальные границы
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 1px solid ${color.red}; // Вертикальные границы
  } */

  /* &:last-child {
    border-bottom: none; // Убирает горизонтальную границу у последней строки
  } */
`

// export const TableHeader = styled.h2`
//   height: 64px;
//   /* border: 1px solid ${color.blackPrimarySecondary}; */
//   border-radius: 8px 8px 0px 0px;
//   background: ${color.greenSupperLight};
//   padding: 20px;
// `
export const HeaderStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;

/* border: none;
box-shadow: none;  */

  .bp5-table-header {
    display: flex;
    align-items: center;
    height: 58px;
    background-color: ${color.white}; 
    padding-left: 10px;

    font-size: 14px;  
    font-weight: 500;
    color: ${color.textColorSecondary};
    /* box-shadow: none; */
  }
  .bp5-table-container {    
    box-shadow: none;    
  }
 .bp5-table-cell {  
    /* box-shadow: none;  */
}

/* .bp5-table-cell {
  position: relative; /* Allows absolute positioning of pseudo-elements relative to cells */
} */

/* Adding a right border to all cells except the last one in a row */
/* .bp5-table-cell:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border-right: 1px solid red;
} */

  /* .bp5-table-cell,
.bp5-table-row,
.bp5-table-quadrant,
.bp5-table-quadrant-scroll-container {
  border: none !important;
  background-color: transparent !important;

} */

  /* .bp5-table-selection-enabled.bp5-table-menu {
    display:none;
} */
/* .bp5-table-row-headers {
    display:none;
    
} */

  /* .bp5-table-column-name {
    background-color: white  ;
  } */
`
