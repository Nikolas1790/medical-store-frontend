// import { selectDataInf } from '../../redux/ePharmacy/selector';
// import { useEffect } from 'react';
// import { dashboardInf } from '../../redux/ePharmacy/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { HotkeysProvider } from "@blueprintjs/core";
import { Column, Table2 } from "@blueprintjs/table";
import { TableBlockItem } from "components/Dashboard/Dashboard.styled";
import { ColumnCell, HeaderStyle } from "./DashboardRecentCustomers.styled";
import { TableHeader } from "common/GiobalStyles";


export default function DashboardRecentCustomers() {  
  // const dispatch = useDispatch();
  // const data = useSelector(selectDataInf);  

  // useEffect(() => {
  //   dispatch(dashboardInf());
  // }, [dispatch]);

  // console.log(data)
  const data = [
    // Предполагаем, что каждый массив - это строка данных
    ["Alex Shatov", "alexshatov@gmail.com", "2,890.66"],
    ["Данные ячейки 11", "Данные ячейки 22", "2222222"],
    ["Данные ячейки 111", "Данные ячейки 222", "3333333"],
    ["Данные ячейки 4", "Данные ячейки 5", "4444444"],
    ["Данные ячейки 7", "Данные ячейки 8", "5555555"],
  ];


  const nameColumn = (rowIndex) => (
    <ColumnCell >{data[rowIndex][0]}</ColumnCell>
  );
  const emailColumn = (rowIndex) => (
    <ColumnCell>{data[rowIndex][1]}</ColumnCell>
  );
  const spendColumn = (rowIndex) => (
    <ColumnCell>{data[rowIndex][2]}</ColumnCell>
  );

  return (    
    <TableBlockItem>      
      <TableHeader>Recent Customers</TableHeader>
     
      <HeaderStyle >
      <Table2  
        numRows={data.length} 
        defaultRowHeight={76} 
        columnWidths={[203, 269, 118 ]} 
        enableColumnResizing={false} 
        enableRowResizing={false} 
        enableRowHeader={false}
      >
        <Column name="Name"  cellRenderer={nameColumn} />
        <Column name="Email"  cellRenderer={emailColumn} />
        <Column name="Spent"  cellRenderer={spendColumn}/>
      </Table2>
      </HeaderStyle>
    </TableBlockItem>
  )
}