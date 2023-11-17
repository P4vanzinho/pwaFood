import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: none;

  > div {
    padding: 1rem;
    overflow: auto;
    height: 90%;
    padding-bottom: 150px;

    > button {
      border: none;
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      margin-top: 30px;

      > span {
        color: ${({ theme }) => theme.COLORS.ERROR};
        font-weight: 600;
      }
    }
  }

  > footer {
    padding: 0px 1rem;
    position: fixed;
    width: 100%;
    height: 4.8rem;
    bottom: 70px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
