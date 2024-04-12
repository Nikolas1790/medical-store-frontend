import { createGlobalStyle, styled } from 'styled-components';
import color from './GlobalColers';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import InterRegularWoff from '../fonts/Inter-Regular.woff';
import InterSemiBoldWoff from '../fonts/Inter-SemiBold.woff';
import InterMediumWoff from '../fonts/Inter-Medium.woff';
import InterRegularWoff2 from '../fonts/Inter-Regular.woff2';
import InterSemiBoldWoff2 from '../fonts/Inter-SemiBold.woff2';
import InterMediumWoff2 from '../fonts/Inter-Medium.woff2';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400; 
  src: url(${InterRegularWoff2}) format('woff2'), url(${InterRegularWoff}) format('woff');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500; 
  src: url(${InterMediumWoff2}) format('woff2'), url(${InterMediumWoff}) format('woff');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600; 
  src: url(${InterSemiBoldWoff2}) format('woff2'), url(${InterSemiBoldWoff}) format('woff');
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "SF Pro Text", 
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 1.13;
  color: ${color.blackPrimary};
  background-color: ${color.backgroundMain};
  width: 100%;
  height: 100vh;
  margin: 0;  
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
  color: currentColor;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  color: ${color.whitePrimary};
  cursor: pointer;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: inherit;
  background: transparent;
  &:hover,
  &:focus {
    outline: none;
  }
}
html {
  scroll-behavior: smooth;
}
.no-scroll {
  overflow: hidden;
}
`;

////////////////////// Main conteiner
export const  ContentContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 20px;
  padding: 20px 20px 80px 20px;
  padding-top:  ${({ top }) => top || '40px'};
  padding-bottom:  20px;
  width: 375px;

  @media (min-width: 768px) {  
    gap:${({ bottom }) => bottom || '20px'};
    padding: 20px 32px 40px 32px;
    padding-top:  ${({ top }) => top || '50px'};
    padding-bottom:  ${({ bottom }) => bottom || '20px'};
    width: 768px;
  }

  @media (min-width: 1440px) {  
    padding: 75px 40px 20px 120px;
    padding-top:  ${({ top }) => top || '75px'};
    width: 1440px;
  }
`
//////////////////////////////////////////////////////////////

export const FilterAddConteiner = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  flex-wrap: wrap;
  gap: 18px;
`

export const TableHeader = styled.h2`
  height: 48px;
  border-radius: 8px 8px 0px 0px;
  background: ${color.greenSupperLight};
  padding: 14px;
  font-size: 16px;

  @media (min-width: 768px) {  
    height: 64px;
    font-size: 18px;
    padding: 20px;
  }
`

export const AllConteinersTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .bp5-table-container {    
    box-shadow: none; 
     
    &:hover,
    &:focus {
      outline: none; 
    }  
  }

  .bp5-table-header {
    position: relative;
    display: flex;
    align-items: center;
    height: 42px;
    background-color: ${color.white}; 
    
    font-size: 12px;  
    font-weight: 500;
    color: ${color.blackColorSecondary};
    box-shadow: none; //
    border-bottom: 1px solid ${color.blackPrimarySecondary};

    @media (min-width: 768px) {  
      padding-left: 10px;
      height: 58px;
    }
  }

  .bp5-table-header:not(:last-child)::after {
    content: ''; 
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0; 
    border-right: 1px solid ${color.blackPrimarySecondary}; 
  }
  
  .bp5-table-column-name {
    font-size: 12px;

    @media (min-width: 768px) {  
      font-size: 14px;
    }
  }
  .bp5-table-column-header-cell:first-child .bp5-table-column-name {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    font-size: 12px;

    @media (min-width: 768px) {  
      margin-left: -20px;
      font-size: 14px;
    }
  }

 .bp5-table-cell { 
    display: flex;
    align-items: center;
    background: ${color.white};
    font-size: 12px;
    font-weight: 500;
    padding-left: 10px;
    padding-right: 0px;
    box-shadow: none; //
    border-bottom: 1px solid ${color.blackPrimarySecondary};  

    @media (min-width: 768px) {  
      font-size: 16px;
      padding-left: 20px;
    }
  }
`

export const AllConteinerBigTable = styled.div`
  width: ${({ width }) => width || '678px'};
  height: 460px;
  background: ${color.white};
  border: 1px solid ${color.blackPrimarySecondary};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;

  @media (min-width: 768px) {  
    width: 960px;
    height: 502px;
  }
  @media (min-width: 1440px) {  
    width: 1280px;
  }
`

export const NameConteiner = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const AvatarImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 50%;
  margin-right: 100%;
  
  @media (min-width: 768px) {  
    width: 36px;
    height: 36px;
  }
`
