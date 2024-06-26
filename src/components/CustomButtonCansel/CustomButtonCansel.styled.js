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
  width: ${({ width }) => width ==="133px" ? '140px' : '100%'};
  border-radius: 60px;
  color: ${color.blackColorSecondary};
  background: ${color.blackPrimarySecondary};

  transition: all 0.25s linear;

  &:hover,
  &:focus {
    color: ${color.greenLight};
    background: ${color.white};  
    border: 1px solid ${color.greenLight};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); 
    outline: none;
  }
  
  @media (min-width: 768px) {
    width: ${({ width }) => width || '100%'};
  }
`