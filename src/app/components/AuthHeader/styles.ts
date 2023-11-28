import { theme } from '@/app/styles/theme';
import { styled } from '@linaria/react';

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: ${theme.COLORS.WHITE};
  z-index: 1;
  width: 100%;
  padding: 50px;
  height: 10px;
`;

export const Logo = styled.button`
  display: flex;
  border: none;
  padding: none;
  background-color: transparent;

  > span {
    font-size: 2.75rem;
    font-weight: 400;
    color: ${theme.COLORS.DARK};
  }

  > span:nth-of-type(3) {
    color: ${theme.COLORS.PRIMARY};
  }
`;

export const MenuTopCenter = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  gap: 50px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);

  > a {
    text-decoration: none;
    font-size: 1.5rem;
    color: ${theme.COLORS.DARK};
  }
`;

export const RightTopMenu = styled.div`
  display: flex;
  gap: 50px;
`;
