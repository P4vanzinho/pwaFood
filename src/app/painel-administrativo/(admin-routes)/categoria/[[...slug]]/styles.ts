import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import { darken, grayscale } from "polished";

export const Container = styled.form`
  *:focus {
    outline-color: ${() => theme.COLORS.PRIMARY};
  }

  display: flex;
`;

export const FormContainer = styled.div`
  width: 38.375rem;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;

  > label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 2.1rem 0px;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    color: ${() => theme.COLORS.DARK};
    width: 100%;

    > input {
      border: none;
      border-radius: 1.5rem;
      background-color: ${() => theme.COLORS.LIGHT};
      height: 2.563rem;
      width: 100%;
      display: flex;
      align-items: center;
      padding-left: 1.4rem;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: ${() => theme.COLORS.DARK};

      &::placeholder {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: ${() => theme.COLORS.GRAY};
      }
    }
  }
`;

export const ToggleSwitchContainer = styled.div`
  margin-top: 2.1rem;
  width: 100%;
`;

export const ToggleSwitch = styled.div`
  width: 100%;
  display: flex;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid ${() => theme.COLORS.LIGHT};
  border-radius: 15px;
  height: 4rem;
  position: relative;

  > p {
    color: ${() => theme.COLORS.DARK};
    font-size: 1.125rem;
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

export const InputCheckBoxInToggle = styled.input`
  opacity: 0;
  position: absolute;
`;

export const Switch = styled.div`
  position: relative;
  width: 4.438rem;
  height: 2rem;
  background: ${() => theme.COLORS.GRAY};
  border-radius: 32px;
  padding: 4px;

  @keyframes color_change {
    from {
      background-color: ${() => theme.COLORS.GRAY};
    }
    to {
      background-color: ${() => darken(0.2, theme.COLORS.PRIMARY)};
    }
  }

  &:before {
    content: "";
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

  /* Isso permite que você use o componente Input como um seletor CSS sem precisar saber qual é o nome da classe gerado pelo styled-components.*/
  /*seleciona apenas os elementos input do tipo checkbox ou radio que estão marcados (ou seja, quando o botão switch é clicado).*/
  ${InputCheckBoxInToggle}:checked + & {
    background: ${() => theme.COLORS.PRIMARY};

    animation: color_change 0.5s both;

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

  div:nth-of-type(1) {
    > button {
      background-color: ${() => theme.COLORS.GRAY};
      color: ${() => theme.COLORS.WHITE};
    }
  }

  div:nth-of-type(2) {
    > button {
      background-color: ${() => theme.COLORS.PRIMARY};
      color: ${() => theme.COLORS.WHITE};
    }
  }
`;
