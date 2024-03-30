import color from 'common/GlobalColers'
import styled from 'styled-components'

export const IncomeExpensesTableConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .bp5-table-container {    
    box-shadow: none;    
  }

  .bp5-table-header {
    display: flex;
    align-items: center;
    height: 58px;
    background-color: ${color.white}; 
    /* padding-left: 0px; */
/* margin-left: -10px; */
/* line-height:1; */

    font-size: 14px;  
    font-weight: 500;
    color: ${color.textColorSecondary};
    box-shadow: none; 
  }
  .bp5-table-column-name{
    margin-left: -10px;
  }

  .bp5-table-header::after {
    content: ''; /* Необходимо для отображения псевдоэлемента */
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0; /* Размещает линию в нижней части ячейки */
    border-bottom: 1px solid ${color.blackPrimarySecondary}; 
  }

  .bp5-table-cell {  
    position: relative; 
    display: flex;
    align-items: center;
    background: ${color.white};
    padding-left: 20px;
    box-shadow: none; 
    padding: 0;
  }
  .bp5-table-cell::after {
    content: ''; /* Необходимо для отображения псевдоэлемента */
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0; /* Размещает линию в нижней части ячейки */
    border-bottom: 1px solid ${color.blackPrimarySecondary}; 
  }

`