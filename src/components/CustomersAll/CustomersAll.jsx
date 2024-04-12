import { AllConteinerBigTable, AllConteinersTable, AvatarImg, NameConteiner, TableHeader } from "common/GiobalStyles";
import { StatucColor } from "./CustomersAll.styled";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import color from "common/GlobalColers";
import { useEffect, useState } from "react";

export default function CustomersAll({customers, currentPage }) { 
  const data = customers ? customers.map(({ image, name, email, address, phone, register_date, photo }) => [ image, name, email, address, phone, register_date, photo ]) : [];

  const [columnWidths, setColumnWidths] = useState([260, 299, 213, 263, 205 ]);
  const [columnHeigh, setColumnHeigh] = useState(76);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumnHeigh(74);
        setColumnWidths([94, 161, 120, 148, 119 ]); // Для маленьких экранов
      } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        setColumnWidths([195, 234, 148, 198, 145 ]); // Для средних экранов
      } else {
        setColumnWidths([260, 299, 213, 263, 205 ]); // Для больших экранов
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <NameConteiner>
          <AvatarImg src={rowData[0]|| rowData[6]} />
          <p>{rowData[1]}</p>
        </NameConteiner>
      </Cell>
    );
  };
  return (   
    <AllConteinerBigTable width='670px'>
      <TableHeader>All customers</TableHeader>
      
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
          <Column name="Email" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'email', data.map(item => item[2]))} />
          <Column name="Address" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'address', data.map(item => item[3]))} />
          <Column name="Phone" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'phone', data.map(item => item[4]))} />
          <Column name="Register date" cellRenderer={(rowIndex) => customCellRenderer(rowIndex, 'date', data.map(item => item[5]))} />
        </Table2>
      </AllConteinersTable>
    </AllConteinerBigTable>
  )
}