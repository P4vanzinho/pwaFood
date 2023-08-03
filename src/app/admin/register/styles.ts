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
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  height: 100%;
  gap: 2rem;
  width: 28rem;

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

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* color: #2fdbbc; */
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 1.4rem;

    > span {
      font-size: 12px;
      color: red;
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
    border: 2px solid ${({ theme }) => theme.COLORS.ERROR};
  }

  input:valid {
    border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
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
