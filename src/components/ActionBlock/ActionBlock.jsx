import { useDispatch } from 'react-redux';
import sprite from '../../img/sprite.svg';
import { ActionConteiner } from './ActionBlock.styled';
import { deleteProduct } from '../../redux/ePharmacy/operations';

export default function ActionBlock({ id }) { 
  const dispatch = useDispatch();

 
  
  const dellItem = () => {
    dispatch(deleteProduct(id))
  };
  

  return (        
    <ActionConteiner>
      <button >
        <svg width={32} height={32}>
          <use href={`${sprite}#icon-btn-edit`} />
        </svg>
      </button>

      <button onClick={dellItem}>
        <svg width={32} height={32}>
          <use href={`${sprite}#icon-btn-dell`} />
        </svg>
      </button>
    </ActionConteiner> 
  )
}