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
    max-width: 1200px;
    height: auto;
    max-height: 300px;
    object-fit: cover;
  }

  footer {
    position: fixed;
    width: 100%;
    max-width: 1200px;
    bottom: 80px;
    padding: 10px 20px;

    left: 50%;
    transform: translateX(-50%);

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

export const Content = styled.div`
  max-width: 1200px;
  display: flex;
`;
