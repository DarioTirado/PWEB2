
import '../CSS/BodyStyle.css';
import '../CSS/HomeStyle.css';
import '../RECURSOS/LogoLibro2.jpg';
import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NavBar() {
    const sesion = JSON.parse(localStorage.getItem('sesion'))
    const navigate = useNavigate(); 

    const handlePerfilClick = () => {

        if(sesion.rol==2){
      navigate('/Perfil_Usuario'); // Redirige a la ruta '/registro'
        }
        else{
            navigate('/Perfil_Admin');
        }
    };
    const handleHomeClick = () => {
        navigate('/Home'); // Redirige a la ruta '/registro'
        
    };
    const handleLoginClick = () => {
        navigate('/'); // Redirige a la ruta '/registro'
    };
    const handleReseñasClick = () => {
        navigate('/Mis_Resenas'); // Redirige a la ruta '/registro'
    };


    return (
        <div className="divbody">
            <header>
                <nav>
                    <div className="logo">
                        <img src="../RECURSOS/LogoLibro2.jpg" alt="Logo de la Tienda" />
                    </div>
                    <div className="search-box">
                        <select id="filter">
                            <option value="nombre">Categorias</option>
                            <option value="nombre">Nombre</option>
                            <option value="precio">Precio</option>
                            <option value="calificacion">Calificación</option>
                            <option value="vendidos">Más vendidos</option>
                        </select>
                        <input type="text" id="search-input" placeholder="Buscar" />
                        <input type="submit" value="Buscar" />
                    </div>
                    <ul className="menu">
                        <li><a href="" onClick={handleHomeClick}>Inicio</a></li>
                        <li><a href="" onClick={handlePerfilClick}>Mi Cuenta </a></li>
                        <li><a href="" onClick={handleReseñasClick}> Mis Reseñas</a></li>
                        <li><a href="" onClick={handleLoginClick}>Salir</a></li>
                    </ul>
                </nav>
            </header>   
        </div>
    );  
}

export default NavBar;











