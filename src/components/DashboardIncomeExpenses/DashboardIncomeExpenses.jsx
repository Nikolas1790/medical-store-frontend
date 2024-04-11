import { selectDataInf } from '../../redux/ePharmacy/selector';
import { useEffect, useState } from 'react';
import { dashboardInf } from '../../redux/ePharmacy/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Cell, Column, Table2 } from "@blueprintjs/table";
import { TableHeader } from "common/GiobalStyles";
import { TableBlockItem } from "components/Dashboard/Dashboard.styled";
import { CellDescription, CellSum, CellType, IncomeExpensesTableConteiner } from "./DashboardIncomeExpenses.styled";

export default function DashboardIncomeExpenses() {  
  const dispatch = useDispatch();
  const { incomeExpenses } = useSelector(selectDataInf);  
  const [columnWidths, setColumnWidths] = useState([120, 393, 77 ]);
  const [columnHeigh, setColumnHeigh] = useState(65);

  const data = incomeExpenses ? incomeExpenses.map(({ name, amount, type }) => [type, name, amount]) : [];
  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumnHeigh(82);
        setColumnWidths([108, 118, 81]); 
      } else if (window.innerWidth > 768 && window.innerWidth < 1440) {
        setColumnHeigh(65);
        setColumnWidths([120, 467, 77]); 
      } else {
        setColumnWidths([120, 393, 77 ]); 
      }
    };

    handleResize();  
    window.addEventListener('resize', handleResize);  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const data = incomeExpenses ? incomeExpenses.map(({ name, amount, type }) => [type, name, amount]) : [];
  
  useEffect(() => {
    dispatch(dashboardInf());
  }, [dispatch]); 

  const customCellRenderer = (rowIndex, columnId, data) => {
    const cellType = data[rowIndex][0];
    const cellValue = data[rowIndex]
    let style = {};
    if (columnId === 'sum') {
      style.justifyContent = 'flex-end';
    }  

    return (
      <Cell style={style}>
        {columnId === 'sum' ? ( <CellSum type={cellType}>{cellValue[2]}</CellSum> ) : (
          columnId === 'type'? <CellType type={cellType}>{cellValue[0]}</CellType> : <CellDescription>{cellValue[1]}</CellDescription> 
        )}
      </Cell>
    );
  };  
  return (
    <TableBlockItem height="582px">
      <TableHeader>Income/Expenses</TableHeader>
      <IncomeExpensesTableConteiner>
        <Table2 
          numRows={data.length} 
          // rowHeights={[ 51, 82, 66, 51, 92, 55 ]}
          defaultRowHeight={columnHeigh} 
          columnWidths={columnWidths} 
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