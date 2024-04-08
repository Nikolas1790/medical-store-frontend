import color from 'common/GlobalColers'
import styled from 'styled-components'
import { Field } from 'formik';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center ;
  flex-direction: column;
`

export const LoginContainer = styled.div`
  position: relative;
  width: 1440px;
  padding: 28px 253px 262px 100px;
  /* background: yellow; */
  overflow: hidden;
`
export const ElementsSvg = styled.svg`
  position: absolute;
  right: -180px;
  bottom: -88px;
`
export const ContextContainer = styled.div`
  display: flex;
  gap: 150px;
  margin-top: 262px;
`
///////////////////////////////////////////////////
export const TitleContainer = styled.div`
  position: relative;
`
export const WhitePill = styled.img`
  position: absolute;
  top: -104px;
  right: 20px;
`
export const Title = styled.h2`
  font-size: 54px;
  font-weight: 600;
  width: 614px;
`
export const TitleSpan = styled.span`
  color:${color.greenLight};
`
/////////////////////////////////////////////////////////////////////////////
export const FormContainer = styled.div`
  width: 323px;
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
  

  /* @media (min-width: 768px) {
    max-width: 472px;
  } */
`;

export const FormField = styled(Field)`
  width: 100%;
  max-width: 335px;

  height: 44px;

  border: 1px solid	${color.blackPrimarySecondary};
  /* border: 1px solid	${(props) => (props.error === "true" ? color.red : color.blackPrimarySecondary)}; */

  border-radius: 60px;
  padding: 13px 18px;
  outline: none;
  /* color: ${color.whitePrimary}; */
  background: ${color.white};
  
  @media (min-width: 768px) {
    /* max-width: 472px; */
    /* height: 50px; */
    /* padding: 13px 18px; */
  }
`;

export const EyeSvg = styled.svg`
  position: absolute;
  top: 13px;
  right: 13px;
  cursor: pointer;
  stroke: ${color.blackPrimary};
  fill: none;

  @media (min-width: 768px) {
    top: 13px;
    right: 18px;
  }
`;
