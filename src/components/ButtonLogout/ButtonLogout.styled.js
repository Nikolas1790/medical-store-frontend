import color from 'common/GlobalColers'
import styled from 'styled-components'

export const BtnLogout = styled.button`
  stroke-width: 0;
  padding: 0;
  border:none;
  color: red;
  fill: ${color.greenLight};
  stroke: ${color.white};
  scale: 1.33;
  transition: all 0.25s linear;
  &:hover {
    fill: ${color.greenDarker};
    stroke: ${color.white};
    scale: 1.5;
  }
  @media (min-width: 1440px) {
    display: block;
  }
`;