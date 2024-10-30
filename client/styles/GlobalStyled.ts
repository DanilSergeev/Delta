import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}
 #__next{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
  min-height: 10vh;
  background: #2a2a2a;
  display: flex;
  align-items: center;
  color: rgb(249, 249, 249);
}

`;

export default GlobalStyled;