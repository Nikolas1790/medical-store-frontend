import color from 'common/GlobalColers'
import { getBackgroundColor, getColor } from 'components/Utils/utils';
import styled from 'styled-components'

export const IncomeExpensesTableConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .bp5-table-container {    
    box-shadow: none;  
    
    &:hover,
    &:focus {
      outline: none; 
    } 
  }

  .bp5-table-header {
    display: flex;
    align-items: center;
    height: 46px;
    background-color: ${color.white}; 

    font-weight: 500;
    color: ${color.blackColorSecondary};
    box-shadow: none; 

    @media (min-width: 768px) {  
      height: 58px;
    }
  }
  .bp5-table-column-name{
    margin-left: -10px;
  }

  .bp5-table-header::after {
    content: ''; 
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0; 
    border-bottom: 1px solid ${color.blackPrimarySecondary}; 
  }

  .bp5-table-cell {  
    position: relative; 
    display: flex;
    align-items: center;
    font-size: 14px;
    background: ${color.white};
    box-shadow: none; 
    padding: 0;

    @media (min-width: 768px) {  
      font-size: 16px;
    }
  }
  
  .bp5-table-cell::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0; 
    border-bottom: 1px solid ${color.blackPrimarySecondary}; 
  }
`

export const CellType = styled.p`
  display: flex;
  align-items: center;
  justify-content:center;
  color: ${({ type }) => getColor(type)};
  background: ${({ type }) => getBackgroundColor(type)};
  width: 80px;
  height: 23px;
  font-size: 12px;
  border-radius: 40px;

  @media (min-width: 768px) {  
    height: 25px;
    font-size: 14px;
  }
`

export const CellDescription = styled.p`
    white-space: normal;
    padding: 14px 0;
`;

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