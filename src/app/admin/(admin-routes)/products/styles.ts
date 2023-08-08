import styled, { css } from 'styled-components';

const primaryBg = css`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

const secundaryBg = css`
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.8);
`;

export const Container = styled.div`
  .primary-bg {
    background: ${({ theme }) => theme.COLORS.WHITE};
  }

  .secundary-bg {
    background: rgba(0, 0, 0, 0.8);
  }

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;

  &.primary-bg {
    ${primaryBg}
  }

  &.secundary-bg {
    ${secundaryBg}
  }
`;

export const ContentContainer = styled.div`
  padding: 4.2rem 9rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const Main = styled.main`
  height: 100%;
  width: 100%;
  margin-top: 11.9rem;
  padding: 3rem 9rem 4.1rem;

  p:nth-of-type(1) {
    margin: 3rem 0;
    font-size: 14px;
    line-height: normal;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY};

    span {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }

  p:nth-of-type(2) {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`;

export const NotListProductContainer = styled.div`
  width: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  p {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.GRAY};
    text-align: center;
    width: 500px;

    > span {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }
`;

export const MainMenu = styled.div`
  .primaryBorder {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 3px solid ${({ theme }) => theme.COLORS.PRIMARY};

    span {
      color: ${({ theme }) => theme.COLORS.DARK};
    }
  }

  display: flex;
  gap: 4.5rem;

  > button {
    width: 12.6rem;
    display: flex;
    justify-content: center;
    background: transparent;
    border: none;

    > span {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`;

export const CategoryContainer = styled.section`
  width: 100%;

  > h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  > div {
    width: 100%;
    display: flex;
    gap: 2.6rem;
  }
`;

export const CategoryContainerParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
`;

export const AddButtonOptions = styled.div`
  width: 19rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  position: absolute;
  right: 2.6rem;
  bottom: 3.2rem;
  z-index: 1;

  div {
    height: 5.4rem;
    display: flex;
    gap: 1.4rem;

    > button {
      border: none;
    }

    > button:nth-of-type(1) {
      width: 12rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;

      font-size: 2.4rem;
      font-weight: 400;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.DARK};
      background-color: ${({ theme }) => theme.COLORS.LIGHT};
    }
    > button:nth-of-type(2) {
      width: 5.4rem;
      height: 5.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.COLORS.LIGHT};
    }
  }

  button {
    width: 5.9rem;
    height: 5.9rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border: none;
    align-self: flex-end;
  }
`;

export const AddButton = styled.button`
  width: 12rem;
  height: 5.4rem;
  border: none;
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  position: absolute;
  right: 2.6rem;
  bottom: 3.2rem;
  border-radius: 33px;
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;

  span {
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
