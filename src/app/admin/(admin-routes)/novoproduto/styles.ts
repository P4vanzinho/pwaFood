import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
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
  margin: 7.2rem auto 14.4rem;

  h1 {
    font-size: 3.6rem;
    font-weight: 400;
    line-height: normal;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK};
    margin-bottom: 1.4rem;
  }

  fieldset {
    border: none;
    width: auto;
    display: flex;
    flex-direction: column;

    label {
      font-size: 12px;
      font-weight: 400;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.DARK};
    }
    label:nth-of-type(2) {
      margin-bottom: 3.9rem;
    }

    input:invalid {
      outline: 2px solid ${({ theme }) => theme.COLORS.ERROR};
    }

    input:valid {
      outline: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }
`;

export const TitleLabel = styled.label`
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
    padding: 0 1.4rem;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  > div {
    width: 100%;
    border-radius: 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    height: 4rem;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageProductContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 0;
  gap: 1rem;
  outline: none;
  &:focus {
    margin: none;
    outline: none;
  }

  section {
    height: 100px;
    background-color: red;
  }

  button {
    height: 100px;
    width: 100px;
  }

  > p:nth-of-type(1) {
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  > div {
    display: flex;
    gap: 0.8rem;
    padding: 0;
    background-color: transparent;
    height: 3.4rem;
    align-items: center;
    justify-content: center;

    > span {
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.GRAY};
    }

    div {
      height: 1px;
      width: 12.2rem;
      background-color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }

  > button {
    width: 22.3rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: relative;

    input {
      width: 100%;
      position: absolute;
      left: 0;
      opacity: 0;
      cursor: pointer;
    }
  }
`;

export const LoadingIndicator = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.COLORS.WARNING};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
  margin-right: 8px;
`;

export const SelectCategoryLabel = styled.label`
  margin-bottom: 2.5rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
export const SelectContainer = styled.div`
  width: 100%;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT};
  height: 4rem;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;

  select {
    width: 100%;
    border: none;
    width: calc(100% - 34px);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.DARK};
    background-color: transparent;

    &::placeholder {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`;

export const DescriptionLabel = styled.label`
  margin-bottom: 2.5rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  > div {
    width: 100%;
    min-height: 10rem;
    padding: 1.9rem 1.75rem 1.1rem;
    border-radius: 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    height: 4rem;
    position: relative;

    textarea {
      border: none;
      outline: none;
      resize: none;
      background-color: transparent;
      min-width: 100%;
      max-height: calc(100%);
      min-height: 35px;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.DARK};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY};
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }

    > span {
      position: absolute;
      right: 2.3rem;
      bottom: 1.1rem;
      color: ${({ theme }) => theme.COLORS.DARK};
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const ToggleSwitchContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
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

export const LabelToglleSwitch = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const InputCheckBoxInToggle = styled.input`
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

  /* ${InputCheckBoxInToggle} Isso permite que você use o componente Input como um seletor CSS sem precisar saber qual é o nome da classe gerado pelo styled-components.*/
  /*seleciona apenas os elementos input do tipo checkbox ou radio que estão marcados (ou seja, quando o botão switch é clicado).*/
  ${InputCheckBoxInToggle}:checked + & {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};

    &:before {
      left: calc(100% - (28px + 4px));
    }
  }
`;

export const PriceLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  > input {
    border: none;
    border-radius: 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.4rem;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  input:invalid {
    outline: 2px solid ${({ theme }) => theme.COLORS.ERROR};
  }

  > span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.ERROR};
    font-weight: 500;
  }
`;

export const LoadingUploadWarningMessage = styled.div`
  color: ${({ theme }) => theme.COLORS.WARNING};
  font-size: 1.4rem;
  margin-left: auto;
  text-align: end;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  width: 25.4rem;
  display: flex;
  gap: 2.4rem;
  align-self: flex-end;
  margin-left: auto;
  margin-top: 4.1rem;

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

  button[disabled] {
    opacity: 0.6;
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
