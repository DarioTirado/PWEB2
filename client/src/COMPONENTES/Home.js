
import '../CSS/BodyStyle.css';
import '../CSS/HomeStyle.css';
import '../RECURSOS/LogoLibro2.jpg';
import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
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

   
        const [Libro, setProductos] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:3001/getlibros');
              setProductos(response.data);
                console.log(response.data);
            } catch (error) {
              console.error('Error al obtener los libros:', error);
            }
          };
      
          fetchData();
        }, []);

    


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

            <div className="main-card">
                <main>
                    <section className="featured-products">
                        <div className="section-header">
                            <h2>Agregados recientemente</h2>
                        </div>
                        <div className="Carrusel-Card">
                        {Libro.map((Libro) => (
                            <div className="product-card">
                                <img src="Assets/Libro1.jpg" alt="Producto 2" />
                                <h3>{Libro.TITULO}</h3>
                                <p><a>Genero:{Libro.DESCRIPCION}</a></p>
                                <Link to={`/Detalles_Libro/${Libro.ID_LIBRO}`}>Detalles</Link>
                                <a><button className="add-to-cart">Detalles</button></a>
                            </div>
                            ))}
                            </div>
                      
                    </section>

                    <section className="popular-categories">
                        <div className="section-header">
                            <h2>Categorias más buscadas</h2>
                        </div>
                        <div className="Carrusel-Card">
                            <div className="category">
                                <img src="../RECURSOS/Libros.jpg" alt="Categoría 1" />
                                <h3>Libreria Terror</h3>
                            </div>
                            {/* Repite esta estructura para más categorías */}
                        </div>
                    </section>
                </main>
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

export default Home;
