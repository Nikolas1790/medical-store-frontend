// import { selectDataInf } from '../../redux/ePharmacy/selector';
// import { useEffect } from 'react';
// import { dashboardInf } from '../../redux/ePharmacy/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { HotkeysProvider } from "@blueprintjs/core";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import { TableBlockItem } from "components/Dashboard/Dashboard.styled";
import { HeaderStyle } from "./DashboardRecentCustomers.styled";
import { TableHeader } from "common/GiobalStyles";
import color from "common/GlobalColers";


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


  const customCellRenderer = (rowIndex, columnId, data) => {
    // Проверяем, принадлежит ли текущая ячейка к столбцу "Name" или "Email"
    const isSpecialColumn = columnId === 'name' || columnId === 'email';
  
    return (
      <Cell style={isSpecialColumn ? {borderRight: `1px solid ${color.blackPrimarySecondary}`} : undefined}>
        {data[rowIndex]}
      </Cell>
    );
  };
  return (    
    <TableBlockItem>      
      <TableHeader>Recent Customers</TableHeader>
     
      <HeaderStyle >
      <Table2  
        numRows={data.length} 
        defaultRowHeight={78} 
        columnWidths={[203, 269, 118 ]} 
        enableColumnResizing={false} 
        enableRowResizing={false} 
        enableRowHeader={false}
      >
  <Column name="Name" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'name', data.map(item => item[0]))} />
  <Column name="Email" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'email', data.map(item => item[1]))} />
  <Column name="Spent" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'spent', data.map(item => item[2]))} />
      </Table2>
      </HeaderStyle>
    </TableBlockItem>
  )
}