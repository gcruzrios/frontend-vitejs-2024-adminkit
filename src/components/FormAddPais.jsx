import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const FormAddPais = () => {
  const [nombre, setNombre] = useState("");
  const [continente, setContinente] = useState("");
   

  const handleAdd = async (e) => {
    e.preventDefault();

    const pais = { nombre, continente };

    console.log(pais);

    const response = await axios.post(
      `/api/pais/agregarpais`,
      pais
    );
    const mensaje = response.data;
    console.log(mensaje);

    if (mensaje === null) {
      Swal.fire({
        text: "Error insertando registro..",
        icon: "error",
      });
    } else {
      Swal.fire({
        text: "Registro insertado con éxito..",
        icon: "success",
      });

      window.location.href = "/paises";
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Ingrese los datos de País</h5>
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
           
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            placeholder="Continente"
          
            onChange={(e) => setContinente(e.target.value)}
          />
        </div>
        
        
        </div>

        <div className="card-body">
          <button className="btn btn-lg btn-primary" onClick={handleAdd}>
            Agregar
          </button>{" "}
          <Link to="/paises" className="btn btn-lg btn-secondary">
            Volver
          </Link>
        </div>
      </div>
    
  );
};

export default FormAddPais;
