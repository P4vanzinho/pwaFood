import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 4.2rem;
  left: 8.5rem;
`;

export const BusinessContainer = styled.div`
  display: flex;
  gap: 7px;
  max-width: 40rem;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 6rem;
`;

export const LogoButton = styled.button`
  background: transparent;
  border: none;

  > span {
    font-size: 44px;
    font-weight: 400;
    line-height: normal;
  }

  > span:nth-of-type(1) {
    color: ${({ theme }) => theme.COLORS.DARK};
  }
  > span:nth-of-type(2) {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;

export const WelcomeAndMenuContainer = styled.div`
  .green_bg_white_color {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .gray_bg_black_color {
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    > span {
      color: ${({ theme }) => theme.COLORS.DARK};
    }
  }

  display: flex;
  gap: 12.5rem;

  > div {
    span {
      font-size: 1.8rem;
      font-weight: 500;
      line-height: normal;
    }

    span:nth-of-type(1) {
      color: ${({ theme }) => theme.COLORS.DARK};
    }
    span:nth-of-type(2) {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }

  section {
    display: flex;
    gap: 1.9rem;

    button {
      border-radius: 2rem;
      border: none;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      height: 4rem;
      font-family: var(--font-poppins);
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
