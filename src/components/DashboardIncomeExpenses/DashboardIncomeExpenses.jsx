import { selectDataInf } from '../../redux/ePharmacy/selector';
import { useEffect } from 'react';
import { dashboardInf } from '../../redux/ePharmacy/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Column, Table2 } from "@blueprintjs/table";
import { TableHeader } from "common/GiobalStyles";
import { TableBlockItem } from "components/Dashboard/Dashboard.styled";
import { CellConteiner, IncomeExpensesTableConteiner } from "./DashboardIncomeExpenses.styled";

export default function DashboardIncomeExpenses() {  
  const dispatch = useDispatch();
  const { incomeExpenses } = useSelector(selectDataInf);  

  useEffect(() => {
    dispatch(dashboardInf());
  }, [dispatch]);

  // console.log(incomeExpenses)
  const data = incomeExpenses ? incomeExpenses.map(({ name, amount, type }) => [type, name, amount]) : [];

  const customCellRenderer = (rowIndex, columnId, data) => {
    // const type = data[rowIndex][0];
// console.log(data)

    let style = {};
    if (columnId === 'sum') {
      style.justifyContent = 'flex-end';
    }  
    return (
      <CellConteiner style={style} type={data[rowIndex]}>
        {data[rowIndex]}
      </CellConteiner>
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
          <Column name="Today" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'type', data.map(item => item[0]))} />
          <Column name="" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'details', data.map(item => item[1]))}/>
          <Column name="" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'sum', data.map(item => item[2]))} />
        </Table2>
      </IncomeExpensesTableConteiner>
    </TableBlockItem>
  )
}