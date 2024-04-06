import color from 'common/GlobalColers'
import styled from 'styled-components'

export const ActionConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

`

export const ActionBtnProduct = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  transition: all 0.25s linear;
  &:hover,
  &:focus {
    scale: 1.95;
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);  */
    outline: none;
  }
`