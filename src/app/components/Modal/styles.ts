import { styled } from '@linaria/react';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 25px;
  position: fixed;
  top: 0;
  bottom: 0;
  min-width: 100%;
  z-index: 999;

  @keyframes animate-fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation-duration: 0.08s;
  animation-name: animate-fade;
  animation-fill-mode: backwards;
`;
