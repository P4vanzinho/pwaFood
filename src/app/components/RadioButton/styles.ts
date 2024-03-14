import { theme } from '@/app/styles/theme'
import { styled } from '@linaria/react'
import { lighten } from 'polished'

type ContainerProps = {
  checked?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  & > span {
    margin-left: 20px;
  }

  & > div {
    width: 0.938rem;
    height: 0.938rem;
    border-style: solid;
    border-color: ${({ checked }) =>
      checked ? theme.COLORS.WARNING : lighten(0.25, theme.COLORS.GRAY)};
    border-width: 1px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      width: 0.438rem;
      height: 0.438rem;
      background-color: ${({ checked }) =>
        checked ? theme.COLORS.WARNING : 'transparent'};
      border-radius: 50%;
    }
  }
`
