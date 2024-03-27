import Logo from "components/Logo/Logo";
import sprite from '../../img/sprite.svg';
import { Divider, HeaderBlock, HeaderContainer, HeaderMainInf, HeaderText, HeaderTextBlock, HeaderTitle } from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderBlock>
        <Logo />

        <HeaderMainInf>
          <HeaderTitle>Medicine store</HeaderTitle>
          <HeaderTextBlock>
            <HeaderText>Dasboard</HeaderText>
            <Divider />
            <HeaderText>vendor@gmail.com</HeaderText>
          </HeaderTextBlock>
        </HeaderMainInf>

        <button>
          <svg width={44} height={44}>
            <use href={`${sprite}#icon-logout`} />
          </svg>
        </button>
      </HeaderBlock>
    </HeaderContainer>
  );
};
