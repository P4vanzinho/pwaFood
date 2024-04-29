import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";

export const Container = styled.div`
  padding: 15px 17px;
  background-color: ${theme.COLORS.PRIMARY};
  border-radius: 30px;
`;
export const QtyContainer = styled.div`
  height: 21px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  input {
    border: none;
    background-color: ${theme.COLORS.PRIMARY};
    max-width: 30px;
    text-align: center;
    font-size: 14px;
    color: ${theme.COLORS.WHITE};
    outline: none;
  }

  button {
    border: none;
    background-color: transparent;

    svg {
      color: ${theme.COLORS.WHITE};
    }
  }

  button:hover {
    transform: scale(1.3);
    animation-duration: 0.3s;
  }
`;
