import { theme } from '@/app/styles/theme'
import { styled } from '@linaria/react'

export const Container = styled.div`
  height: 100%;
  width: 56rem;
  background-color: ${() => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  gap: 7.7rem;
  padding: 4rem 4rem 0;
  position: absolute;
  right: 0;
  z-index: 2;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 3.6rem;
      font-weight: 400;
      line-height: normal;
      color: ${() => theme.COLORS.DARK};
    }

    button {
      background-color: transparent;
      border: none;

      img {
        height: 25px;
        width: 25px;
      }
    }
  }
`

export const SelectButton = styled.button`
  width: 100%;
  display: flex;
  gap: 2.4rem;
  background: transparent;
  border: none;
`

export const ImageContainer = styled.div`
  width: 5.6rem;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${() => theme.COLORS.LIGHT};
  border-radius: 8px;
`

export const DescriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;
    color: ${() => theme.COLORS.SECUNDARY_DARK};
    text-align: start;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 150%;
    color: ${() => theme.COLORS.GRAY};
  }
`
