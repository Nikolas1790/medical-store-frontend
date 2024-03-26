import Logo from "components/Logo/Logo";
import { Container, ContextContainer, ElementsSvg, FormContainer, LoginContainer, Title, TitleContainer, TitleSpan, WhitePill } from "./RegisterAndLogin.styled";
import whitePill from "../../img/whiteRoundPill/white-round-pill.png"
import sprite from '../../img/symbol-defs.svg';

export default function Login() {  

  return (
    <Container>

      <LoginContainer>
        <ElementsSvg width={464} height={345}>
          <use href={`${sprite}#icon-elements`} />
        </ElementsSvg>
        <Logo />
        <ContextContainer>
          <TitleContainer>
            <WhitePill src={whitePill} alt="tablet" />
            <Title>Your medication, delivered Say goodbye to all <TitleSpan>your healthcare</TitleSpan> worries with us</Title>
          </TitleContainer>


          <FormContainer>
            <p>Loffffffffffff</p>
          </FormContainer>
        </ContextContainer>
      </LoginContainer>
    </Container>
  );
}