import { createGlobalStyle } from 'styled-components';

import font from '../fonts/recoleta-regular.woff2';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Recoleta;
    src: url(${font});
  }
  html {
    font-family: 'Montserrat', san-serif;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: Recoleta;
  }
`;

export default Typography;
