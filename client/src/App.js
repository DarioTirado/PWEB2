import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/CSS/Login.css';
import { useNavigate,useHistory} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';


function App() {
  const[user, setUser] = useState('');
  const[pass, setPass] = useState('');
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});


  useEffect(
    ()=>{
        localStorage.removeItem('sesion');
}, [])


const log = async (event) => {
  try {
    event.preventDefault(); // Evita la propagación del evento click
    const response = await axios.post("http://localhost:3001/login", {
      us: user,
      con: pass 
    });

    const data = response.data; 
    console.log(data); 
    if (data.alert === "Success") {
      setUserData(data);
      localStorage.setItem('sesion', JSON.stringify(data));
      alert('Usuario encontrado');
      navigate('/Home');
    } else {
      alert('Usuario no encontrado');
    }
  } catch (error) {
    console.log(error);
    alert('Error al iniciar sesión');
  }
}


  const handleRegistroClick = () => {
    navigate('/registro'); 
  };

  
  const handlehClick = () => {
    navigate('/Home');
  };
 
  return (
    <section className="text-center text-lg-start">
    <div className="container py-4">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card cascading-right" id="color">
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <form>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" onChange={(e)=>{setUser(e.target.value)}} value={user} />
                  <label className="form-label" htmlFor="form3Example3">Correo electronico</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" onChange={(e)=>{setPass(e.target.value)}} value={pass}/>
                  <label className="form-label" htmlFor="form3Example4">Contrasena</label>
                </div>                

                <button onClick={ log  } className="btn btn-primary btn-block mb-4">
                  Entrar
                </button>


                <p>Puede registrarse aqui:</p>
                
                <button onClick={handleRegistroClick } className="btn btn-primary btn-block mb-4">
                  Registrarse
                </button>
               
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4" alt="" />
        </div>
      </div>
    </div>
  </section>
  );
}

export default App;
