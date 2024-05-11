import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, LINK } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NAVBAR from '../COMPONENTES/NAVBAR';
import CARTA from '../COMPONENTES/CARTA_RESENA';

function Mis_Resenas() {

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
                           
                                 <div className="category2">
                                    <div className='contenido_resena'>
                                    <h5>Libro:</h5>
                                  
                                </div>
                                <p>Reseña:</p>
                               
                            </div>
                            </div>

                            <CARTA />
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


























