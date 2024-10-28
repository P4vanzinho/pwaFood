import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";
import { darken, mix } from "polished";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  flex-direction: column;
  padding: 8.5rem 21px 70px;

  > form {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
    position: relative;

    > div:last-child {
      position: absolute;
      bottom: 0;
    }
  }
`;

export const TitleContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 26px;
  > p {
    width: 130%;
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

export const OtpContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    gap: 10px;
    .custom-otp-input {
      border: 1px solid #e9ecf2;
      border-radius: 8px;
      color: ${theme.COLORS.BLACK};
      font-size: 24px;
      width: 50px !important;
      height: 50px;
      outline: none;
      text-align: center;
    }
  }
  .custom-otp-input:focus {
    border: 1px solid ${theme.COLORS.PRIMARY};
  }
`;

export const Timer = styled.span`
  font-size: 16px;
  color: ${() => darken(0.25, theme.COLORS.ERROR)};
  font-weight: 600;
`;

export const ResendCode = styled.p`
  font-size: 14px;
  color: ${() => darken(0.3, theme.COLORS.GRAY)};

  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${() => darken(0.7, theme.COLORS.GRAY)};
    font-weight: 700;
  }
`;
