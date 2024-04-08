import color from 'common/GlobalColers';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarConteiner = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  height: 721px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 80px;
  padding: 40px 18px;
  border-right: 1px solid ${color.blackPrimarySecondary};
`; 

export const PageNav = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${color.white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 

  fill: ${color.grey};
  transition: all 0.25s linear;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); 
    fill: ${color.greenDarker};
    stroke: ${color.greenDarker};
    outline: none;
  }

  &.active {
    fill: ${color.greenLight};
    stroke: ${color.greenLight};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 

    &:hover {
      /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);  */
    }
  }
`; 