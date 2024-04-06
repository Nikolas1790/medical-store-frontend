import { useDispatch } from 'react-redux';
import sprite from '../../img/sprite.svg';
import { ActionBtnProduct, ActionConteiner } from './ActionBlock.styled';
import { deleteProduct } from '../../redux/ePharmacy/operations';
import PortalModal from 'components/PortalModal/PortalModal';
import { useState } from 'react';
import ProductModals from 'components/Modals/ProductModal';

export default function ActionBlock({ item }) { 
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const id = item?.[5];
//  console.log(id)
  
  const dellItem = () => {
    dispatch(deleteProduct(id))
  };  

  return (        
    <ActionConteiner>
      <ActionBtnProduct >
        <svg width={32} height={32} onClick={() => setOpenModal(true)}>
          <use href={`${sprite}#icon-btn-edit`} />
        </svg>
      </ActionBtnProduct>

      <button onClick={dellItem}>
        <svg width={32} height={32}>
          <use href={`${sprite}#icon-btn-dell`} />
        </svg>
      </button>
      <PortalModal active={openModal} setActive={setOpenModal}>
        <ProductModals closeModals={() => setOpenModal()} isUpdate={true} existingProduct={item} />
      </PortalModal>
    </ActionConteiner> 
  )
}