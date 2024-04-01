import { AllConteinerBigTable, AllConteinersTable, TableHeader } from "common/GiobalStyles";
import { StatucColor } from "./SuppliersAll.styled";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import color from "common/GlobalColers";

export default function SuppliersAll({ suppliers }) { 
  console.log(suppliers)
  const data = suppliers ? suppliers.map(({ name, address, suppliers, date, amount, status }) => [ name, address, suppliers, date, amount, status ]) : [];

  const customCellRenderer = (rowIndex, columnId, data) => {
    console.log(data)
    let content = data[rowIndex];
    let style = {};

    if ( columnId !== 'action') {
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

    if (columnId === 'name') {
      style.paddingLeft = '0px';
    }
    return (
      <Cell style={style}>
        {columnId === 'status' ? <StatucColor type={content}>{content}</StatucColor> : content}        
      </Cell>
    );
  };

  return (   
    <AllConteinerBigTable>
      <TableHeader>All suppliers</TableHeader>
      
      <AllConteinersTable >
        <Table2  
          numRows={data.length} 
          defaultRowHeight={76} 
          columnWidths={[191, 188, 166, 215, 162, 189, 129 ]} 
          enableColumnResizing={false} 
          enableRowResizing={false} 
          enableRowHeader={false}
        >
          <Column name="User Info" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'name', data.map(item => item[0]))} />
          <Column name="Address" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'address', data.map(item => item[1]))} />
          <Column name="Company" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'company', data.map(item => item[2]))} />
          <Column name="Delivery date" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'date', data.map(item => item[3]))} />
          <Column name="Ammount" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'ammount', data.map(item => item[4]))} />
          <Column name="Status" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'status', data.map(item => item[5]))} />
          <Column name="Action" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'action', data.map(item => item[6]))} />

        </Table2>
      </AllConteinersTable>
    </AllConteinerBigTable>
  )
}