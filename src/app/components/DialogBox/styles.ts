import { styled } from "@linaria/react";
import { theme } from "@/app/styles/theme";

type ButtonProps = {
  typeButton: "delete" | "cancel";
};

export const Container = styled.div`
  height: 12.5rem;
  width: 34rem;
  display: flex;
  gap: 1.563rem;
  flex-direction: column;
  background-color: ${() => theme.COLORS.WHITE};
  color: ${() => theme.COLORS.DARK};
  border-radius: 5px;
  padding: 2.25rem 2.5rem;
  position: relative;

  footer {
    display: flex;
    gap: 1.5rem;
  }
`;

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 20px;
  padding: 5px;
  position: absolute;
  right: 10px;
  top: 10px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${() => theme.COLORS.LIGHT};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > h2 {
      font-size: 18px;
      font-weight: 500;
      width: 100%;
    }
  }
`;

export const HelpIconContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${() => theme.COLORS.LIGHT};
  border-radius: 10px;
`;

export const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  padding: 14px 20px;
  font-size: 0.9rem;
  background-color: ${(props) =>
    props.typeButton === "delete" ? theme.COLORS.ERROR : theme.COLORS.LIGHT};
  width: 100%;
  color: ${(props) =>
    props.typeButton === "delete" ? theme.COLORS.WHITE : theme.COLORS.DARK};
  border: none;
`;
