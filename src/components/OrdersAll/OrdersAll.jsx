import { TableHeader } from "common/GiobalStyles";
import { OrdersAllConteiner, StatucColor } from "./OrdersAll.styled";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import { HeaderStyle, NameCustomer } from "components/DashboardRecentCustomers/DashboardRecentCustomers.styled";
import color from "common/GlobalColers";

export default function OrdersAll( {orders} ) { 
  const data = orders ? orders.map(({ photo, name, address, products, order_date, price, status }) => [ photo, name, address, products, order_date, price, status ]) : [];

  const customCellRenderer = (rowIndex, columnId, data) => {
    let content = data[rowIndex];
    let style = {};

    if ( columnId !== 'status') {
      style.borderRight = `1px solid ${color.blackPrimarySecondary}`;
    }  

    if (columnId === 'order') {
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
          <NameCustomer>{rowData[1]}</NameCustomer>
        </div>
      </Cell>
    );
  };
  return (   
    <OrdersAllConteiner>
      <TableHeader>All orders</TableHeader>
      
      <HeaderStyle >
      <Table2  
        numRows={data.length} 
        defaultRowHeight={76} 
        columnWidths={[265, 218, 191, 232, 184, 150 ]} 
        enableColumnResizing={false} 
        enableRowResizing={false} 
        enableRowHeader={false}
      >
        <Column name="User Info" cellRenderer={(rowIndex) => customCellName(rowIndex, 'name', data)} />
        <Column name="Address" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'address', data.map(item => item[2]))} />
        <Column name="Products" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'products', data.map(item => item[3]))} />
        <Column name="Order date" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'order', data.map(item => item[4]))} />
        <Column name="Price" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'price', data.map(item => item[5]))} />
        <Column name="Status" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'status', data.map(item => item[6]))} />
      </Table2>
      </HeaderStyle>
    </OrdersAllConteiner>
  )
}