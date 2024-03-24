import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FormularioModal = ({ showModal, handleClose }) => {
  const [nombre, setNombre] = useState('');
  const [edicion, setedicion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [paginas, setpaginas] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptiongenero, setSelectedOptiongenero] = useState('');
  const options = ['Opción 1', 'Opción 2', 'Opción 3'];
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleSelectChangegenero = (e) => {
    setSelectedOptiongenero(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Formulario enviado:', { nombre, edicion,paginas, mensaje });
    handleClose(); 
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar Libro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa Nombre De La Obra"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEedicion">
            <Form.Label>Edicion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa Edicion"
              value={edicion}
              onChange={(e) => setedicion(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formpaginas">
            <Form.Label>Paginas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa Numero De paginas"
              value={paginas}
              onChange={(e) => setpaginas(e.target.value)}
            />
              </Form.Group>
              <Form.Group controlId="formListBox">
            <Form.Label>Selecciona un autor:</Form.Label>
            <Form.Control as="select" value={selectedOption} onChange={handleSelectChange}>
              <option value="">Seleccionar</option>
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formListBoxgenero">
            <Form.Label>Selecciona un genero:</Form.Label>
            <Form.Control as="select" value={selectedOptiongenero} onChange={handleSelectChangegenero}>
              <option value="">Seleccionar</option>
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formMensaje">
            <Form.Label>Sinopsis</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Escribe aquí"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormularioModal;
