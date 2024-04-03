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
}
html {
  scroll-behavior: smooth;
}

.no-scroll {
  overflow: hidden;
}
`;

////////////////////////////////////////////////////////////////////////////////////////
export const  ContentContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap:${({ bottom }) => bottom || '20px'};
  padding: 75px 40px 20px 120px;
  padding-top:  ${({ top }) => top || '75px'};
  padding-bottom:  ${({ bottom }) => bottom || '20px'};

  /* background: pink;  */
  width: 1440px;
`
//////////////////////////////////////////////////////////////

export const FilterAddConteiner = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
`


export const TableHeader = styled.h2`
  height: 64px;
  border-radius: 8px 8px 0px 0px;
  background: ${color.greenSupperLight};
  padding: 20px;
`

export const AllConteinersTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .bp5-table-container {    
    box-shadow: none;    
  }

  .bp5-table-header {
    position: relative;
    display: flex;
    align-items: center;
    height: 58px;
    background-color: ${color.white}; 
    padding-left: 10px;

    font-size: 14px;  
    font-weight: 500;
    color: ${color.textColorSecondary};
    box-shadow: none; //
    border-bottom: 1px solid ${color.blackPrimarySecondary};
  }

  .bp5-table-header:not(:last-child)::after {
    content: ''; 
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0; 
    border-right: 1px solid ${color.blackPrimarySecondary}; 
  }
  
  .bp5-table-column-header-cell:first-child .bp5-table-column-name {
    margin-left: -20px;
  }

 .bp5-table-cell { 
  display: flex;
  align-items: center;
  background: ${color.white};
  font-size: 16px;
  font-weight: 500;
  padding-left: 20px;
  box-shadow: none; //
  border-bottom: 1px solid ${color.blackPrimarySecondary};  
}
`

export const AllConteinerBigTable = styled.div`
  width: 1280px;
  height: 502px;
  background: ${color.white};
  border: 1px solid ${color.blackPrimarySecondary};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  /* margin-block-end:20px; */
`
