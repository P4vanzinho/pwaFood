import { keyframes } from 'styled-components';

export const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
export const increasingHeight = keyframes`
  0% {
      transform : scaleY(0);
  }
  100% {
      transform : scaleY(1);
  }
`;
