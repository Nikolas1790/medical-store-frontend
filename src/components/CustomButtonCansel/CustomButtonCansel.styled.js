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
  width: ${({ width }) => width || '100%'};
  border-radius: 60px;
  color: ${color.blackColorSecondary};
  background: ${color.blackPrimarySecondary};
  transition: background 0.3s linear;

  &:hover,
  &:focus {
    color: ${color.greenLight};
    background: ${color.white};  
    border: 1px solid ${color.greenLight};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); 
  }
  
  @media (min-width: 768px) {
    /* font-size: 16px; */
    /* padding: ${(props) => props.prop === 'true' ? '14px 28px' : '12px 28px'}; */
  }
`