import Logo from "components/Logo/Logo";
import sprite from '../../img/sprite.svg';
import { HeaderBlock, HeaderContainer, HeaderMainInf, HeaderText, HeaderTitle } from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderBlock>
        <Logo />

        <HeaderMainInf>
          <HeaderTitle>Medicine store</HeaderTitle>
          <HeaderContainer>
            <HeaderText>Dasboard</HeaderText>
            <HeaderText>vendor@gmail.com</HeaderText>
          </HeaderContainer>
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
