import { styled } from "@linaria/react";
import classnames from "classnames";
import { theme } from "@/app/styles/theme";

type ButtonProps = {
  selected: boolean;
  enabledSelect: boolean;
  typeOfButton: "default" | "delete" | "submit";
  disabled?: boolean;
};

export const Container = styled.div<ButtonProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  > button {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${theme.COLORS.PRIMARY};

    color: ${theme.COLORS.WHITE};
    height: 2.5rem;
    font-size: 0.875rem;
    border: none;
    border-radius: 20px;
    padding: 0px 20px;
    font-weight: bold;
  }

  button[disabled] {
    background-color: ${theme.COLORS.GRAY};
    color: ${theme.COLORS.LIGHT};
    cursor: not-allowed;
    opacity: 0.9;
  }
`;
