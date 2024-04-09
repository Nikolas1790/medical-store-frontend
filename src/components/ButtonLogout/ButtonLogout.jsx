import sprite from '../../img/sprite.svg';
import { BtnLogout } from "./ButtonLogout.styled";
import { useState } from "react";
import PortalModal from "components/PortalModal/PortalModal";
import ModalClarifyingGuestion from "components/ModalClarifyingQuestion/ModalClarifyingQuestion";

export default function ButtonLogout({closeModal, menu}) {
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    menu === "mob" && closeModal();    
    setOpenModal(true)
  };
  return (
    <div>
      <BtnLogout onClick={() => handleLogout()}>
        <svg width={44} height={44}>
          <use href={`${sprite}#icon-logout`} />
        </svg>
      </BtnLogout>

      <PortalModal active={openModal} setActive={setOpenModal}>
        <ModalClarifyingGuestion closeModals={() => setOpenModal()} />
      </PortalModal>
    </div>
  );
};