import { AddEditSuppliers, EditSuppliers } from "./BtnAddEditSuppliers.styled";
import sprite from '../../img/sprite.svg';

export default function BtnAddEditSuppliers({width, height, name}){
  return (
    <AddEditSuppliers width={width} height={height}>
      {name === "edit" ? (
        <>
          <svg width={14} height={14}>
            <use href={`${sprite}#icon-edit`} />
          </svg>
          <EditSuppliers>Edit</EditSuppliers>
        </>
        ) : <p>Add a new suppliers</p>}
    </AddEditSuppliers>
  );
};