import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globais (opcional)
import App from './App'; // O componente principal da sua aplicação

// Obtém o elemento 'root' e cria a raiz para renderização
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Renderiza o componente App dentro de React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);