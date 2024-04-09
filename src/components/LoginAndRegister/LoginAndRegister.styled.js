import color from 'common/GlobalColers'
import styled from 'styled-components'
import { Field } from 'formik';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center ;
  /* flex-direction: column; */
  @media (min-width: 768px) {

  }
  @media (min-width: 1440px) {

  }
`

export const LoginContainer = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  padding: 24px 20px;
  overflow: hidden;
/* background: black; */
  @media (min-width: 768px) {
    width: 768px;
    height: 1024px;
    padding: 24px 32px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    height: 800px;
    padding: 28px  100px;
  }
`
export const ElementsSvg = styled.svg`
  position: absolute;
  right: -180px;
  bottom: -188px;
  width: 464px;
  height: 345px;
  @media (min-width: 768px) {
    right: -180px;
    bottom: -88px;
  }
  @media (min-width: 1440px) {

  }
`
export const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 148px;

  @media (min-width: 768px) {
    gap: 50px;
    margin-top: 204px;
  }
  @media (min-width: 1440px) {
    gap: 150px;
    flex-direction: row;
    margin-top: 226px;
  }
`
///////////////////////////////////////////////////
export const TitleContainer = styled.div`
  position: relative;
  width: 335px;
  @media (min-width: 768px) {
    width: 614px;
  }
  @media (min-width: 1440px) {

  }
`
export const WhitePill = styled.img`
  position: absolute;
  top: -58px;
  right: 20px;
  width: 95px;
  height: 93px;
  @media (min-width: 768px) {
    top: -104px;
    width: 179px;
    height: 175px;
  }
  @media (min-width: 1440px) {

  }
`
export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
  @media (min-width: 768px) {
    font-size: 54px;
    font-weight: 600;
    line-height: 1.1;
  }
  @media (min-width: 1440px) {

  }
`
export const TitleSpan = styled.span`
  color:${color.greenLight};
`
/////////////////////////////////////////////////////////////////////////////
export const FormContainer = styled.div`
  width: 335px;
  @media (min-width: 768px) {
    width: 323px;
  }
`
/////////////////////////////////////////////////////////////////////////////
export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FormConteiner = styled.div`
  display:flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormFieldConteiner = styled.div`
  position:relative;
  width: 100%;
  height:44px;

`;

export const FormField = styled(Field)`
  width: 100%;
  /* max-width: 335px; */
  height: 44px;
  border: 1px solid	${color.blackPrimarySecondary};
  border-radius: 60px;
  padding: 13px 18px;
  outline: none;
  background: ${color.white};

`;

export const EyeSvg = styled.svg`
  position: absolute;
  top: 13px;
  right: 18px;
  cursor: pointer;
  stroke: ${color.blackPrimary};
  fill: none;

  @media (min-width: 768px) {
    /* top: 13px; */
    /* right: 18px; */
  }
`;
