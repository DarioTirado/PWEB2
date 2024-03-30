import React, { useEffect, useState } from 'react';
import '../CSS/HomeStyle.css';
import '../CSS/PerfilColor.css';
import '../CSS/BodyStyle.css';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
function PerfilU() {
    const sesion = JSON.parse(localStorage.getItem('sesion'));
    const navigate = useNavigate();
    var nombrerol=null;
    const [nombresnew, setNombres] = useState(sesion.nombre || '');
    const [apellidosnew, setApellidos] = useState(sesion.apellidos || '');
    const [passnew, setContraseña] = useState(sesion.con || '');
    const [generonew, setGenero] = useState(sesion.genero || '');

    const handleHomeClick = () => {
        navigate('/Home'); // Redirige a la ruta '/Home'
    };
    const handleLoginClick = () => {
        navigate('/'); // Redirige a la ruta '/registro'
      };

      const ActualizarInfo = async (event) => {
        event.preventDefault();
      await  Axios.post("http://localhost:3001/ActualizarInfo", {
          nombresnew: nombresnew,
          apellidosnew: apellidosnew,
          passnew: passnew,
          generonew: generonew,
          correonew: sesion.correo
        }).then(() => {
            alert("Informacion Actualizada");
            const nuevaSesion = {
                ...sesion,
                nombre: nombresnew,
                apellidos: apellidosnew,
                con: passnew,
                genero: generonew
            };
            localStorage.setItem('sesion', JSON.stringify(nuevaSesion));
            navigate('/Perfil_Usuario'); // Redirige a la ruta '/Login'
        })};
      
      

        if(sesion.rol==2){
             nombrerol="LECTOR";
        }else{
            nombrerol="ADMIN";
        }

    return (
        <>
            
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
                        <li><a href="">Mis Reseñas</a></li>
                        <li><a href="" onClick={handleLoginClick}>Salir</a></li>
                    </ul>
                </nav>
            </header>

            <div className="SecondBodyClass">
                <div className="Perf-Pedid-List-card ">
                    <div className="container rounded bg-white mt-5 mb-5 padding-card pad" id="mi-info-content">
                        <div className="row2">
                            <form id="register_form" className="col-xl-6" action="PerfilUsuario.html">
                                <div className="p-3 py-5">
                                    <h4 className="text-right">Información de usuario</h4>
                                    <div className="flex-column align-items-center text-center">
                                        {/* Imagen de perfil */}
                                    </div>

                                        <div className="personal-info-card">
                                            <div className="row mt-3">
                                            <label className="form-label" htmlFor="nombre">Rol: {nombrerol}</label>
                                            <br></br> 
                                            <label className="form-label" htmlFor="nombre" >Correo: {sesion.correo}</label>
                            
                                            <label className="form-label" htmlFor="nombre">Nombre</label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                className="form-control form-control-lg"
                                                value={nombresnew}
                                                onChange={(e) => setNombres(e.target.value)}
                                            />

                                            <label className="form-label" htmlFor="apellidos">Apellidos</label>
                                            <input
                                                type="text"
                                                id="apellidos"
                                                className="form-control form-control-lg"
                                                value={apellidosnew}
                                                onChange={(e) => setApellidos(e.target.value)}
                                            />

                                            <label className="form-label" htmlFor="contrasena">Contraseña</label>
                                            <input
                                                type="password"
                                                id="contrasena"
                                                className="form-control form-control-lg"
                                                value={passnew}
                                                onChange={(e) => setContraseña(e.target.value)}
                                            />

<div>
                                                <label className="form-label">Género</label>
                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="genero"
                                                        id="femaleGender"
                                                        checked={generonew === 'Femenino'}
                                                        value="Femenino"
                                                        onChange={(e) => setGenero(e.target.value)}
                                                    />
                                                    <label className="form-check-label" htmlFor="femaleGender">Femenino</label>
                                                </div>

                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="genero"
                                                        id="maleGender"
                                                        checked={generonew === 'Masculino'}
                                                        value="Masculino"
                                                        onChange={(e) => setGenero(e.target.value)}
                                                    />
                                                    <label className="form-check-label" htmlFor="maleGender">Masculino</label>

                                                    <div className="form-check form-check-inline mb-0 me-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="genero"
                                                        id="maleGender"
                                                        checked={generonew === 'Otro'}
                                                        value="Otro"
                                                        onChange={(e) => setGenero(e.target.value)}
                                                    />
                                                    <label className="form-check-label" htmlFor="maleGender">Otro</label>
                                                </div>
                                                </div>
                                            </div>
                                                                           
                                        </div>
                                        <div className="d-flex justify-content-end pt-3">
                                            <button id="register_btn" className="btn btn-warning btn-lg ms-2" onClick={ActualizarInfo}>Modificar</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PerfilU;

