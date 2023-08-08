import styled from 'styled-components';

export const Container = styled.div`
  width: 15.7rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  justify-content: center;

  img {
    height: 15.7rem;
    width: 15.7rem;
  }

  h2 {
    font-weight: 500;
    line-height: normal;
    font-size: 14px;
    font-style: normal;
    color: ${({ theme }) => theme.COLORS.DARK};
    margin-left: 1rem;
  }

  span {
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    margin-left: 1rem;
  }
`;
