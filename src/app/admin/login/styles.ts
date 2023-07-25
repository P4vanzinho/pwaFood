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
