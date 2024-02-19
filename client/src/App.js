import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/CSS/Login.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';



function App() {
  const navigate = useNavigate();

  const handleRegistroClick = () => {
    navigate('/registro'); // Redirige a la ruta '/registro'
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
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" htmlFor="form3Example3">Correo electronico</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" htmlFor="form3Example4">Contrasena</label>
                </div>                

                <button type="submit" className="btn btn-primary btn-block mb-4">
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
