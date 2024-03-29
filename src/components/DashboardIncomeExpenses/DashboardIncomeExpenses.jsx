// import { selectDataInf } from '../../redux/ePharmacy/selector';
// import { useEffect } from 'react';
// import { dashboardInf } from '../../redux/ePharmacy/operations';
// import { useDispatch, useSelector } from 'react-redux';
import { Cell, Column, Table } from "@blueprintjs/table";
import { TableBlockItem } from "components/Dashboard/Dashboard.styled";

export default function DashboardIncomeExpenses() {  
  // const dispatch = useDispatch();
  // const data = useSelector(selectDataInf);  

  // useEffect(() => {
  //   dispatch(dashboardInf());
  // }, [dispatch]);

  // console.log(data)

  const data = [
    // Предполагаем, что каждый массив - это строка данных
    ["Данные ячейки 1", "Данные ячейки 2", "Данные ячейки 3"],
    ["Данные ячейки 11", "Данные ячейки 22", "Данные ячейки 33"],
    ["Данные ячейки 111", "Данные ячейки 222", "Данные ячейки 333"],
  ];

  return (
    <TableBlockItem>
    <Table numRows={data.length} resizable={false}>
      <Column name="Название столбца 1" cellRenderer={(rowIndex) => <Cell>{data[rowIndex][0]}</Cell>} />
      <Column name="Название столбца 2" cellRenderer={(rowIndex) => <Cell>{data[rowIndex][1]}</Cell>} />
      <Column name="Название столбца 3" cellRenderer={(rowIndex) => <Cell>{data[rowIndex][2]}</Cell>} />
    </Table>
    </TableBlockItem>
  )
}