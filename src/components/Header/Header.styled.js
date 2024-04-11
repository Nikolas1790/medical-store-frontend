import color from 'common/GlobalColers'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${color.blackPrimarySecondary};
`

export const HeaderBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 375px;
  padding: 17px 24px; 
  /* background: yellow; */
  @media (min-width: 768px) {
    width: 768px;
    padding: 15px 32px; 
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 15px 40px 15px 20px; 
  }
`
///////////////////////////////////////////////////
export const HeaderNavBlock = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  /* gap: 60px; */
  /* padding: 17px 24px;  */
  @media (min-width: 768px) {
    /* padding: 15px 32px;  */
  }
  @media (min-width: 1440px) {
    /* padding: 15px 40px 15px 20px;  */
  }
`
export const SvgBurgerMenu = styled.svg`
  stroke: ${color.blackPrimary};
  width: 32px;
  height: 32px;
  margin-right: 16px;
  @media (min-width: 768px) {
    margin-right: 20px;
    /* width: 32px;
    height: 32px; */
  }
  @media (min-width: 1440px) {
    display: none;
  }
`; 

export const DesctopSvgConteiner = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
`; 


export const HeaderMainInf = styled.div`
  width: 227px;
  margin-left: 20px;
/* display: block; */
  white-space: nowrap; /* Указывает, что весь текст должен быть в одной строке */
  overflow: hidden; /* Прячет текст, выходящий за границы элемента */
  text-overflow: ellipsis; /* Заменяет обрезанный текст на многоточие */

  @media (min-width: 768px) {
    margin-left: 32px;
    width: 280px;
  }
  @media (min-width: 1440px) {
    margin-left: 60px;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.18;
  margin-bottom: 4px;

  
  @media (min-width: 768px) {
    font-size: 24px;
  }
`
export const HeaderTextBlock = styled.div`
  display: flex;
  
  /* flex-wrap: wrap; */
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

