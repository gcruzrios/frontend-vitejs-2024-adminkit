import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const FormEditPais = () => {
  const [nombre, setNombre] = useState("");
  const [continente, setContinente] = useState("");
  

  const { id } = useParams();

  const GetPais = async () => {
    const response = await axios.get(`/api/pais/obtenerpais/${id}`);
    const mensaje = response.data;

    setNombre(mensaje[0].nombre);
    setContinente(mensaje[0].continente);
    
  };

  

  useEffect(() => {
    GetPais();
   
    
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();

    //    const token = data.Token;
    //    localStorage.setItem("Token", token);

    const pais = { nombre, continente };
    console.log(pais);
    const response = await axios.put(
      `/api/pais/actualizarpais/${id}`,
      pais
    );
    const respuesta = response.data;
    console.log(respuesta);

    if (respuesta === null) {
      Swal.fire({
        text: "Error actualizando registro..",
        icon: "error",
      });
    } else {
      Swal.fire({
        text: "Registro actualizado con éxito..",
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
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            placeholder="Continente"
            value={continente}
            onChange={(e) => setContinente(e.target.value)}
          />
        </div>
        
        
        </div>

        <div className="card-body">
          <button className="btn btn-lg btn-primary" onClick={handleEdit}>
            Editar
          </button>{" "}
          <Link to="/paises" className="btn btn-lg btn-secondary">
            Volver
          </Link>
        </div>
    </div>
  );
};

export default FormEditPais;
