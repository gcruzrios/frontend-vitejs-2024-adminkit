import React, { useState } from "react";
import Swal from "sweetalert2";

import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const ingreso = { email, password };
    console.log(ingreso);
    const response = await axios.post(`/api/usuario/login`, ingreso);

    const mensaje = response.data.mensaje;

    console.log(mensaje);

    if (mensaje === "Bienvenido") {
      const token = response.data.token;
      localStorage.setItem("Token", token);
      window.location.href = "/index";
    } else {
      Swal.fire({
        text: "Usuario o contraseña incorrectas..",
        icon: "error",
      });
    }
  };

  
  const mystyle = {
    backgroundImage: "url(img/photos/pexels-andrew-neel-2312369.jpg)"
  };


  return (
    <main className="main" id="top">
      <div className="row vh-100 g-0">
        <div className="col-lg-9 position-relative d-none d-lg-block">
          <div className="bg-holder" style={mystyle}></div>
          {/* <!--/.bg-holder--> */}
        </div>
        <div className="col-lg-3">
          <div className="row flex-center h-100 g-0 px-4 px-sm-0">
            <div className="col col-sm-6 col-lg-7 col-xl-6"><a className="d-flex flex-center text-decoration-none mb-4" href="../../../index.html">
                
              </a>
              <div className="text-center mb-7">
                <h3 className="text-body-highlight">Welcome to AdminKit</h3>
                <p className="text-body-tertiary">Get access to your account</p>
              </div>
              
             
              <div className="position-relative">
                <hr className="bg-body-secondary mt-5 mb-4" />
                <div className="divider-content-center">or use email</div>
              </div>
              <div className="mb-3 text-start"><label className="form-label" for="email">Email address</label>
                <div className="form-icon-container">
                    <input className="form-control form-icon-input" id="email" required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                    <span className="fas fa-user text-body fs-9 form-icon"></span></div>
              </div>
              <div className="mb-3 text-start"><label className="form-label" for="password">Password</label>
                <div className="form-icon-container">
                    <input className="form-control form-icon-input" id="password" required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <span className="fas fa-key text-body fs-9 form-icon"></span></div>
              </div>
              <div className="row flex-between-center mb-7">
                <div className="col-auto">
                  <div className="form-check mb-0"><input className="form-check-input" id="basic-checkbox" type="checkbox" checked="checked" />
                  <label className="form-check-label mb-0" for="basic-checkbox">Remember me</label></div>
                </div>
                <div className="col-auto">
                    <a className="fs-9 fw-semibold" href="../../../pages/authentication/simple/forgot-password.html">Forgot Password?</a></div>
              </div>
              <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Sign In</button>
              <div className="text-center">
                <a className="fs-9 fw-bold" href="/register">Create an account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  )
}

export default Login