import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-height: none;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor de fundo da área de trilha */
  }

  div {
    margin-top: 50px;
  }
`;
