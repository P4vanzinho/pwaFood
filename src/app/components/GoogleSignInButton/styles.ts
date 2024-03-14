import { theme } from '@/app/styles/theme'
import { styled } from '@linaria/react'
import { darken, lighten } from 'polished'

export const Container = styled.button`
  width: 100%;
  display: flex;
  gap: 0.8rem;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  border: 1px solid ${() => lighten(0.3, theme.COLORS.GRAY)};
  border-radius: 5px;
  height: 2.75rem;
  background-color: ${theme.COLORS.WHITE};

  &:hover {
    background-color: ${() => darken(0.1, theme.COLORS.WHITE)};
  }

  span {
    font-size: 0.8rem;
    font-weight: 500;
    color: ${theme.COLORS.DARK};
  }
`
