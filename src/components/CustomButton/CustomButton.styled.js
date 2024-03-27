import color from 'common/GlobalColers'
import styled from 'styled-components'

export const CustomBtn = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  /* letter-spacing: 2%; */
  /* padding: ${(props) => props.prop === 'true' ? '12px 24px' : '10px 20px'}; */
  /* border: 1px solid ${color.whiteLightTranslucent}; */
  height: 44px;
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