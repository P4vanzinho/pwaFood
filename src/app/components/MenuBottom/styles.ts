import { theme } from '@/app/styles/theme';
import { styled } from '@linaria/react';

export const Container = styled.div`
  background-color: ${theme.COLORS.WHITE};
  height: 70px;
  width: 100%;
  max-width: 1200px;
  bottom: 0px;
  transform: translateX(-50%);
  z-index: 2;
  position: fixed;
  left: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type ButtonProps = {
  selected?: boolean;
};

export const Button = styled.div<ButtonProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 100%;

  > svg:nth-of-type(1) {
    color: ${props =>
      props.selected ? theme.COLORS.PRIMARY : theme.COLORS.DARK};
  }

  > svg:nth-of-type(2) {
    color: ${props => (props.selected ? theme.COLORS.PRIMARY : 'transparent')};
    position: absolute;
    top: 50px;
  }

  cursor: pointer;
`;
export const Bubble = styled.div`
  position: absolute;
  top: 15px;
  left: 25px;
  color: ${() => theme.COLORS.WHITE};
  background-color: ${() => theme.COLORS.ERROR};
  width: auto;
  height: 22px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 3px 6px;
  border: 1px solid ${theme.COLORS.LIGHT};
  z-index: 2;
  font-size: 0.7rem;
`;
