import styled, { createGlobalStyle } from 'styled-components';

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

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--light-grayish-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.9rem;
`;

export const Content = styled.div`
  width: 32.7rem;
  height: 51.2rem;
  background: var(--white);
  box-shadow: (0px 6px 4px rgba(158, 175, 194, 0.25));
  border-radius: 1rem;
`;
