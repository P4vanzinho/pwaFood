import { styled } from '@linaria/react';

export const Container = styled.div`
  width: 19rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  position: absolute;
  right: 2.6rem;
  bottom: 3.2rem;
  z-index: 2;

  div {
    height: 5.4rem;
    display: flex;
    gap: 1.4rem;

    > button {
      border: none;
    }

    > button:nth-of-type(1) {
      width: 12rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;

      font-size: 2.4rem;
      font-weight: 400;
      line-height: normal;
      color: ${({ theme }) => theme.COLORS.DARK};
      background-color: ${({ theme }) => theme.COLORS.LIGHT};
    }
    > button:nth-of-type(2) {
      width: 5.4rem;
      height: 5.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.COLORS.LIGHT};
    }
  }

  button {
    width: 5.9rem;
    height: 5.9rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border: none;
    align-self: flex-end;
  }
`;

export const AddButton = styled.button`
  width: 12rem;
  height: 5.4rem;
  border: none;
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  position: absolute;
  right: 2.6rem;
  bottom: 3.2rem;
  border-radius: 33px;
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;

  span {
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
