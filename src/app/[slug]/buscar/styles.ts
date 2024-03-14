import { styled } from "@linaria/react";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;

  > div {
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;

    > p {
      margin-top: 25px;
    }
  }

  img {
    width: 100%;
    height: 18.75rem;
    object-fit: cover;
  }

  footer {
    position: fixed;
    width: 100%;
    bottom: 80px;
    padding: 0px 10px;

    div:nth-of-type(2) {
      margin-top: 20px;
    }

    > div {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;

      font-size: 1.5rem;
    }
  }
`;
