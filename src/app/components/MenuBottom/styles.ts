import styled from 'styled-components';

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

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 100%;

    > svg:nth-of-type(2) {
      color: transparent;
      position: absolute;
      top: 50px;
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme.COLORS.PRIMARY};
      }
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.DARK};
    margin: 0 auto;
    display: block;
  }
`;
