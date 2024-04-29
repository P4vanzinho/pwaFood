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
  > label {
    color: ${theme.COLORS.DARK};
    font-size: 0.75rem;
  }

  & > div {
    overflow: auto;
    height: 90%;
    padding-bottom: 31vh;
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
    z-index: 1;
    background-color: ${theme.COLORS.LIGHT};
  }
`;

export const DeliveryData = styled.div`
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

export const DeliveryMethod = styled.div`
  margin-top: 40px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > label {
      font-size: 1.063rem;
    }
  }

  & > section {
    margin-top: 15px;
    font-size: 1.063rem;
    width: 100%;
    background-color: ${theme.COLORS.WHITE};
    padding: 25px;
    border-radius: 20px;

    > div:nth-of-type(1) {
      padding-bottom: 15px;
      border-color: ${theme.COLORS.BLACK};
      border-style: solid;
      border-width: 1px;
      border-right: none;
      border-left: none;
      border-top: none;
      border-bottom: 1px solid;
    }

    > div:nth-of-type(2) {
      margin-top: 15px;
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

export const Payment = styled.div`
  margin-top: 5rem;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ToogleSwitchContainer = styled.div`
  padding: 40px;
`;
