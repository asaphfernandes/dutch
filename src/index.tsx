import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          outline: 0
        },
        'html, body': {
          height: '100vh',
          border: 'none'
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

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
