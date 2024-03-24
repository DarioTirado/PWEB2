import React from 'react';
import '../CSS/BodyStyle.css';
import '../CSS/HomeStyle.css';
import '../CSS/ListaAutores.css';
import '../RECURSOS/LogoLibro2.jpg';
import { useNavigate } from 'react-router-dom';

function ListaAutores() {
    const sesion = JSON.parse(localStorage.getItem('sesion'))
    const navigate = useNavigate();

    const handlePerfilClick = () => {

        if (sesion.rol == 2) {
            navigate('/Perfil_Usuario'); // Redirige a la ruta '/registro'
        }
        else {
            navigate('/Perfil_Admin');
        }
    };
    const handleHomeClick = () => {
        navigate('/Home'); // Redirige a la ruta '/registro'
    };
    const handleLoginClick = () => {
        navigate('/'); // Redirige a la ruta '/registro'
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
                        <li><a href="">Mis Reseñas</a></li>
                        <li><a href="" onClick={handleLoginClick}>Salir</a></li>
                    </ul>
                </nav>
            </header>


            <div className='contenedorcartas'>
                <div class="card">
                    <div class="card-header">
                        A Cerca De
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Nombre De Autor </h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        A Cerca De
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Nombre De Autor </h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        A Cerca De
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Nombre De Autor </h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <footer>
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="Assets/LogoLibro2.jpg" alt="Logo de la empresa" />
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default ListaAutores;
