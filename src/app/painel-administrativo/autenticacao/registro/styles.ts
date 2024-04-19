import { theme } from "@/app/styles/theme";
import { styled } from "@linaria/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  height: 100%;
  gap: 2rem;

  > div {
    display: flex;
    gap: 0.8rem;
    padding: 0;
    background-color: transparent;
    height: 3.4rem;
    align-items: center;
  }
`;

export const FieldsetRegister = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: none;
`;

export const ForgetPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 20px;

  > span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.8rem;
  }

  > a {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: ${({}) => theme.COLORS.PRIMARY};
  }
`;

export const AlertSpan = styled.span`
  font-size: 12px;
  color: red;
`;
