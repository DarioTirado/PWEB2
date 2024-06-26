import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, LINK } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NAVBAR from '../COMPONENTES/NAVBAR';
import CARTA from '../COMPONENTES/CARTA_RESENA';
import CARTADEF from '../COMPONENTES/RESENA_DEFAULT';



function Mis_Resenas() {
    const sesion = JSON.parse(localStorage.getItem('sesion'))
    const [MisResenas, setMisResenas] = useState([]);
    const ID =sesion.id_usuario;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/getmisresenas/${ID}`);
                setMisResenas(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error al obtener los detalles del libro:', error);
            }
        };
    
        fetchData();
    }, );
    
    return (

        <div className="divbody">
            <header>
                <NAVBAR />{ }
            </header>

            <div className="main-card">
                <main>
                    <section className="featured-products">

                    </section>
                    <section className="popular-categories">
                        <div className="section-header">
                            <h2>MIS RESEÑAS</h2>
                        </div>


                        <div className="Carrusel-Card2">
                           
                             
                          
                            { Object.keys(MisResenas).length <= 0 ?<CARTADEF /> : <CARTA />}
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


export default Mis_Resenas;


























