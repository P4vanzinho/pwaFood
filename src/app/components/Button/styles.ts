import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import { darken } from "polished";

type ButtonProps = {
  selected: boolean;
  enabledSelect: boolean;
  typeOfButton: "default" | "delete" | "submit";
};

export const Container = styled.div<ButtonProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  > button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${(props) =>
      props.typeOfButton === "delete"
        ? theme.COLORS.ERROR
        : props.typeOfButton === "submit"
          ? theme.COLORS.PRIMARY
          : theme.COLORS.GRAY};

    color: ${theme.COLORS.WHITE};
    height: 2.5rem;
    font-size: 1.125rem;
    border: none;
    border-radius: 20px;
    padding: 0px 20px;
  }
`;
