
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import{useState} from "react";
import Axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom'; // Importa useHistory
function Registro() {

  const navigate = useNavigate(); 
  const [nombre, setNombre] = useState(""); 
  const [apellido, setApellido] = useState(""); 
  const [correo, setCorreo] = useState(""); 
  const [pass, setPass] = useState("");
  const [genero, setGenero] = useState("");
  
  var validador = true;


  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      nombre:nombre,
      apellido:apellido,
      correo:correo,
      pass:pass,
      genero:genero

    }).then(()=>{

      alert("Usuario Registrado");
      navigate('/'); // Redirige a la ruta '/Login'
  
    })
  }



  const  mensajeExito = ()=>{
  


    if(nombre == "" || apellido == "" || correo == "" || pass == "" || genero == ""){
      alert("llene todos los campos");
      validador = false;
    }

    const validname = /^[a-zA-Z]+$/.test(nombre)
    if (!validname && nombre !== '') {
      alert("El nombre solo puede tener letras");
      validador = false;
    }

    const validname2 = /^[a-zA-Z]+$/.test(apellido)
    if (!validname2 && apellido !== '') {
      alert("El apellido solo puede tener letras");
      validador = false;
    }

    const validemail =  /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(correo)
    if (!validemail && correo !== '') {
      alert("El correo ingresado es incorrecto");
      validador = false;
    }

    const validpassletras = /^[a-zA-Z]/.test(pass)
    const validpassNumero = /\d/.test(pass)
    const validpassCaracter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass)
    const validpassLongitud = /.{6,}/.test(pass)

    if (!validpassletras || !validpassNumero || !validpassCaracter || !validpassLongitud) {
      alert("La contraseña debe tener al menos: 6 caracteres, 1 numero, 1 caracter especial y 1 letra");
      validador = false;
    }

    if(validador == true){
        
      add();
    }
  } 


  
  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo" className="img-fluid"
                    style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">REGISTRO</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input 
                            onChange={(event) =>{

                              setNombre(event.target.value);
                            }}
                          
                          type="text" id="form3Example1m" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example1m">nombres</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                          onChange={(event) =>{

                            setApellido(event.target.value);
                          }}
                          
                          type="text" id="form3Example1n" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example1n">Apellidos</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                      onChange={(event) =>{

                        setCorreo(event.target.value);
                      }}  
                      
                      type="email" id="form3Example8" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example8">Correo</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                      onChange={(event)=>{

                        setPass(event.target.value);
                      }}
                      type="password" id="form3Example8" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example8">Contraseña</label>
                    </div>

                    <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                      <h6 className="mb-0 me-4">Genero: </h6>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input 
                        onChange={(event) =>{

                          setGenero(event.target.value);
                        }}
                        
                        className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                          value="Femenino" />
                        <label className="form-check-label" htmlFor="femaleGender">Femenino</label>
                      </div>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input 
                          onChange={(event) =>{

                            setGenero(event.target.value);
                          }}
                        className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                          value="Masculino" />
                        <label className="form-check-label" htmlFor="maleGender">Masculino</label>
                      </div>

                      <div className="form-check form-check-inline mb-0">
                        <input 
                          onChange={(event) =>{

                            setGenero(event.target.value);
                          }}
                        className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                          value="Otro" />
                        <label className="form-check-label" htmlFor="otherGender">Otro</label>
                      </div>

                    </div>

                    <div className="d-flex  pt-3">
                      <button type="button" className="btn btn-warning btn-lg ms-2">Subir Imagen</button>
                    </div>
                    <br />

                    <div className="d-flex justify-content-end pt-3">
                      <button onClick={mensajeExito} type="button" className="btn btn-warning btn-lg ms-2">Registrar</button>
                    </div>
                    
              
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registro;
