import sprite from '../../img/sprite.svg';
import { ActionBtnProduct, ActionBtnProductDell, ActionConteiner, EditDellBtn } from './ActionBlock.styled';
import PortalModal from 'components/PortalModal/PortalModal';
import { useState } from 'react';
import ProductModals from 'components/Modals/ProductModal';
import ModalClarifyingGuestion from 'components/ModalClarifyingQuestion/ModalClarifyingQuestion';

export default function ActionBlock({ item }) { 
  const [openModal, setOpenModal] = useState(false);
  const [openDellModal, setOpenDellModal] = useState(false);

  return (        
    <ActionConteiner>
      <ActionBtnProduct >
        <EditDellBtn width={32} height={32} onClick={() => setOpenModal(true)}>
          <use href={`${sprite}#icon-btn-edit`} />
        </EditDellBtn>
      </ActionBtnProduct>
      <ActionBtnProductDell onClick={() => setOpenDellModal(true)} >
        <EditDellBtn width={32} height={32}>
          <use href={`${sprite}#icon-btn-dell`} />
        </EditDellBtn>
      </ActionBtnProductDell>

      <PortalModal active={openDellModal} setActive={setOpenDellModal}>
        <ModalClarifyingGuestion closeModals={() => setOpenDellModal()} item={item}/>
      </PortalModal>
      <PortalModal active={openModal} setActive={setOpenModal}>
        <ProductModals closeModals={() => setOpenModal()} isUpdate={true} existingProduct={item} />
      </PortalModal>
    </ActionConteiner> 
  )
}