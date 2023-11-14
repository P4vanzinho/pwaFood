import styled from 'styled-components';

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
  }

  img {
    width: 100%;
    height: auto;
  }
`;
