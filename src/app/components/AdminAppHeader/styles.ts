import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 11rem;
  display: flex;
  flex-direction: column;
  padding-top: 4.3rem;
  padding-left: 8.5rem;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  z-index: 1;

  /*  .green_bg_white_color {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .gray_bg_black_color {
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    > span {
      color: ${({ theme }) => theme.COLORS.DARK};
    }
  } */
`;

type ButtonProps = {
  selected?: boolean;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${props =>
    !!props.selected ? props.theme.COLORS.PRIMARY : props.theme.WHITE};

  color: ${props =>
    !!props.selected ? props.theme.COLORS.WHITE : props.theme.DARK};
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const BusinessContainer = styled.div`
  max-width: 40rem;
  display: flex;
  align-items: center;
  gap: 7px;

  > span {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`;

export const LogoButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  left: 0;

  > span {
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  > span:nth-of-type(2) {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;

export const WelcomeAndMenuContainer = styled.div`
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
