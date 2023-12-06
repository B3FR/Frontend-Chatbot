import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/index.css';
import AuthRouter from './routes/auth';
import reportWebVitals from './reportWebVitals';
import { ContextSocketProvider } from "./conntext/contexsocketio";

ReactDOM.render(
  <React.StrictMode>
    <ContextSocketProvider>
      <AuthRouter />
    </ContextSocketProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
