import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Detecção de dispositivo móvel para importar estilos específicos
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         ('ontouchstart' in window) ||
         (navigator.maxTouchPoints > 0) ||
         (navigator.msMaxTouchPoints > 0);
};

// Importar estilos mobile se for dispositivo móvel
if (isMobileDevice()) {
  import('./mobile.css');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
