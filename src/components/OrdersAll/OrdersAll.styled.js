import color from 'common/GlobalColers'
import { getBackgroundStatusColor, getStatusColor } from 'components/Utils/utils'
import styled from 'styled-components'

export const OrdersAllConteiner = styled.div`
  width: 1280px;
  height: 502px;
  background: ${color.white};
  border: 1px solid ${color.blackPrimarySecondary};
  border-radius: 8px;
`
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