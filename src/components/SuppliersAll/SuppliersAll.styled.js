import { getActiveColor, getBackgroundActiveColor } from 'components/Utils/utils'
import styled from 'styled-components'

export const StatucColor = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 23px;
  color: ${({ type }) => getActiveColor(type)};
  background: ${({ type }) => getBackgroundActiveColor(type)};
  font-size: 12px;
  border-radius: 40px;

  @media (min-width: 768px) {  
    width: 89px;
    height: 25px;
    font-size: 14px;
  }
`