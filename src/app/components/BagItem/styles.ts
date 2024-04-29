import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import Image from "next/image";
import { darken } from "polished";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${theme.COLORS.WHITE};
  padding: 1.375rem 1.563rem;
  border-radius: 20px;

  > div:nth-of-type(1) {
    display: flex;
    width: 100%;
    gap: 10px;
    height: 4.188rem;
  }
`;

export const PhotoFood = styled(Image)`
  object-fit: cover;
  border-radius: 10px;

  width: 4.625rem;
  height: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  > span:nth-of-type(1) {
    line-height: 22px;
    font-size: 1rem;
    font-weight: 600;
    padding: 5px 11px;
  }
`;

export const PriceContainer = styled.div`
  > span {
    font-size: 20px;
    color: ${theme.COLORS.PRIMARY};
    font-weight: 600;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.688rem;

  > div:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;

    > button {
      height: 22px;
      width: 19px;
      padding: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${() => theme.COLORS.ERROR};
      border: none;
      border-radius: 5px;
      outline: none;

      svg {
        color: ${() => theme.COLORS.WHITE};

        path {
          background-color: ${() => theme.COLORS.ERROR};
        }
      }
    }

    &:hover > div {
      background-color: ${() => darken(0.2, theme.COLORS.ERROR)};
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      background-color: ${theme.COLORS.ERROR};
      border-radius: 5px;

      transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 250ms;

      > svg {
        color: ${theme.COLORS.WHITE};
      }
    }
  }
`;

export const ButtonDeleteContainer = styled.div``;

export const InputWrapper = styled.div`
  input {
    color: ${theme.COLORS.DARK};
    border: none;
    outline: none;
    width: 100%;

    /* Adicione a estilização dos botões */
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      margin: 0;
    }

    /* Adicione outros estilos personalizados, se desejar */
    background-color: transparent;
    color: ${theme.COLORS.DARK};

    &:focus {
      outline: none;
    }
  }
`;

export const QtyInputContainer = styled.div`
  display: flex;
  > input {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const QtyControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 3px;
    > button {
      background-color: transparent;
      border: none;
    }

    > button:nth-of-type(1) {
      > img {
        transform: scaleY(-1);
      }
    }
  }
`;
