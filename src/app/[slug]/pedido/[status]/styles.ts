import { theme } from '@/app/styles/theme'
import { styled } from '@linaria/react'

type ContainerProps = {
  status: 'sucesso' | 'erro'
}

export const Container = styled.div<ContainerProps>`
  position: absolute;

  background-color: ${({ status }) =>
    status === 'sucesso' ? theme.COLORS.SUCCESS : theme.COLORS.ERROR};
  width: 100%;

  height: 100vh;
  z-index: 998;
  padding: 30px;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  left: 50%;
  transform: translateX(-50%);

  > h2,
  p {
    color: ${theme.COLORS.WHITE};
  }

  > img {
    width: 10rem;
    height: 10rem;
  }

  > div {
    width: 100%;
    max-width: 700px;
  }

  button {
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.DARK};
  }
`
