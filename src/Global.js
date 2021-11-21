import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --very-dark-grayish-blue: #48556A;
  --desaturated-dark-blue: #6D7F97;
  --grayish-blue: #9EAFC2;
  --light-grayish-blue: #ECF2F8;
  --white: #ffffff;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  font-family: Manrope;
}

`;
