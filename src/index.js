import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProovedorState } from "./contexto/EstadosContexto";

ReactDOM.render(
  <React.StrictMode>
    <ProovedorState>
      <App />
    </ProovedorState>
  </React.StrictMode>,
  document.getElementById('root')
);


