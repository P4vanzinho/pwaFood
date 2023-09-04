import styled from 'styled-components';

export const Container = styled.div`
  width: 12rem;
  height: 5.4rem;
  position: sticky;
  right: 2.6rem;
  bottom: 3.2rem;
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  button {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 33px;
    background: ${({ theme }) => theme.COLORS.PRIMARY};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
