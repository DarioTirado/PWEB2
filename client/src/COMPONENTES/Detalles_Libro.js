import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,LINK } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import CARD from '../COMPONENTES/RESENAS_GLOBALES';
import CARDDEF from '../COMPONENTES/RESENA_DEFAULT';
import CARDADMIN from '../COMPONENTES/Resena_Admin';
import { Alert } from 'bootstrap';
import NAVBAR from '../COMPONENTES/NAVBAR';

function Detalles_libro() {
    const { ID_LIBRO } = useParams();
    const [Librodetalles, setDetalle] = useState([]);
    const sesion = JSON.parse(localStorage.getItem('sesion'))
    const navigate = useNavigate();
    const [reseña, setRes] = useState([]);
    const [reseñaN, setResN] = useState([]);
    const [booleanoAdicional, setBooleanoAdicional] = useState(true);//CONDICIONA EL IF DE LAS RESEÑAS


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/getlibrosdetalle/${ID_LIBRO}`);
                setDetalle(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error al obtener los detalles del libro:', error);
            }
        };

        fetchData();
    }, [ID_LIBRO]);


    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get(`http://localhost:3001/getresenaslibro/${ID_LIBRO}`);
                setResN(response1.data);
                console.log(response1.data);
            } catch (error) {
                console.error('Error al obtener los detalles del libro:', error);
            }
        };
        fetchData();
    }, [ID_LIBRO]);

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


    const RegistrarReseña = (detalle) => {
       
            Axios.post("http://localhost:3001/RegistrarResena", {
                id_libro: ID_LIBRO,
                id_usuario: sesion.id_usuario,
                reseña: reseña,
            }).then(()=>{

                alert("Reseña Publicada");
                navigate(`/Detalles_Libro/${ID_LIBRO}`);
                window.location.reload();
              })
      
    };
    

   
    return (
        <div className="divbody">
            <header>
              <NAVBAR />
            </header>

            <div className="main-card">
                <main>
                    <section className="featured-products">
                        {Librodetalles.map((detalle) => (
                            <div key={detalle.ID} className="section-header">
                                <h2>{detalle.TITULO}</h2>
                            </div>

                        ))}
                    </section>
                    <section className="popular-categories">
                        <div className="section-header">
                            <h2>INFORMACION</h2>
                        </div>
                        <div className="Carrusel-Card2">
                            {Librodetalles.map((detalle) => (
                                <div className="category2" key={detalle.ID}>
                                    <img src="../RECURSOS/Libros.jpg" alt="Categoría 1" />
                                    <h3>AUTOR: {detalle.NOMBRE + " " + detalle.APELLIDO} </h3>
                                    <h3>EDICION: {detalle.EDICION}</h3>
                                    <h3>PUBLICACION: {detalle.AÑO_PUBLICACION}</h3>
                                    <h3>GENERO: {detalle.DESCRIPCION}</h3>
                                    <h3>PAGINAS: {detalle.PAGINAS}</h3>
                                    <h3>SINOPSIS: {detalle.SINOPSIS}</h3>
                                </div>
                            ))}
                            {/* Repite esta estructura para más categorías */}
                        </div>
                    </section>


                    <div className="form-group">
                        <div className="section-header">
                            <h2>Agregar Reseña</h2>
                        </div>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(event) => {
                            setRes(event.target.value);
                        }}></textarea>
                        <button type="button" className="btn btn-warning btn-lg ms-2" onClick={() => RegistrarReseña(Librodetalles[0])}>Publicar</button>
                    </div>
                    <br></br>
                    <section className="popular-categories">
                        <div className="section-header">
                            <h2>RESEÑAS</h2>
                        </div>
                       
                       
                        { Object.keys(reseñaN).length <= 0 ?<CARDDEF /> : <CARD />}
                      
                       

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


export default Detalles_libro;

