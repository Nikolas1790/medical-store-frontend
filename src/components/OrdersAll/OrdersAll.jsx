import { AllConteinerBigTable, AllConteinersTable, TableHeader } from "common/GiobalStyles";
import { StatucColor } from "./OrdersAll.styled";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import color from "common/GlobalColers";
import { useEffect, useState } from "react";
import { AvatarImg, NameConteiner } from "../../common/GiobalStyles";

export default function OrdersAll({ orders, currentPage }) { 
  const data = orders ? orders.map(({ photo, name, address, products, order_date, price, status }) => [ photo, name, address, products, order_date, price, status ]) : [];


  const [columnWidths, setColumnWidths] = useState([265, 218, 191, 232, 184, 150 ]);
  const [columnHeigh, setColumnHeigh] = useState(76);


  // Обновление ширин столбцов в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumnHeigh(74);
        setColumnWidths([114, 96, 110, 120, 85, 118 ]); // Для маленьких экранов
      } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        setColumnWidths([205, 158, 131, 172, 125, 129 ]); // Для средних экранов
      } else {
        setColumnWidths([265, 218, 191, 232, 184, 150 ]); // Для больших экранов
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
        <NameConteiner >
          <AvatarImg src={rowData[0]} alt={rowData[1]}  />
          <p>{rowData[1]}</p>
        </NameConteiner>
      </Cell>
    );
  };
  return (   
    <AllConteinerBigTable width='671px'>
      <TableHeader>All orders</TableHeader>
      
      <AllConteinersTable >
        <Table2  
          key={`table-${currentPage}-${data[0]}`}
          numRows={data.length} 
          defaultRowHeight={columnHeigh} 
          columnWidths={columnWidths} 
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
      </AllConteinersTable>
    </AllConteinerBigTable>
  )
}