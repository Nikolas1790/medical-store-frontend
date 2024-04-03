import sprite from '../../img/sprite.svg';
import { ActionConteiner } from './ActionBlock.styled';

export default function ActionBlock({ id }) { 
  // console.log(id)
  return (        
    <ActionConteiner>
      <button >
        <svg width={32} height={32}>
          <use href={`${sprite}#icon-btn-edit`} />
        </svg>
      </button>

      <button >
        <svg width={32} height={32}>
          <use href={`${sprite}#icon-btn-dell`} />
        </svg>
      </button>
    </ActionConteiner> 
  )
}