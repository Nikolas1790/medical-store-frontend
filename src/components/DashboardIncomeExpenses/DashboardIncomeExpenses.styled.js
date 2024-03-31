import color from 'common/GlobalColers'
import styled from 'styled-components'

const getColor = (type) => {
  switch (type) {
    case 'Income':
      return color.red;
    case 'Expense':
      return color.greenLight;
    case 'Error':
      return color.blackPrimary;
    default:
      return 'black';
  }
};

const getBackgroundColor = (type) => {
  switch (type) {
    case 'Income':
      return color.redSecondary;
    case 'Expense':
      return color.greenSecondary;
    case 'Error':
      return color.blackPrimarySecondary;
    default:
      return 'black';
  }
};


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

    font-size: 14px;  
    font-weight: 500;
    color: ${color.textColorSecondary};
    box-shadow: none; 
  }
  .bp5-table-column-name{
    margin-left: -10px;
  }

  .bp5-table-header::after {
    content: ''; 
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
    font-size: 16px;
    background: ${color.white};
    padding-left: 20px;
    box-shadow: none; 
    padding: 0;

  }
  .bp5-table-cell::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0; /* Размещает линию в нижней части ячейки */
    border-bottom: 1px solid ${color.blackPrimarySecondary}; 
  }
`

export const CellType = styled.p`
  display: flex;
  align-items: center;
  justify-content:center;
  color: ${({ type }) => getColor(type)};
  background: ${({ type }) => getBackgroundColor(type)};;
  width: 80px;
  height: 25px;
  font-size: 14px;
  border-radius: 40px;

`

export const CellSum = styled.p`
  position: relative;
  color: ${({ type }) => getColor(type)};

  &::after {
    content: ${({ type }) => (type === 'Error' ? '" "' : 'none')};
    position: absolute;
    top: 58%;
    left: 0;
    right: 0;
    height: 1px;
    background: ${color.blackPrimary};
    transform: translateY(-50%);
  }
`;