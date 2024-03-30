// import { selectDataInf } from '../../redux/ePharmacy/selector';
// import { useEffect } from 'react';
// import { dashboardInf } from '../../redux/ePharmacy/operations';
// import { useDispatch, useSelector } from 'react-redux';
import { Cell, Column, Table2 } from "@blueprintjs/table";
import { TableHeader } from "common/GiobalStyles";
import { TableBlockItem } from "components/Dashboard/Dashboard.styled";
import { IncomeExpensesTableConteiner } from "./DashboardIncomeExpenses.styled";

export default function DashboardIncomeExpenses() {  
  // const dispatch = useDispatch();
  // const data = useSelector(selectDataInf);  

  // useEffect(() => {
  //   dispatch(dashboardInf());
  // }, [dispatch]);

  // console.log(data)

  const data = [
    // Предполагаем, что каждый массив - это строка данных
    ["Данные ячейки 1", "Данные ячейки 2", "222222"],
    ["Данные ячейки 11", "Данные ячейки 22", "333"],
    ["Данные ячейки 111", "Данные ячейки 222", "44444444"],
    ["Данные ячейки 1", "Данные ячейки 2", "77777777777777"],
    ["Данные ячейки 11", "Данные ячейки 22", "8888"],
    ["Данные ячейки 111", "Данные ячейки 222", "000"],
  ];

  return (
    <TableBlockItem>
      <TableHeader>Income/Expenses</TableHeader>
      <IncomeExpensesTableConteiner>
        <Table2 
          numRows={data.length} 
          defaultRowHeight={65} 
          columnWidths={[100, 405, 97 ]} 
          enableColumnResizing={false} 
          enableRowResizing={false} 
          enableRowHeader={false}
        >
          <Column name="Today" cellRenderer={(rowIndex) => <Cell>{data[rowIndex][0]}</Cell>} />
          <Column name="" cellRenderer={(rowIndex) => <Cell>{data[rowIndex][1]}</Cell>} />
          <Column name="" cellRenderer={(rowIndex) => <Cell>{data[rowIndex][2]}</Cell>} />
        </Table2>
      </IncomeExpensesTableConteiner>
    </TableBlockItem>
  )
}