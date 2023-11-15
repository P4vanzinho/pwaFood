import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 100%;

  > svg:nth-of-type(1) {
    color: ${props =>
      props.selected ? props.theme.COLORS.PRIMARY : props.theme.COLORS.DARK};
  }

  > svg:nth-of-type(2) {
    color: ${props =>
      props.selected ? props.theme.COLORS.PRIMARY : 'transparent'};
    position: absolute;
    top: 50px;
  }
`;
