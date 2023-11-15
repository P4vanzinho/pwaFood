import { fadein } from '@/app/styles/animations';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

type ButtonProps = {
  loading: boolean;
};

export const Container = styled.div<ButtonProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 2.5rem;
    font-size: 1.125rem;
    border: none;
    border-radius: 20px;
    animation: ${fadein} 0.4s ease-in forwards;

    &:disabled {
      background-color: ${props => props.theme.COLORS.LIGHT};
      color: ${props => lighten(0.25, props.theme.COLORS.GRAY)};
      cursor: not-allowed;
      opacity: 0.1;
    }

    ${props =>
      !!props.loading &&
      css`
        background-color: ${props => props.theme.COLORS.GRAY};
        color: ${props => props.theme.COLORS.LIGHT};
        cursor: not-allowed;
      `}
  }
`;
