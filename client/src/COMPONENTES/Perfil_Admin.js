import React, { useEffect, useState } from 'react';
import '../CSS/HomeStyle.css';
import '../CSS/PerfilColor.css';
import '../CSS/BodyStyle.css';
import FormularioModal from '../COMPONENTES/modal_libro';
import FormularioModalAutor from '../COMPONENTES/modal_Autor';
import { useNavigate } from 'react-router-dom';

function PerfilU() {
    const sesion = JSON.parse(localStorage.getItem('sesion'))
    const navigate = useNavigate(); 

    const handleHomeClick = () => {
      navigate('/Home'); // Redirige a la ruta '/registro'
    };
    const handleHomeClickListaAutores = () => {
        navigate('/Lista_Autores'); 
      };
    const handleLoginClick = () => {
        navigate('/'); // Redirige a la ruta '/registro'
      };
      const [showModal, setShowModal] = useState(false);
      const handleShow = () => setShowModal(true);
      const handleClose = () => setShowModal(false);

      const [showModalautor, setShowModalautor] = useState(false);
      const handleShowautor = () => setShowModalautor(true);
      const handleCloseautor = () => setShowModalautor(false);
    

    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <img src="Assets/LogoLibro2.jpg" alt="Logo de la Tienda" />
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
                        <li><a href="PerfilUsuario.html">Mi Cuenta</a></li>
                        <li><a href="">Mis Reseñas</a></li>
                        <li><a href="" onClick={handleHomeClickListaAutores} >Autores</a></li>
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
                                    <h4 className="text-right">Informacion de usuario</h4>
                                    <div className="flex-column align-items-center text-center">
                                        <img className="perfil-img-card" width="150px"
                                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                            alt="Imagen de perfil" />
                                    </div>

                                    <div className="personal-info-card">
                                        <div className="d-flex justify-content-between align-items-center mb-3"></div>
                                        <div className="row mt-2">
                                            <label className="form-label" htmlFor="form3Example1m">Nombre</label>
                                            <input name="nombre_input_name" type="text" id="Nombre"
                                                className="form-control form-control-lg" required value={sesion.nombre + sesion.apellidos} />
                                            <label className="form-label" htmlFor="form3Example1m">Rol de Usuario</label>
                                            <input name="rol_input_name" type="text" id="RoldeUsuario"
                                                className="form-control form-control-lg" required value={sesion.rol} />

                                        </div>
                                        <div className="row mt-3">
                                            <label className="form-label" htmlFor="form3Example9">Correo Electrónico</label>
                                            <input name="correo_input_name_registro" type="email" id="CorreoElectronico"
                                                className="form-control form-control-lg" required value={sesion.correo}/>

                                            <label className="form-label" htmlFor="form3Example90">Contrasena</label>
                                            <input name="password_input_name_registro" type="password" id="Contrasena"
                                                className="form-control form-control-lg" required value={sesion.con} />

                                        </div>
                                        <div className="d-flex justify-content-end pt-3">
                                            <button id="register_btn" className="btn btn-warning btn-lg ms-2">Modificar</button>
                                            <button type='button' id="register_btnagregarlibro" className="btn btn-warning btn-lg ms-2" onClick={handleShow}>Agregar Libro</button>
                                            <FormularioModal showModal={showModal} handleClose={handleClose} />
                                            <button id="register_btnges" className="btn btn-warning btn-lg ms-2">Gestionar Libro</button>
                                            <button type='button' id="register_btnges" className="btn btn-warning btn-lg ms-2" onClick={handleShowautor} >Agregar Autor</button>
                                            <FormularioModalAutor showModal={showModalautor} handleClose={handleCloseautor} />
                                            <button id="register_btnges" className="btn btn-warning btn-lg ms-2">Gestionar Autor</button>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>

            <script src="/JAVA/validate.js"></script>
            <script src="/JAVA/PerfilInfo_h11.js"></script>
        </>
    );
}

export default PerfilU;
