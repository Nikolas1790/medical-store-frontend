import color from 'common/GlobalColers'
import styled from 'styled-components'

export const  TableConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const  TableBlockItem = styled.div`
  width: 300px;
  height: ${({height }) => height || '460px'};
  border: 1px solid ${color.blackPrimarySecondary};
  border-radius: 8px;
  background: rgb(255, 255, 255);
  overflow: hidden;
  
  @media (min-width: 375px) {  
     min-width: 335px;
  }
  @media (min-width: 768px) {  
    width: 704px;
    height: 512px;
  }

  @media (min-width: 1440px) {  
    width: 630px;
  }
`