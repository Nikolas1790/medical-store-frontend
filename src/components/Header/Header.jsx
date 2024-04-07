import Logo from "components/Logo/Logo";
import sprite from '../../img/sprite.svg';
import { BtnLogout, Divider, HeaderBlock, HeaderContainer, HeaderMainInf, HeaderText, HeaderTextBlock, HeaderTitle } from "./Header.styled";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import { getPageName } from "components/Utils/utils";
import { useState } from "react";
import PortalModal from "components/PortalModal/PortalModal";
import ModalClarifyingGuestion from "components/ModalClarifyingQuestion/ModalClarifyingQuestion";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  const email = useSelector((state) => state.auth.user.email); 
  const location = useLocation(); // Получаем текущий путь
  const pageName = getPageName(location.pathname);
  return (
    <HeaderContainer>
      <HeaderBlock>
        <Sidebar />

        <Logo />
        <HeaderMainInf>
          <HeaderTitle>Medicine store</HeaderTitle>
          <HeaderTextBlock>
            <HeaderText>{pageName}</HeaderText>
            <Divider />
            <HeaderText>{email}</HeaderText>
          </HeaderTextBlock>
        </HeaderMainInf>
        <BtnLogout onClick={() => setOpenModal(true)}>
          <svg width={44} height={44}>
            <use href={`${sprite}#icon-logout`} />
          </svg>
        </BtnLogout>

        <PortalModal active={openModal} setActive={setOpenModal}>
          <ModalClarifyingGuestion closeModals={() => setOpenModal()} />
        </PortalModal>
      </HeaderBlock>
    </HeaderContainer>
  );
};