import { selectDataInf } from '../../redux/ePharmacy/selector';
import { useEffect, useState } from 'react';
import { dashboardInf } from '../../redux/ePharmacy/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Cell, Column, Table2 } from "@blueprintjs/table";
import { TableBlockItem } from "components/Dashboard/Dashboard.styled";
import { AllConteinersTable, TableHeader } from "common/GiobalStyles";
import color from "common/GlobalColers";
import { AvatarImg, NameConteiner } from 'common/GiobalStyles';


export default function DashboardRecentCustomers() {  
  const dispatch = useDispatch();
  const { recentCustomers } = useSelector(selectDataInf);  

  const [columnWidths, setColumnWidths] = useState([203, 269, 118]);
  const [columnHeigh, setColumnHeigh] = useState(78);

  // Обновление ширин столбцов в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumnHeigh(74);
        setColumnWidths([92, 151, 64]); // Для маленьких экранов
      } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        setColumnWidths([235, 279, 150]); // Для средних экранов
      } else {
        setColumnWidths([203, 269, 118]); // Для больших экранов
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dispatch(dashboardInf());
  }, [dispatch]);

  const data = recentCustomers ? recentCustomers.map(({ name, email, spent, image }) => [ name, email, spent, image ]) : [];

  const customCellRenderer = (rowIndex, columnId, data) => {
    let style = {};
    if ( columnId === 'email') {
      style.borderRight = `1px solid ${color.blackPrimarySecondary}`;
    }  
    return (
      <Cell style={style}>
        {data[rowIndex]}        
      </Cell>
    );
  };


  const customCellName = (rowIndex, columnId, data) => {
    let style = {};
    const rowData = data[rowIndex];

    if (columnId === 'name') {
      style.borderRight = `1px solid ${color.blackPrimarySecondary}`;
    }
  
    if (columnId === 'name') {
      style.paddingLeft = '0px';
    }

    return (
      <Cell style={style}>
        <NameConteiner>
          <AvatarImg src={rowData[3]} alt={rowData[0]} />
          <p>{rowData[0]}</p>
        </NameConteiner>
      </Cell>
    );
  };
  
  return (    
    <TableBlockItem>      
      <TableHeader>Recent Customers</TableHeader>
     
      <AllConteinersTable >
        <Table2  
          numRows={data.length} 
          defaultRowHeight={columnHeigh} 
          columnWidths={columnWidths} 
          enableColumnResizing={false} 
          enableRowResizing={false} 
          enableRowHeader={false}
        >
          <Column name="Name" cellRenderer={(rowIndex) => customCellName(rowIndex, 'name', data)} />
          <Column name="Email" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'email', data.map(item => item[1]))} />
          <Column name="Spent" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'spent', data.map(item => item[2]))} />
        </Table2>
      </AllConteinersTable>
    </TableBlockItem>
  )
}