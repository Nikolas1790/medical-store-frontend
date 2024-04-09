import { BtnClose, ConteinerSidebarModal } from "./SidebarModalMenu.sryled";
import sprite from '../../img/sprite.svg';
import Sidebar from "components/Sidebar/Sidebar";
import ButtonLogout from "components/ButtonLogout/ButtonLogout";

export default function SidebarModalMenu({ open, closeModals }) {
  return (
    <ConteinerSidebarModal open={open}>
      <BtnClose  onClick={() => closeModals()}>
        <svg width={28} height={28}>
          <use href={`${sprite}#icon-x`} />
        </svg>  
      </BtnClose>
      <Sidebar closeModals={closeModals}/>
      <ButtonLogout closeModal={closeModals} menu="mob"/>
    </ConteinerSidebarModal>
  )
};