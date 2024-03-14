import { theme } from '@/app/styles/theme'
import { styled } from '@linaria/react'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  div:nth-of-type(n + 2) {
    margin-left: 32px;
  }

  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 5px;
  justify-content: flex-start;

  @media (min-width: 720px) {
    padding-bottom: 20px;
    &:hover {
      &::-webkit-scrollbar {
        width: 12px;

        background-color: ${theme.COLORS.LIGHT};
        border-radius: 10px;
        height: 8px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${theme.COLORS.GRAY};
      }
    }
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
    border-radius: 10px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: transparent;
  }
`
