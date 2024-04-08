import color from 'common/GlobalColers'
import styled from 'styled-components'

export const  TableConteiner = styled.div`
  display: flex;
  gap: 20px;
`

export const  TableBlockItem = styled.div`
  min-width: 630px;
  height: 512px;
  border: 1px solid ${color.blackPrimarySecondary};
  border-radius: 8px;
  background: rgb(255, 255, 255);
  overflow: hidden;
`