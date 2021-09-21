import React from 'react';  // eslint-disable-line
import ReactDOM from 'react-dom';  // eslint-disable-line
import TodoContainer from './components/TodoContainer';  // eslint-disable-line
import './App.css';  // eslint-disable-line
import { BrowserRouter } from 'react-router-dom';  // eslint-disable-line

ReactDOM.render(
  <React.StrictMode>,
    <BrowserRouter>,
      <TodoContainer />,
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root'),
);
