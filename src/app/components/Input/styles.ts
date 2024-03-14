import { theme } from "@/app/styles/theme";

import { styled } from "@linaria/react";
import { darken } from "polished";
import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  type: HTMLInputTypeAttribute;
};

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

  > label {
    font-size: 0.75rem;
    color: ${() => theme.COLORS.PRIMARY};
  }

  &:has(input:focus) {
    > label {
      color: ${() => darken(0.1, theme.COLORS.PRIMARY)};
    }
  }

  &:has(input:invalid) {
    > label {
      color: ${() => darken(0.1, theme.COLORS.ERROR)};
    }
  }

  &:has(input:valid) {
    > label {
      color: ${() => theme.COLORS.PRIMARY};
    }
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 2px solid ${() => theme.COLORS.PRIMARY};
    margin-top: 7px;
    overflow: hidden;

    &:has(> input:focus) {
      border: 2px solid ${() => darken(0.1, theme.COLORS.PRIMARY)};

      svg {
        fill: ${() => darken(0.1, theme.COLORS.PRIMARY)};
      }
    }

    &:has(> input:invalid) {
      border: 2px solid ${() => darken(0.1, theme.COLORS.ERROR)};

      svg {
        fill: ${() => darken(0.1, theme.COLORS.ERROR)};
      }
    }

    &:has(> input:valid) {
      border: 2px solid ${() => theme.COLORS.PRIMARY};

      svg {
        fill: ${() => darken(0.1, theme.COLORS.PRIMARY)};
      }
    }

    > input {
      height: 2.5rem;
      width: 100%;
      background-color: transparent;
      padding: 0 1.678rem;
      border: 0;
      outline: 0;
      color: ${() => theme.COLORS.DARK};

      &:focus {
        outline: none !important;
        background-color: transparent;
      }

      &::placeholder {
        color: ${() => theme.COLORS.GRAY};
      }
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;

      svg {
        scale: 100px !important;
        fill: ${() => theme.COLORS.PRIMARY};
      }
    }
  }
`;
