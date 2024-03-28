import color from 'common/GlobalColers';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarConteiner = styled.div`
  position: absolute;
  top: 100%; /* Это разместит Sidebar прямо под Header */
  left: 0;
  
  display: flex;
  flex-direction: column;
  /* align-items:center; */
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
  box-shadow: 0px -1px 7px 0px rgba(71, 71, 71, 0.05);

  fill: ${color.grey};
  &:hover,
  &:focus {
    fill: ${color.greenDarker};
    stroke: ${color.greenDarker};
    /* color: red; */
  }

  &.active {
    fill: ${color.greenLight};
    stroke: ${color.greenLight};
    /* color: yellow; */

    &:hover {
      /* fill: ${color.greenDarker};
      stroke: ${color.greenDarker}; */
    }
  }
`; 