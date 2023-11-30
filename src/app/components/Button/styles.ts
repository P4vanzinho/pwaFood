import { lighten } from 'polished';
import { theme } from '@/app/styles/theme';
import { styled } from '@linaria/react';

type ButtonProps = {
  selected: boolean;
  enabledSelect: boolean;
};

const disabled = `{
  background-color: ${theme.COLORS.LIGHT};
  color: ${theme.COLORS.GRAY};
  cursor: not-allowed;
  opacity: 0.9;
}`;

export const Container = styled.div<ButtonProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  > button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${({ selected, enabledSelect }) =>
      selected
        ? theme.COLORS.PRIMARY
        : enabledSelect
        ? theme.COLORS.GRAY
        : theme.COLORS.PRIMARY};
    color: ${theme.COLORS.WHITE};
    height: 2.5rem;
    font-size: 1.125rem;
    border: none;
    border-radius: 20px;
    padding: 0px 20px;

    &:disabled {
      ${disabled}
    }

    &.loading {
      ${disabled}
    }
  }
`;
