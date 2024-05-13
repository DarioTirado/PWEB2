import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,LINK } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function ResenaAdmin() {
    const { ID_LIBRO } = useParams();
    const [MisResenas, setResN] = useState([]);
    const sesion = JSON.parse(localStorage.getItem('sesion'))

   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get(`http://localhost:3001/getresenasGlobales`);
                setResN(response1.data);
                console.log(response1.data);
            } catch (error) {
                console.error('Error al obtener los detalles del libro:', error);
            }
        };

        fetchData();
    }, [ID_LIBRO]);

    const handleEliminarResena = async (idResena) => {
        try {
            await axios.post(`http://localhost:3001/eliminarResena/${idResena}`);
            // Actualiza la lista de reseñas después de la eliminación
            const response = await axios.get(`http://localhost:3001/getresenasGlobales`);
            setResN(response.data);
            alert('Reseña eliminada correctamente');
        } catch (error) {
            console.error('Error al eliminar la reseña:', error);
            alert('Hubo un error al eliminar la reseña');
        }
    };


    return (   
        <div className="Carrusel-Card2">
        {MisResenas.map((Resenas) =>(
            <div className="category2" Key = {Resenas.ID}>
               <div className='contenido_resena'>
               <h5>Usuario: {Resenas.CORREO}</h5>
           </div>
           <p>Reseña:{Resenas.RESEÑA}</p>   
           <button type="button" className="btn btn-warning btn-lg ms-2" onClick={() => handleEliminarResena(Resenas.ID_LISTA_FORANEA)}>Eliminar</button>
       </div>
        ))}
       </div>      
    );
}


export default ResenaAdmin;