import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,LINK } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";

function ResenaLibroGlobal() {
    const { ID_LIBRO } = useParams();
    const [MisResenas, setResN] = useState([]);
    const sesion = JSON.parse(localStorage.getItem('sesion'))

   
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


export default ResenaLibroGlobal;



































