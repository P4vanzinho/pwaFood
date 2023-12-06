import { theme } from '@/app/styles/theme';
import { styled } from '@linaria/react';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;

  *:focus {
    outline-color: ${() => theme.COLORS.PRIMARY};
  }
`;

export const FormContainer = styled.div`
  width: 38.375rem;
  margin: 0 auto;
  height: 100%;

  fieldset {
    border: none;
    width: auto;
    display: flex;
    flex-direction: column;

    label {
      font-size: 12px;
      font-weight: 400;
      line-height: normal;
      color: ${() => theme.COLORS.DARK};
      gap: 0.625rem;
    }
  }
`;

export const FoodTitleLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.875rem 0;

  > input {
    border: none;
    border-radius: 0.938rem;
    background-color: ${() => theme.COLORS.LIGHT};
    height: 2.5rem;
    display: flex;
    align-items: center;
    padding: 0 0.875rem;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${() => theme.COLORS.DARK};
  }

  > div {
    width: 100%;
    border-radius: 0.938rem;
    background-color: ${() => theme.COLORS.LIGHT};
    height: 2.5rem;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageProductContainer = styled.div`
  border: 1px solid ${() => theme.COLORS.GRAY};
  border-radius: 15px;
  display: flex;
  margin-top: 0.938rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem 0;
  gap: 0.625rem;
  outline: none;
  margin-bottom: 2.438rem;
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
    color: ${() => theme.COLORS.DARK};
  }

  > div {
    display: flex;
    gap: 0.5rem;
    padding: 0;
    background-color: transparent;
    height: 2.125rem;
    align-items: center;
    justify-content: center;

    > span {
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
      color: ${() => theme.COLORS.GRAY};
    }

    div {
      height: 1px;
      width: 7.625rem;
      background-color: ${() => theme.COLORS.GRAY};
    }
  }

  > button {
    width: 13.938rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: ${() => theme.COLORS.GRAY};
    border: none;
    color: ${() => theme.COLORS.WHITE};
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

export const SelectCategoryLabel = styled.label`
  margin-bottom: 1.563rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const SelectContainer = styled.div`
  width: 100%;
  border-radius: 0.938rem;
  background-color: ${() => theme.COLORS.LIGHT};
  height: 2.5rem;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${() => theme.COLORS.GRAY};
  }

  select {
    width: 100%;
    border: none;
    width: calc(100% - 34px);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${() => theme.COLORS.DARK};
    background-color: transparent;
    outline: none;
    appearance: none;

    &::placeholder {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: ${() => theme.COLORS.GRAY};
    }
  }
`;

export const DescriptionLabel = styled.label`
  margin-bottom: 2.5rem;
  display: flex;
  gap: 0, 625rem;
  flex-direction: column;

  > div {
    width: 100%;
    min-height: 6.25rem;
    padding: 1.188em 1.094rem 0.688rem;
    border-radius: 0.938rem;
    background-color: ${() => theme.COLORS.LIGHT};
    height: 2.5rem;
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
      color: ${() => theme.COLORS.DARK};

      &::placeholder {
        color: ${() => theme.COLORS.GRAY};
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }

    > span {
      position: absolute;
      right: 1.438rem;
      bottom: 0.688rem;
      color: ${() => theme.COLORS.DARK};
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const ToggleSwitchContainer = styled.div`
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const ToggleSwitch = styled.div`
  width: 100%;
  display: flex;
  gap: 3.125rem;
  align-items: center;
  justify-content: center;
  border: 1px solid ${() => theme.COLORS.LIGHT};
  border-radius: 15px;
  height: 3.75rem;
  position: relative;

  > p {
    color: ${() => theme.COLORS.DARK};
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
  width: 4.486rem;
  height: 2.019rem;
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

  /* ${InputCheckBoxInToggle} Isso permite que você use o componente Input como um seletor CSS sem precisar saber qual é o nome da classe gerado pelo linaria.*/
  /*seleciona apenas os elementos input do tipo checkbox ou radio que estão marcados (ou seja, quando o botão switch é clicado).*/
  ${InputCheckBoxInToggle}:checked + & {
    background-color: ${() => theme.COLORS.PRIMARY_DARK};

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
    border-radius: 0.938rem;
    background-color: ${() => theme.COLORS.LIGHT};
    height: 2.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 0.875rem;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${() => theme.COLORS.DARK};
  }

  input:invalid {
    outline: 2px solid ${() => theme.COLORS.ERROR};
  }

  > span {
    font-size: 0.875rem;
    color: ${() => theme.COLORS.ERROR};
    font-weight: 500;
  }
`;

export const ButtonsContainer = styled.div`
  width: 15.875rem;
  display: flex;
  gap: 1.5rem;
  align-self: flex-end;
  margin-left: auto;
  margin-top: 2.563rem;
`;
