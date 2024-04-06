import { AddEditSuppliers, EditSuppliers } from "./BtnAddEditSuppliers.styled";
import sprite from '../../img/sprite.svg';
import PortalModal from "components/PortalModal/PortalModal";
import { useState } from "react";
import SuppliesModals from "components/Modals/SuppliesModal";

export default function BtnAddEditSuppliers({width, height, name, isUpdate, item }){
  // console.log(item)
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <AddEditSuppliers width={width} height={height} onClick={() => setOpenModal(true)}>

        {name === "edit" ? (
          <>
            <svg width={14} height={14}>
              <use href={`${sprite}#icon-edit`} />
            </svg>
            <EditSuppliers>Edit</EditSuppliers>
          </>
        ) : <p>Add a new suppliers</p>}

      </AddEditSuppliers>
        <PortalModal active={openModal} setActive={setOpenModal}>
          <SuppliesModals closeModals={() => setOpenModal()} isUpdate={isUpdate} existingSuppliers={item}/>
        </PortalModal>
    </div>
  );
};