import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import Registro from './COMPONENTES/Registro';
import Home from './COMPONENTES/Home';
import Perfil from './COMPONENTES/Perfil_Usuario';
import PerfilAdmnin from './COMPONENTES/Perfil_Admin';
import ListaAutores from './COMPONENTES/Lista_Autores';
import Detalles_Libro from './COMPONENTES/Detalles_Libro';
import App from './App';
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
        <Route path ="/Detalles_Libro/:ID_LIBRO" element={<Detalles_Libro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
