import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33rem;
  margin: 0 auto;
  padding: 3.2rem 2.4rem;
  border: 1px solid #f5f5f5;
  border-radius: 12px;
  background: #fff;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    align-self: center;
    height: 100%;
    gap: 2rem;
    width: 28rem;
    > div:nth-of-type(1) {
      width: 100%;
      display: flex;
      gap: 1.2rem;
      padding: 1rem 0;
      justify-content: center;
      align-items: center;
      border: 1px solid #d0d5dd;
      border-radius: 0.8rem;

      > span {
        font-size: 1.2rem;
        font-weight: 500;
        height: 1.2rem;
        color: #344054;
      }
    }

    > div:nth-child(2) {
      display: flex;
      gap: 0.8rem;
      padding: 0;
      background-color: transparent;
      height: 3.4rem;
      align-items: center;
      border: none;

      div {
        height: 1px;
        width: 124px;
        background-color: #bcccdc;
        padding: 0;
      }

      span {
        font-size: 1.4rem;
        font-weight: 500;
        color: #a3a3a3;
      }
    }
  }
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  height: 100%;
  gap: 2rem;

  width: 28rem;

  > div:nth-of-type(1) {
    width: 100%;
    display: flex;
    gap: 1.2rem;
    padding: 1rem 0;
    justify-content: center;
    align-items: center;
    border: 1px solid #d0d5dd;
    border-radius: 0.8rem;

    > span {
      font-size: 1.2rem;
      font-weight: 500;
      height: 1.2rem;
      color: #344054;
    }
  }

  > div:nth-child(2) {
    display: flex;
    gap: 0.8rem;
    padding: 0;
    background-color: transparent;
    height: 3.4rem;
    align-items: center;

    div {
      height: 1px;
      width: 124px;
      background-color: #bcccdc;
      padding: 0;
    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
      color: #a3a3a3;
    }
  }
`;

export const FieldsetLogin = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: none;

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* color: #2fdbbc; */
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 1.4rem;

    > div {
      position: relative;

      > button {
        height: 2rem;
        width: 2rem;
        background: transparent;
        position: absolute;
        top: 1rem;
        right: 2rem;
      }
    }

    > span {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.ERROR};
    }
  }

  input {
    height: 4rem;
    width: 100%;
    border-radius: 2rem;
    border: none;
    background-color: #f4f4f4;
    padding: 0 1.678rem;
  }

  input:invalid {
    outline: 2px solid ${({ theme }) => theme.COLORS.ERROR};
  }

  input:valid {
    outline: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  input:focus {
    /* border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY_DARK}; */
    outline: 2px solid;
    outline-color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
    border: none;
  }

  button {
    height: 4rem;
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 20px;

    span {
      font-size: 1.8rem;
      font-weight: 400;
      color: white;
    }
  }
`;

export const ForgetPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  > span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.8rem;
  }

  > a {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
  }
`;

export const AlertSpan = styled.span`
  font-size: 12px;
  color: red;
`;
