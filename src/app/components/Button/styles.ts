import { styled } from "@linaria/react";
import classnames from "classnames";
import { theme } from "@/app/styles/theme";
import { darken } from "polished";

type ButtonProps = {
  selected: boolean;
  enabledSelect: boolean;
  typeOfButton: "default" | "delete" | "submit";
  disabled?: boolean;
  isPublicAuth?: boolean;
};

export const Container = styled.div<ButtonProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;

  > button {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => (props.isPublicAuth ? `13.75rem` : `100%`)};
    background-color: ${theme.COLORS.PRIMARY};
    ${() => darken(0.7, theme.COLORS.GRAY)};
    color: ${theme.COLORS.WHITE};
    height: ${(props) => (props.isPublicAuth ? `3.438rem` : `2.5rem`)};
    font-size: 0.875rem;
    border: none;
    border-radius: ${(props) => (props.isPublicAuth ? `40px` : `20px`)};
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
