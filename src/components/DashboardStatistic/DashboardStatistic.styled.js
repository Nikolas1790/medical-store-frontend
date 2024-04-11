import color from 'common/GlobalColers'
import styled from 'styled-components'

export const StatisticConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`
export const StatisticItem  = styled.li`
  width: 157px;
  height: 98px;
  border-radius: 8px;
  background: ${color.white};
  border: 1px solid ${color.blackPrimarySecondary};
  padding: 14px;

  fill: transparent;
  stroke: ${color.blackPrimary};
  &:first-child {
    border-color: ${color.greenLight};
  }

  @media (min-width: 768px) {  
    width: 221px;
  height: 108px;
  padding: 14px 18px;
  }

  @media (min-width: 1440px) {  
    width: 240px;
  }
`
export const StatisticTitleConteiner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;  
  
`
export const StatisticSvg  = styled.svg`
  width: 18px;
  height: 18px;

  @media (min-width: 768px) {  
    width: 20px;
    height: 20px;
  }
`



export const StatisticSectionTitle = styled.h4`
  font-size: 12px;
  font-weight: 400;
  color: ${color.blackColorSecondary};  
`
export const StatisticValue = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.33;  

  @media (min-width: 768px) {  
    font-size: 24px;
  }
`