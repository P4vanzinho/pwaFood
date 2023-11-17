import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  height: 5rem;

  > div:nth-of-type(1) {
    display: flex;
    width: 100%;
  }
`;

export const PhotoFood = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
  -webkit-box-shadow: 2px 0px 15px -2px rgba(0, 0, 0, 0.03);
  box-shadow: 2px 0px 15px -2px rgba(0, 0, 0, 0.03);
  padding: 5px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-left: 15px;
  width: 100%;

  > span {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0px;
  width: 15%;
  height: 100%;
  justify-content: space-between;

  > button {
    width: 100%;
    justify-content: start;
    align-items: end;
    height: 2rem;

    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      background-color: ${({ theme }) => theme.COLORS.ERROR};
      border-radius: 5px;

      > svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 0.8rem;
      }
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
  align-items: end;

  > input {
    display: flex;
    width: 30px;
    height: 1rem;
    border: none;
    font-size: 0.875rem;
  }
`;
