import { getActiveColor, getBackgroundActiveColor } from 'components/Utils/utils'
import styled from 'styled-components'

export const StatucColor = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 89px;
  height: 25px;
  color: ${({ type }) => getActiveColor(type)};
  background: ${({ type }) => getBackgroundActiveColor(type)};

  font-size: 14px;
  border-radius: 40px;

`