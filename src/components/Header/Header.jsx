import Logo from "components/Logo/Logo";
import sprite from '../../img/sprite.svg';
import { Divider, HeaderBlock, HeaderContainer, HeaderMainInf, HeaderNavBlock, HeaderText, HeaderTextBlock, HeaderTitle, DesctopSvgConteiner, SvgBurgerMenu } from "./Header.styled";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import { getPageName } from "components/Utils/utils";
import { useState } from "react";
import PortalModal from "components/PortalModal/PortalModal";
import { selectUser } from "../../redux/auth/selectorAuth";
import SidebarModalMenu from "components/SidebarModalMenu/SidebarModalMenu";
import ButtonLogout from "components/ButtonLogout/ButtonLogout";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {email} = useSelector(selectUser); 
  const location = useLocation(); 
  const pageName = getPageName(location.pathname);
// console.log(isSidebarOpen)
  return (
    <HeaderContainer>
      <HeaderBlock>
        <HeaderNavBlock>
          <button onClick={() => setIsSidebarOpen(true)}>
            <SvgBurgerMenu >
              <use href={`${sprite}#icon-burger-menu`} />
            </SvgBurgerMenu>
          </button>
          <DesctopSvgConteiner>
            <Sidebar />
          </DesctopSvgConteiner>
          <Logo />
          <HeaderMainInf>
            <HeaderTitle>Medicine store</HeaderTitle>
            <HeaderTextBlock>
              <HeaderText>{pageName}</HeaderText>
              <Divider />
              <HeaderText>{email}</HeaderText>
            </HeaderTextBlock>
          </HeaderMainInf>
        </HeaderNavBlock>

        <DesctopSvgConteiner>
          <ButtonLogout />
        </DesctopSvgConteiner>

        <PortalModal active={isSidebarOpen} setActive={setIsSidebarOpen}>
          <SidebarModalMenu open={isSidebarOpen} closeModals={() => setIsSidebarOpen(false)} />
        </PortalModal>
      </HeaderBlock>
    </HeaderContainer>
  );
};