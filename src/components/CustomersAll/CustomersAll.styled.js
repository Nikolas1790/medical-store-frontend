import { getBackgroundStatusColor, getStatusColor } from 'components/Utils/utils'
import styled from 'styled-components'

export const StatucColor = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 92px;
  height: 25px;
  color: ${({ type }) => getStatusColor(type)};
  background: ${({ type }) => getBackgroundStatusColor(type)};

  font-size: 14px;
  border-radius: 40px;
`