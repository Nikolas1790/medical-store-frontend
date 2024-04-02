import { AllConteinerBigTable, AllConteinersTable, TableHeader } from "common/GiobalStyles";
import { StatucColor } from "./ProductsAll.styled";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import color from "common/GlobalColers";

export default function ProductsAll( {products, currentPage} ) { 
  const data = products ? products.map(({ name, category, stock, suppliers, price }) => [ name, category, stock, suppliers, price ]) : [];

  const customCellRenderer = (rowIndex, columnId, data) => {
    let content = data[rowIndex];
    let style = {};

    if ( columnId !== 'actions') {
      style.borderRight = `1px solid ${color.blackPrimarySecondary}`;
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
      <TableHeader>All products</TableHeader>
      
      <AllConteinersTable >
        <Table2  
         key={`table-${currentPage}-${data[0]}`}
          numRows={data.length} 
          defaultRowHeight={76} 
          columnWidths={[276, 230, 199, 226, 163, 146 ]} 
          enableColumnResizing={false} 
          enableRowResizing={false} 
          enableRowHeader={false}
        >
          <Column name="Product Info" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'name', data.map(item => item[0]))} />
          <Column name="Category" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'category', data.map(item => item[1]))} />
          <Column name="Stock" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'stocks', data.map(item => item[2]))} />
          <Column name="Suppliers" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'suppliers', data.map(item => item[3]))} />
          <Column name="Price" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'price', data.map(item => item[4]))} />
          <Column name="Action" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'actions', data.map(item => item[5]))} />
        </Table2>
      </AllConteinersTable>
    </AllConteinerBigTable>
  )
}