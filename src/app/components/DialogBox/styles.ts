import { lighten } from 'polished';
import { styled } from '@linaria/react';
import css from 'styled-jsx/css';

export const Container = styled.div`
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding-bottom: 25px;
  color: ${({ theme }) => theme.COLORS.DARK};
  border-radius: 5px;

  h2 {
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: 5px;
  }

  footer {
    display: flex;
    padding: 3px 25px;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 20px;
  padding: 5px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  width: 100%;

  > div {
    padding: 10px;
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    border: 1px solid ${({ theme }) => lighten(0.8, theme.COLORS.WARNING)};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }

  > h2 {
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    margin-left: 20px;
  }
`;

type ButtonProps = {
  mode: 'danger' | 'border';
};

export const Button = styled.div<ButtonProps>`
  border-radius: 8px;
  padding: 2px 10px;
  font-size: 0.9rem;

  ${({ mode, theme }) => {
    const backgroundColor =
      mode === 'danger' ? theme.COLORS.ERROR : theme.COLORS.WHITE;

    const color = mode === 'danger' ? theme.COLORS.WHITE : theme.COLORS.DARK;

    const borderColor =
      mode === 'danger' ? theme.COLORS.ERROR : theme.COLORS.GRAY;

    return css`
      color: ${color};
      background-color: ${backgroundColor};
      border: 0.2px solid ${borderColor};
    `;
  }};
`;
