import { AllConteinerBigTable, AllConteinersTable, TableHeader } from "common/GiobalStyles";
import { StatucColor } from "./CustomersAll.styled";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import color from "common/GlobalColers";

export default function CustomersAll( {customers} ) { 
  console.log(customers)
  const data = customers ? customers.map(({ image, name, email, address, phone, register_date }) => [ image, name, email, address, phone, register_date ]) : [];

  const customCellRenderer = (rowIndex, columnId, data) => {
    let content = data[rowIndex];
    let style = {};

    if ( columnId !== 'date') {
      style.borderRight = `1px solid ${color.blackPrimarySecondary}`;
    }  

    if (columnId === 'date') {
      const date = new Date(content);
      content = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }

    return (
      <Cell style={style}>
        {columnId === 'status' ? <StatucColor type={content}>{content}</StatucColor> : content}        
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
          <img src={rowData[0]} alt={rowData[1]} style={{ width: '36px', height: '36px', marginRight: '10px', borderRadius: '50%' }} />
          <p>{rowData[1]}</p>
        </div>
      </Cell>
    );
  };
  return (   
    <AllConteinerBigTable>
      <TableHeader>All customers</TableHeader>
      
      <AllConteinersTable >
        <Table2  
          numRows={data.length} 
          defaultRowHeight={76} 
          columnWidths={[260, 299, 213, 263, 205 ]} 
          enableColumnResizing={false} 
          enableRowResizing={false} 
          enableRowHeader={false}
        >
          <Column name="User Info" cellRenderer={(rowIndex) => customCellName(rowIndex, 'name', data)} />
          <Column name="Email" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'email', data.map(item => item[2]))} />
          <Column name="Address" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'address', data.map(item => item[3]))} />
          <Column name="Phone" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'phone', data.map(item => item[4]))} />
          <Column name="Register date" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'date', data.map(item => item[5]))} />
        </Table2>
      </AllConteinersTable>
    </AllConteinerBigTable>
  )
}