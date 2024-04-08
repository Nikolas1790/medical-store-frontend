import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items:center;
  gap: 14px;
  font-size: 20px;
  font-weight: 600; 
  outline: none;

  &:hover { 
    text-decoration: none;
    color: inherit;
  }
`; 

export const LogoImgResricted = styled.img`
  width: 44px;
  height: 44px;
`; 