import { styled } from "@linaria/react";
import Link from "next/link";
import { theme } from "@/app/styles/theme";

export const Container = styled.div`
  height: 100%;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > label {
      font-size: 1.063rem;
    }
  }

  & > section {
    font-size: 1.063rem;
    width: 100%;
    background-color: ${theme.COLORS.WHITE};
    border-radius: 20px;
    padding: 25px 30px;
    margin-top: 15px;

    & > div {
      color: ${theme.COLORS.DARK};
      font-weight: lighter;
      padding: 5px 0;
      border-bottom: ${theme.COLORS.BLACK} 1px solid;
      border-top: ${theme.COLORS.BLACK} 1px solid;

      > p {
        padding-bottom: 5px;
      }
    }

    & > p {
      font-weight: 500;
    }

    > p:nth-of-type(1) {
      padding-bottom: 5px;
    }

    > p:nth-of-type(2) {
      margin-top: 15px;
    }
  }
`;

export const ChangeLink = styled(Link)`
  color: ${theme.COLORS.PRIMARY};
  font-size: 1.063rem;
  text-decoration: none;
  font-weight: bold;
`;
