import { keyframes } from 'styled-components';

const birds = keyframes`
  from { 
    transform: translateX(110%);
  }
  to {
    transform: translateX(-80%);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`;

export { birds, fadeIn };
