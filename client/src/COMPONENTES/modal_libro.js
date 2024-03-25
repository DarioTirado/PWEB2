import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormularioModal = ({ showModal, handleClose }) => {
  const[userList, setUList] = useState([]);
  const[GenList, setGList] = useState([]);

  const [nombre, setNombre] = useState('');
  const [edicion, setedicion] = useState('');
  const [sinopsis, setMensaje] = useState('');
  const [paginas, setpaginas] = useState('');
  const [año, setaño] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptiongenero, setSelectedOptiongenero] = useState('');
  const navigate = useNavigate(); 

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleSelectChangegenero = (e) => {
    setSelectedOptiongenero(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Formulario enviado:', {paginas, año });
    handleClose(); 
  };

  useEffect(
    ()=>{
        axios.get("http://localhost:3001/getautores",{
        }).then((resp)=>{
          console.log(resp.data); // Verifica los datos recibidos del servidor
            setUList(resp.data);
        })
        .catch((error) => {
          console.error("Error al obtener autores:", error);
        });
},[])

useEffect(
  ()=>{
      axios.get("http://localhost:3001/getgeneros",{
      }).then((resp)=>{
        console.log(resp.data); // Verifica los datos recibidos del servidor
          setGList(resp.data);
      })
      .catch((error) => {
        console.error("Error al obtener generos:", error);
      });
},[])


const RegistrarLibro = ()=>{
  axios.post("http://localhost:3001/RegistroLibro",{
    titulo:nombre,
    edicion:edicion,
    id_autor:selectedOption,
    paginas:paginas,
    genero:selectedOptiongenero,
    año_publicacion:año,
    sinopsis:sinopsis
  }).then(()=>{

    alert("Libro Registrado");
    navigate('/Perfil_Admin'); // Redirige a la ruta '/Login'

  })
}

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
              <Form.Group controlId="formaño">
            <Form.Label>Año Publicacion</Form.Label>
            <Form.Control
              type="date"
              placeholder="Ingresa el año"
              value={año}
              onChange={(e) => setaño(e.target.value)}
            />
              </Form.Group>
              <Form.Group controlId="formListBox">
            <Form.Label>Selecciona un autor:</Form.Label>
            <Form.Control as="select" value={selectedOption} onChange={handleSelectChange}>
              <option value="">Seleccionar</option>
              {userList.map((autor) => (
                <option key={autor.ID_AUTOR} value={autor.ID_AUTOR}>{autor.NOMBRE}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formListBox">
            <Form.Label>Selecciona un Genero:</Form.Label>
            <Form.Control as="select" value={selectedOptiongenero} onChange={handleSelectChangegenero}>
              <option value="">Seleccionar</option>
              {GenList.map((genero) => (
                <option key={genero.ID_GENERO} value={genero.ID_GENERO}>{genero.DESCRIPCION}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formMensaje">
            <Form.Label>Sinopsis</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Escribe aquí"
              value={sinopsis}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </Form.Group>
          <Button onClick={RegistrarLibro} variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormularioModal;
