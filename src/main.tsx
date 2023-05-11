import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import Home from './paginas/home/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);