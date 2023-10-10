import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/index.css';
import AuthRouter from './routes/auth';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <AuthRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
