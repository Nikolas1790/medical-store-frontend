import color from 'common/GlobalColers'
import styled from 'styled-components'

export const CustomBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  height: 44px;
  width: 100%;
  border-radius: 60px;
  color: ${color.white};
  background: ${color.greenLight};
  transition: background 0.3s linear;

  &:hover,
  &:focus {
    /* color: ${color.blackLight}; */
    background: ${color.greenDarker};  
  }
  
  @media (min-width: 768px) {
    /* font-size: 16px; */
    /* padding: ${(props) => props.prop === 'true' ? '14px 28px' : '12px 28px'}; */
  }
`