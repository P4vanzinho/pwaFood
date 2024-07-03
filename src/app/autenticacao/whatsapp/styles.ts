import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: space-between;

  height: 100vh;
  padding: 8.5rem 21px 70px;

  > p {
    font-size: 1rem;
    margin-top: 21px;
    line-height: 24px;
    fill: gray;

    > span {
      font-weight: 700;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  > p {
    font-size: 1rem;
    line-height: 24px;
    fill: gray;
    color: ${() => darken(0.3, theme.COLORS.GRAY)};

    > span {
      color: ${() => darken(0.7, theme.COLORS.GRAY)};
      font-weight: 700;
    }
  }

  h2 {
    font-size: 32px;
  }
`;
