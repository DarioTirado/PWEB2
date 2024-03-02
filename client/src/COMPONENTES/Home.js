import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../CSS/BodyStyle.css';
import '../CSS/HomeStyle.css';
import '../RECURSOS/LogoLibro2.jpg';

function Home() {
    const sesion = JSON.parse(localStorage.getItem('sesion'))
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.removeItem('sesion');
        navigate('/'); // Redirige al inicio de sesión
    };

    return (
        <div className="divbody">
            <header>
                <nav>
                    <div className="logo">
                        <img src="../RECURSOS/LogoLibro2.jpg" alt="Logo de la Tienda" />
                    </div>
                    <div className="search-box">
                        {/* Resto del código para la barra de búsqueda */}
                    </div>
                    <ul className="menu">
                        <li><Link to="/Home">Inicio</Link></li>
                        <li><Link to="/Perfil_Usuario">Mi Cuenta</Link></li>
                        <li><Link to="/Mis_Reseñas">Mis Reseñas</Link></li>
                        <li><button >Salir</button></li>
                    </ul>
                </nav>
            </header>

            {/* Resto del contenido de la página */}

        </div>
    );
}

export default Home;
