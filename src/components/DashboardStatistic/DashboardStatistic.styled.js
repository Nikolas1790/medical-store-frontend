import color from 'common/GlobalColers'
import styled from 'styled-components'

export const StatisticConteiner = styled.div`
  display: flex;
  gap: 20px;
`
export const StatisticItem  = styled.li`
  width: 240px;
  height: 108px;
  border-radius: 8px;
  background: ${color.white};
  border: 1px solid ${color.blackPrimarySecondary};
  padding: 14px 18px;

  fill: transparent;
  stroke: ${color.blackPrimary};
  &:first-child {
    border-color: ${color.greenLight};
  }
`
export const StatisticTitleConteiner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;  
`

export const StatisticSectionTitle = styled.h4`
  font-size: 12px;
  font-weight: 400;
  color: ${color.blackColorSecondary};  
`
export const StatisticValue = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;  
`