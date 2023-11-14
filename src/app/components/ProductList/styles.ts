import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  gap: 32px;
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 5px;

  @media (min-width: 720px) {
    padding-bottom: 20px;
    &:hover {
      &::-webkit-scrollbar {
        width: 12px;

        background-color: ${({ theme }) => theme.COLORS.LIGHT};
        border-radius: 10px;
        height: 8px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.GRAY};
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
`;
