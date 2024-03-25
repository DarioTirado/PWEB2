import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

const FormularioModal = ({ showModal, handleClose }) => {
    
  const navigate = useNavigate(); 
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Formulario enviado:', { descripcion});
    handleClose(); 
  };



  const RegistrarGenero = ()=>{
    Axios.post("http://localhost:3001/RegistrarGenero",{
      descripcion:descripcion,
      
    }).then(()=>{

      alert("genero Registrado");
      navigate('/Perfil_Admin'); // Redirige a la ruta '/Login'
  
    })
  }


  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar Genero</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre De El Genero</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>
          <Button onClick={RegistrarGenero} variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormularioModal;
