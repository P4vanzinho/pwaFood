import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import Link from "next/link";
import { lighten } from "polished";

export const ChangeLink = styled(Link)`
  color: ${theme.COLORS.PRIMARY};
  font-size: 1.063rem;
  text-decoration: none;
  font-weight: bold;
`;

export const Container = styled.div`
  overflow: auto;

  > label {
    color: ${theme.COLORS.DARK};
    font-size: 0.75rem;
  }

  & > footer {
    padding: 0px 1rem;
    position: fixed;
    width: 100%;
    max-width: 1200px;
    height: 8rem;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
  }
`;

export const PaymentData = styled.div`
  margin-top: 25px;
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
    padding: 25px;
    margin-top: 15px;

    & > p:nth-of-type(1) {
      border-bottom: 1px solid ${theme.COLORS.DARK};
      padding-bottom: 7px;
      color: ${theme.COLORS.DARK};
      font-weight: 600;
    }

    & > p:nth-of-type(2) {
      border-bottom: 1px solid ${theme.COLORS.DARK};
      padding: 5px 0;
      padding-bottom: 2px;
      color: ${theme.COLORS.DARK};
      font-weight: 300;
    }

    & > p:nth-of-type(3) {
      color: ${theme.COLORS.DARK};
      font-weight: 600;
      text-transform: uppercase;
      padding-top: 7px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  align-items: flex-end;

  & > div {
    > caption {
      font-size: 0.75rem;
      font-weight: lighter;
      color: ${theme.COLORS.PRIMARY};
    }
    > span {
      color: ${theme.COLORS.DARK};
      font-size: 1.375rem;
    }

    display: flex;
    flex-direction: column;

    align-items: end;
    align-items: flex-end;
  }

  margin-bottom: 30px;
`;
