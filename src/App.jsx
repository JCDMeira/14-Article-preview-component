import './Global.js';
import React from 'react';
import { GlobalStyle, Conteiner } from './Global.js';
import { Content } from './components/Content/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <Content />
      </Conteiner>
    </>
  );
}

export default App;
