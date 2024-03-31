import { selectDataInf } from '../../redux/ePharmacy/selector';
import { useEffect } from 'react';
import { dashboardInf } from '../../redux/ePharmacy/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Cell, Column, Table2 } from "@blueprintjs/table";
import { TableHeader } from "common/GiobalStyles";
import { TableBlockItem } from "components/Dashboard/Dashboard.styled";
import { CellSum, CellType, IncomeExpensesTableConteiner } from "./DashboardIncomeExpenses.styled";

export default function DashboardIncomeExpenses() {  
  const dispatch = useDispatch();
  const { incomeExpenses } = useSelector(selectDataInf);  
  const data = incomeExpenses ? incomeExpenses.map(({ name, amount, type }) => [type, name, amount]) : [];
  useEffect(() => {
    dispatch(dashboardInf());
  }, [dispatch]); 

  const customCellRenderer = (rowIndex, columnId, data) => {
    const cellType = data[rowIndex][0]; // Предположим, что тип операции находится в первом элементе массива для каждой строки.
    const cellValue = data[rowIndex]
    let style = {};
    if (columnId === 'sum') {
      style.justifyContent = 'flex-end';
    }  

    return (
      <Cell style={style}>
        {columnId === 'sum' ? ( <CellSum type={cellType}>{cellValue[2]}</CellSum> ) : (
          columnId === 'type'? <CellType type={cellType}>{cellValue[0]}</CellType> : cellValue[1]
        )}
      </Cell>
    );
  };  
  
  return (
    <TableBlockItem>
      <TableHeader>Income/Expenses</TableHeader>
      <IncomeExpensesTableConteiner>
        <Table2 
          numRows={data.length} 
          defaultRowHeight={65} 
          columnWidths={[120, 393, 77 ]} 
          enableColumnResizing={false} 
          enableRowResizing={false} 
          enableRowHeader={false}
        >
          <Column name="Today" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'type', data)} />
          <Column name="" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'details', data)}/>
          <Column name="" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'sum', data)} />
        </Table2>
      </IncomeExpensesTableConteiner>
    </TableBlockItem>
  )
}