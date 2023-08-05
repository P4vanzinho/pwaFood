import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  padding: 4.2rem 9rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const Main = styled.main`
  height: 100%;
  margin-top: 11.9rem;
  padding: 3rem 9rem;
`;

export const NotListProductContainer = styled.div`
  width: 50rem;

  p {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.GRAY};
    text-align: center;
    width: 500px;
    margin: auto;

    > span {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }
`;
