import { selectDataInf } from '../../redux/ePharmacy/selector';
import { useEffect } from 'react';
import { dashboardInf } from '../../redux/ePharmacy/operations';
import { useDispatch, useSelector } from 'react-redux';
// import { HotkeysProvider } from "@blueprintjs/core";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import { TableBlockItem } from "components/Dashboard/Dashboard.styled";
import { HeaderStyle } from "./DashboardRecentCustomers.styled";
import { TableHeader } from "common/GiobalStyles";
import color from "common/GlobalColers";


export default function DashboardRecentCustomers() {  
  const dispatch = useDispatch();
  const { recentCustomers } = useSelector(selectDataInf);  

  useEffect(() => {
    dispatch(dashboardInf());
  }, [dispatch]);

  console.log(recentCustomers)
  const data = recentCustomers ? recentCustomers.map(({ name, email, spent, image }) => [ name, email, spent, image ]) : [];


  const customCellRenderer = (rowIndex, columnId, data) => {
    let style = {};

    // Для столбца "Name" убираем паддинг
    if (columnId === 'name') {
      style.paddingLeft = '0px';
    }
    console.log(data)
    // Для столбцов "Name" и "Email" добавляем границу справа
    if (columnId === 'name' || columnId === 'email') {
      style.borderRight = `1px solid ${color.blackPrimarySecondary}`;
    }
  
    return (
      <Cell style={style}>
        {columnId === 'name' ? (
          <div>
            {/* {console.log(data)} */}
            <img src='' alt="ffffff" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            {data[rowIndex]}

          </div>
        ):(
          data[rowIndex]
        )}
        {/* {data[rowIndex]} */}
      </Cell>
    );
  };


  const customCellName = (rowIndex, columnId, data) => {
    let style = {};
    const rowData = data[rowIndex];
  
    // Определяем стили для разных колонок, если это необходимо
    if (columnId === 'name') {
      style.paddingLeft = '0px';
    } else if (columnId === 'email') {
      style.borderRight = `1px solid ${color.blackPrimarySecondary}`;
    }
  
    // Если это колонка с именем, возвращаем ячейку с изображением и именем
    if (columnId === 'name') {
      return (
        <Cell style={style}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={rowData[3]} alt={rowData[0]} style={{ width: '36px', height: '36px', marginRight: '10px' }} />
            <span>{rowData[0]}</span>
          </div>
        </Cell>
      );
    } else {
      // Для остальных колонок возвращаем обычное отображение
      return <Cell style={style}>{rowData[columnId]}</Cell>;
    }
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
        <Column name="Name" cellRenderer={(rowIndex) => customCellName(rowIndex, 'name', data)} />
        <Column name="Email" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'email', data.map(item => item[1]))} />
        <Column name="Spent" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'spent', data.map(item => item[2]))} />
      </Table2>
      </HeaderStyle>
    </TableBlockItem>
  )
}