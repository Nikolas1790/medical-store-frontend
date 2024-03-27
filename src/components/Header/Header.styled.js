import color from 'common/GlobalColers'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderBlock = styled.div`
  display: flex;
  padding: 15px 40px 15px 20px;
  background: yellow;
`
///////////////////////////////////////////////////
export const HeaderMainInf = styled.div`
  margin: 0 1057px 0 60px;
`

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.18;
  margin-bottom: 4px;
`
export const HeaderConteiner = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* gap: 14px; */
`
export const HeaderText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${color.textColorSecondary};
`