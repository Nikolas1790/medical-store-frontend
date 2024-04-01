import { selectDataInf } from '../../redux/ePharmacy/selector';
import { useEffect } from 'react';
import { dashboardInf } from '../../redux/ePharmacy/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Cell, Column, Table2 } from "@blueprintjs/table";
import { TableBlockItem } from "components/Dashboard/Dashboard.styled";
import { AllConteinersTable, TableHeader } from "common/GiobalStyles";
import color from "common/GlobalColers";


export default function DashboardRecentCustomers() {  
  const dispatch = useDispatch();
  const { recentCustomers } = useSelector(selectDataInf);  

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={rowData[3]} alt={rowData[0]} style={{ width: '36px', height: '36px', marginRight: '10px' }} />
          <p>{rowData[0]}</p>
        </div>
      </Cell>
    );
  };
  return (    
    <TableBlockItem>      
      <TableHeader>Recent Customers</TableHeader>
     
      <AllConteinersTable >
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
      </AllConteinersTable>
    </TableBlockItem>
  )
}