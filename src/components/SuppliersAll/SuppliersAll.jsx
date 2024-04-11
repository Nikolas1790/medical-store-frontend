import { AllConteinerBigTable, AllConteinersTable, TableHeader } from "common/GiobalStyles";
import { StatucColor } from "./SuppliersAll.styled";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import color from "common/GlobalColers";
import BtnAddEditSuppliers from "components/BtnAddEditSuppliers/BtnAddEditSuppliers";
import { useEffect, useState } from "react";

export default function SuppliersAll({ suppliers }) { 
  const data = suppliers ? suppliers.map(({ name, address, suppliers, date, amount, status, _id }) => [ name, address, suppliers, date, amount, status, _id ]) : [];


  const [columnWidths, setColumnWidths] = useState([191, 188, 166, 215, 162, 189, 129 ]);
  const [columnHeigh, setColumnHeigh] = useState(76);


  // Обновление ширин столбцов в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumnHeigh(74);
        setColumnWidths([94, 94, 83, 115, 88, 90, 86 ]); // Для маленьких экранов
      } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        setColumnWidths([157, 128, 108, 157, 121, 129, 102 ]); // Для средних экранов
      } else {
        setColumnWidths([191, 188, 166, 215, 162, 189, 129 ]); // Для больших экранов
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const customCellRenderer = (rowIndex, columnId, data) => {
    let content = data[rowIndex] ;
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

    if (columnId === 'ammount') {
      content = content.replace(/^\D*/, '').trim();
    }
    if (columnId === 'name') {
      style.paddingLeft = '0px';
    }
    
    return (
      <Cell style={style}>
        {columnId === 'status' ? <StatucColor type={content}>{content}</StatucColor> : (
          columnId === 'action' ? <BtnAddEditSuppliers width="82px" height="34px" name="edit" isUpdate={true} item={content}/> : content)}  
      </Cell>
    );
  };

  return (   
    <AllConteinerBigTable width='678px'>
      <TableHeader>All suppliers</TableHeader>
      
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
          <Column name="Suppliers Info" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'name', data.map(item => item[0]))} />
          <Column name="Address" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'address', data.map(item => item[1]))} />
          <Column name="Company" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'company', data.map(item => item[2]))} />
          <Column name="Delivery date" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'date', data.map(item => item[3]))} />
          <Column name="Ammount" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'ammount', data.map(item => item[4]))} />
          <Column name="Status" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'status', data.map(item => item[5]))} />
          <Column name="Action" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'action', data)} />
        </Table2>
      </AllConteinersTable>
    </AllConteinerBigTable>
  )
}