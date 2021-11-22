import './Global.js';
import React from 'react';
import { GlobalStyle, Conteiner, Content } from './Global.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <Content>
          <h1>Hello world</h1>
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
