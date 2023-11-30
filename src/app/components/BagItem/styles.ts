import { theme } from '@/app/styles/theme';
import { styled } from '@linaria/react';
import Image from 'next/image';
import { darken } from 'polished';

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
  width: 6rem;
  height: 5rem;
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
    justify-content: flex-start;
    align-items: flex-end;
    height: 2rem;

    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover > div {
      background-color: ${() => darken(0.2, theme.COLORS.ERROR)};
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      background-color: ${theme.COLORS.ERROR};
      border-radius: 5px;

      transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 250ms;

      > svg {
        color: ${theme.COLORS.WHITE};
      }
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
  align-items: flex-end;
  align-self: flex-end;

  cursor: pointer;

  > input {
    display: flex;
    width: 30px;
    height: 1rem;
    border: none;
    font-size: 0.875rem;
  }
`;
