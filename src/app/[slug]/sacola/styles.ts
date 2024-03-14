import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: none;

  > div {
    padding: 1rem;
    overflow: auto;
    height: 90%;
    padding-bottom: 170px;

    > button {
      border: none;
      background-color: ${theme.COLORS.WHITE};
      margin-top: 30px;
      padding: 20px 20px 20px 0px;

      &:hover {
        > span {
          font-weight: 600;
          color: ${() => darken(0.2, theme.COLORS.ERROR)};
        }
      }

      > span {
        color: ${theme.COLORS.ERROR};
        font-weight: 600;
        transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 250ms;
        cursor: pointer;
      }
    }
  }

  > footer {
    padding: 0px 1rem;
    position: fixed;
    width: 100%;
    max-width: 1200px;
    height: 4.8rem;
    bottom: 70px;
    background-color: ${theme.COLORS.WHITE};
    display: flex;
    flex-direction: row;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
  }
`;
