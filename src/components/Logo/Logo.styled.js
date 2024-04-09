// import color from 'common/GlobalColers';
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

export const LogoAccaunt = styled.img`
      min-width: 32px;
  min-height: 32px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`; 