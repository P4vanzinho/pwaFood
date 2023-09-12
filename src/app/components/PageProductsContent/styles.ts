import styled, { css } from 'styled-components';

export const Main = styled.main`
  height: 100%;
  width: 100%;
  padding-left: 8.5rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;

export const NotListProductContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

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
      cursor: pointer;
      margin-left: 2px;
    }
  }
`;

type MainMenuProps = {
  selected?: boolean;
};

export const MainMenu = styled.div<MainMenuProps>`
  display: flex;
  gap: 4.5rem;
`;

type ButtonProps = {
  selected?: boolean;
};

export const Button = styled.button<ButtonProps>`
  width: 12.6rem;
  display: flex;
  justify-content: center;
  background: transparent;
  border: none;

  ${props =>
    props.selected &&
    css`
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 3px solid ${props => props.theme.COLORS.PRIMARY};
    `}

  > span {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: normal;
    color: ${({ theme, selected }) =>
      !!selected ? theme.COLORS.DARK : theme.COLORS.GRAY};
  }
`;

export const CategoryMessage = styled.p`
  margin: 3rem 0;
  font-size: 14px;
  line-height: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.GRAY};

  span {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;

export const CategoryContainerParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
`;

export const EndOfListMessage = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  margin: 6rem 0 4.1rem 0;
  color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const AddButtonOptions = styled.div`
  width: 19rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  position: absolute;
  right: 2.6rem;
  bottom: 3.2rem;
  z-index: 2;

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

export const LoadingCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: auto;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
  }
`;
