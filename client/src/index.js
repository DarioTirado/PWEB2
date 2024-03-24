import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import Registro from '../src/COMPONENTES/Registro';
import Home from '../src/COMPONENTES/Home';
import Perfil from '../src/COMPONENTES/Perfil_Usuario';
import PerfilAdmnin from '../src/COMPONENTES/Perfil_Admin';
import ListaAutores from '../src/COMPONENTES/Lista_Autores';
import App from '../src/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registro" element={<Registro />} />
        <Route path ="/Home" element={<Home />} />
        <Route path ="/Perfil_Usuario" element={<Perfil />} />
        <Route path ="/Perfil_Admin" element={<PerfilAdmnin />} />
        <Route path ="/Lista_Autores" element={<ListaAutores />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
