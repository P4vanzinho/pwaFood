import { theme } from '@/app/styles/theme'
import { styled } from '@linaria/react'
import { lighten } from 'polished'

export const Container = styled.header`
  align-items: center;

  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: ${theme.COLORS.WHITE};
  z-index: 1;
  width: 100%;
  padding: 20px 40px;
  align-items: center;
`

export const Logo = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  padding: none;
  background-color: transparent;

  > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      font-size: 1rem;

      color: ${theme.COLORS.GRAY};
      margin-left: 5px;
    }

    > img {
      border-radius: 5px;
      width: 1.25rem;
      height: 1.25rem;
      object-fit: cover;
    }
  }

  > div:nth-of-type(2) > span {
    font-size: 2.75rem;
    font-weight: 400;
    color: ${theme.COLORS.DARK};

    &:nth-of-type(3) {
      color: ${theme.COLORS.PRIMARY};
    }
  }
`

const selected = `
  color: ${theme.COLORS.DARK};
`

export const MenuTopCenter = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  gap: 50px;
  left: 50%;

  > a {
    text-decoration: none;
    font-size: 1.5rem;
    color: ${() => lighten(0.5, theme.COLORS.DARK)};

    transition: all 80ms ease-out;

    &:hover {
      ${selected}
    }

    &.selected {
      ${selected}
    }
  }
`

export const RightTopMenu = styled.div`
  display: flex;
  gap: 50px;
`
