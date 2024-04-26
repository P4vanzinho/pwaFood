import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${theme.COLORS.LIGHT};

  width: 100%;
  height: auto;
  border-radius: 5px;
  padding-bottom: 4rem;

  & > form {
    margin-top: 30px;
    width: 100%;

    & > div {
      margin-bottom: 24px;
    }
  }
`;
