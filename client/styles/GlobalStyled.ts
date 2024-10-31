import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
  font-family: 'math'; 
}
 #__next{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
header{
  background-color: #31a1b7; 
  border-bottom: 3px solid #ffffff47;
}

footer {
  background-color: #1f2f37;
  text-align: center;
  margin-top: auto;
  min-height: 10vh;
  display: flex;
  align-items: center;
  color: rgb(249, 249, 249);
}

h1{
  font-size: 72px;
}
h2{
  font-size: 42px;
}
h3{
  font-size: 36px;
}
h4{
  font-size: 28px;
}

p{
  font-size: 16px;
}

.error-message {
    color: red;
    font-size: 0.875em;
    margin-top: 0.25em;
}

`;

export default GlobalStyled;