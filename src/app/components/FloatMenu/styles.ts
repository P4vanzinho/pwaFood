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

    > button {
      border: none;
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
  width:  3.375rem;
  height: 3.375rem;
  right: 70px;

  &.animate {
    animation-duration: 0.04s;
    animation-name: animate-fade;
    animation-delay: 0s;
  }
}`;

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
  position: fixed;
  bottom: 50px;
  right: 55px;
  z-index: 2;

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

  &.higherZIndex {
    ${higherZIndex}
  }

  @keyframes animate-fade {
    0% {
      width: 12rem;
    }
    100% {
      width: 3.375rem;
    }
  }
`;
