import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, LINK } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card_Resena() {
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
                        <div className="Carrusel-Card2">
                             {MisResenas.map((Resenas) =>(
                                 <div className="category2" Key = {Resenas.ID}>
                                    <div className='contenido_resena'>
                                    <h5>Libro:{Resenas.TITULO}</h5>
                                </div>
                                <p>Reseña:{Resenas.RESEÑA}</p>   
                            </div>
                             ))}
                            </div>           
    );
}
export default Card_Resena;


























