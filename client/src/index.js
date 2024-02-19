import React from 'react';
import ReactDOM from 'react-dom';
import Registro from '../src/COMPONENTES/Registro';
import App from '../src/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> {/* Utiliza el componente Routes para envolver tus rutas */}
        <Route path="/" element={<App />} /> {/* Utiliza el prop "element" para definir el componente */}
        <Route path="/registro" element={<Registro />} /> {/* Utiliza el prop "element" para definir el componente */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
