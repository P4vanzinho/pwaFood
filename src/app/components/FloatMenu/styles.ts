import { theme } from '@/app/styles/theme';
import { styled } from '@linaria/react';

export const Container = styled.div`
  width: 19rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 70px;
  bottom: 9rem;
  z-index: 2;
  justify-content: flex-end;
  align-items: flex-end;

  div {
    height: 5rem;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 10px;

    &:hover {
      cursor: pointer;

      > button {
        transform: translate(0px, -5px);
        transition: all ease-in-out 80ms;
        cursor: pointer;
      }
    }

    > button {
      border: none;
      cursor: pointer;
    }

    > button:nth-of-type(1) {
      width: 12rem;
      height: 2.938rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;

      font-size: 2rem;
      font-weight: 400;
      line-height: normal;
      background-color: ${() => theme.COLORS.LIGHT};
    }
    > button:nth-of-type(2) {
      width: 3.375rem;
      height: 3.375rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: ${() => theme.COLORS.LIGHT};
    }
  }
`;

const higherZIndex = `{
  z-index: 999;
 
  > button {
    width:  3.375rem;
    height: 3.375rem;
  }
}`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 15rem;
  height: 5rem;
  position: fixed;
  bottom: 50px;
  right: 55px;
  z-index: 2;
  align-items: center;
  justify-content: flex-end;

  &.higherZIndex {
    ${higherZIndex}
  }

  > button {
    transition: all ease-in-out 80ms;
  }

  &:hover {
    cursor: pointer;

    > button {
      box-shadow: 0px 37px 20px -15px rgba(0, 0, 0, 0.2);
      transform: translate(0px, -5px);
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  width: 12rem;
  height: 3.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: normal;
  color: ${() => theme.COLORS.WHITE};
  background-color: ${() => theme.COLORS.PRIMARY};
  border: none;
  padding: 20px;

  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);

  > div {
    display: flex;

    > svg {
      scale: 2;
    }
  }

  > span {
    display: flex;
    align-items: center;

    > svg {
      scale: 1.4;
      margin-right: 10px;
    }
  }
`;
