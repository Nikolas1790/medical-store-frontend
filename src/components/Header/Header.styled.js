import color from 'common/GlobalColers'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
`

export const HeaderBlock = styled.div`
  position: relative;
  display: flex;
  padding: 15px 40px 15px 20px; 
`
///////////////////////////////////////////////////
export const HeaderMainInf = styled.div`
  width: 280px;
  margin: 0 957px 0 60px;
`

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.18;
  margin-bottom: 4px;
`
export const HeaderTextBlock = styled.div`
  display: flex;
`
export const HeaderText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${color.blackColorSecondary};
`

export const Divider = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 8px; 
  
  &::before {
      content: '';
      position: absolute;
      top: 0;        
      height: 100%;
      width: 1px;
      background-color: ${color.blackPrimarySecondary}; 
  }
  /* @media (max-width: 560px) {
     display: none;
  }; */
`;

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
`;
