import color from 'common/GlobalColers';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarConteiner = styled.div`
  position: absolute;
  top: 100%; /* Это разместит Sidebar прямо под Header */
  left: 0;
  z-index: 1;
  height: 721px;
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
  /* box-shadow: 0px -1px 7px 0px rgba(71, 71, 71, 0.05); */

  fill: ${color.grey};
  transition: all 0.25s linear;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); 
    fill: ${color.greenDarker};
    stroke: ${color.greenDarker};
    /* border: none; */
    /* color: red; */
    outline: none;
  }

  &.active {
    fill: ${color.greenLight};
    stroke: ${color.greenLight};
    /* color: yellow; */
      box-shadow: none; 

    &:hover {
      /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);  */
      /* fill: ${color.greenDarker};
      stroke: ${color.greenDarker}; */
    }
  }
`; 