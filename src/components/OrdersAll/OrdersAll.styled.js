import { getBackgroundStatusColor, getStatusColor } from 'components/Utils/utils'
import styled from 'styled-components'


export const StatucColor = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 89px;
  height: 23px;
  color: ${({ type }) => getStatusColor(type)};
  background: ${({ type }) => getBackgroundStatusColor(type)};
  font-size: 12px;
  border-radius: 40px;

  @media (min-width: 768px) {  
    width: 92px;
    height: 25px;
    font-size: 14px;
  }

  @media (min-width: 1440px) {  
    width: 89px;
  }
`