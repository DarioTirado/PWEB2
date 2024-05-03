import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

const FormularioModal = ({ showModal, handleClose }) => {
    
  const navigate = useNavigate(); 
  const [nombre, setNombre] = useState('');
  const [apellidos, setapellidos] = useState('');
  const [edad, setedad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Formulario enviado:', { nombre, apellidos,edad});
    handleClose(); 
  };



  const RegistrarAutor = ()=>{
    Axios.post("http://localhost:3001/RegistrarAutor",{
      nombre:nombre,
      apellido:apellidos,
      edad:edad,
    }).then(()=>{

      alert("Autor Registrado");
      navigate('/Perfil_Admin'); // Redirige a la ruta '/Login'
      window.location.reload();
    })
  }


  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar Autor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre Autor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formapellidos">
            <Form.Label>apellidos Autor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setapellidos(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formedad">
            <Form.Label>Edad Autor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Edad"
              value={edad}
              onChange={(e) => setedad(e.target.value)}
            />
              </Form.Group>
          <Button onClick={RegistrarAutor} variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormularioModal;
