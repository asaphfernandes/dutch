import React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const ButtonNewGame = styled('button')<IButtonProps>({
  color: 'red'
});

function App() {
  return (<div>
    <Global
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          outline: 0
        },
        'html, body': {
          height: '100%'
        },
        'body': {
          fontFamily: "'Roboto', sans-serif",
          fontSize: '15px'
        },
        'button': {
          width: '100%',
          height: '100%',
          border: 'none'
        }
      }} />

    <ButtonNewGame>Novo Jogo</ButtonNewGame>
  </div>);
}

export default App;
