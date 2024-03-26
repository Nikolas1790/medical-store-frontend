import color from 'common/GlobalColers'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center ;
  flex-direction: column;
  /* gap: 10px; */
`


export const LoginContainer = styled.div`
  position: relative;
  width: 1440px;
  padding: 28px 253px 262px 100px;
  background: yellow;
  overflow: hidden;
  /* display: flex;
  align-items: center;
  justify-content: center ;
  flex-direction: column; */
  /* gap: 10px; */
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