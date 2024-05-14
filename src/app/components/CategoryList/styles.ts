import { styled } from "@linaria/react";
import { theme } from "@/app/styles/theme";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 0px 60px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: 5px;
  }
`;

export const EditCategoryContainer = styled.div`
  display: flex;
  gap: 1.375rem;
  align-items: center;

  button {
    height: 1.125rem;
    border: none;
    background-color: transparent;
    font-weight: 500;

    color: ${() => theme.COLORS.DARK};
  }
`;
