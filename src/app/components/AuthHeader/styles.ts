import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  z-index: 1;
  width: 100%;
  margin: 3.4rem 0;
  padding: 0 4.7rem;
`;

export const LogoButton = styled.button`
  display: flex;
  border: none;
  padding: none;
  background-color: transparent;

  > span {
    font-size: 4.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  > span:nth-of-type(3) {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  gap: 6rem;
  align-items: center;
  position: relative;
  left: 6rem;

  > a {
    text-decoration: none;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.DARK};
  }
`;

export const AuthLinks = styled.div`
  .green_bg_white_color {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .gray_bg_black_color {
    background-color: ${({ theme }) => theme.COLORS.LIGHT};

    color: ${({ theme }) => theme.COLORS.DARK};
  }

  display: flex;
  height: 100%;
  gap: 3rem;

  > button {
    padding: 0.9rem 2rem;
    border-radius: 2rem;
    border: none;
    font-size: 14px;
    font-weight: 500;
    height: 5rem;
  }
`;
