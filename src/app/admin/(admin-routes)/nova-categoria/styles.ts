import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  position: relative;

  *:focus {
    outline-color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;

export const Main = styled.main`
  width: 61.4rem;
  margin: 13.6rem auto 0;

  h1 {
    font-size: 3.6rem;
    font-weight: 400;
    line-height: normal;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK};
    margin-bottom: 1.4rem;
  }

  > label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 2.1rem;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.DARK};

    > input {
      border: none;
      border-radius: 1.5rem;
      background-color: ${({ theme }) => theme.COLORS.LIGHT};
      height: 4rem;
      display: flex;
      align-items: center;
      padding-left: 1.4rem;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.DARK};

      &::placeholder {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.GRAY};
      }
    }
  }
`;

export const ToggleSwitchContainer = styled.div`
  width: 100%;
`;

export const ToggleSwitch = styled.div`
  width: 100%;
  display: flex;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT};
  border-radius: 15px;
  height: 6rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.COLORS.DARK};
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

export const Switch = styled.div`
  position: relative;
  width: 7.1778rem;
  height: 3.23rem;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;

  &:before {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translateY(-50%);
    transition: left 0.2s ease-in-out;
    filter: drop-shadow(-2px 1px 6px rgba(0, 0, 0, 0.25));
  }

  /* ${Input} Isso permite que você use o componente Input como um seletor CSS sem precisar saber qual é o nome da classe gerado pelo styled-components.*/
  /*seleciona apenas os elementos input do tipo checkbox ou radio que estão marcados (ou seja, quando o botão switch é clicado).*/
  ${Input}:checked + & {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};

    &:before {
      left: calc(100% - (28px + 4px));
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 25.4rem;
  display: flex;
  gap: 2.4rem;
  align-self: flex-end;
  margin-left: auto;
  margin-top: 4.5rem;

  button {
    width: 11.5rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }

  button:nth-of-type(1) {
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button:nth-of-type(2) {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
