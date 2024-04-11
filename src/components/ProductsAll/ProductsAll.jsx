import { AllConteinerBigTable, AllConteinersTable, TableHeader } from "common/GiobalStyles";
import {  StatucColor } from "./ProductsAll.styled";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import color from "common/GlobalColers";
import ActionBlock from "components/ActionBlock/ActionBlock";
import { useEffect, useState } from "react";

export default function ProductsAll({ products }) { 
  const data = products ? products.map(({ name, category, stock, suppliers, price, _id }) => 
  [ name, category, stock, 
    Array.isArray(suppliers) ? suppliers.map(s => s.name).join(", ") : suppliers, 
    price, _id 
  ]) : [];


  const [columnWidths, setColumnWidths] = useState([276, 230, 199, 226, 163, 146 ]);
  const [columnHeigh, setColumnHeigh] = useState(76);


  // Обновление ширин столбцов в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumnHeigh(74);
        setColumnWidths([112, 74, 57, 78, 69, 89 ]); // Для маленьких экранов
      } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        setColumnWidths([240, 150, 119, 150, 140, 121 ]); // Для средних экранов
      } else {
        setColumnWidths([276, 230, 199, 226, 163, 146 ]); // Для больших экранов
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



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
        {columnId === 'status' ? <StatucColor type={content}>{content}</StatucColor> : (
          columnId === 'actions' ? <ActionBlock item={content}/> : content)}  
      </Cell>
    );
  };

  return (   
    <AllConteinerBigTable width='511px'>
      <TableHeader>All products</TableHeader>
      
      <AllConteinersTable >
        <Table2  
          key={`table-${data}`}
          numRows={data.length} 
          defaultRowHeight={columnHeigh} 
          columnWidths={columnWidths} 
          enableColumnResizing={false} 
          enableRowResizing={false} 
          enableRowHeader={false}
        >
          <Column name="Product Info" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'name', data.map(item => item[0]))} />
          <Column name="Category" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'category', data.map(item => item[1]))} />
          <Column name="Stock" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'stocks', data.map(item => item[2]))} />
          <Column name="Suppliers" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'suppliers', data.map(item => item[3]))} />
          <Column name="Price" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'price', data.map(item => item[4]))} />
          <Column name="Action" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'actions', data)} />
        </Table2>
      </AllConteinersTable>
    </AllConteinerBigTable>
  )
}