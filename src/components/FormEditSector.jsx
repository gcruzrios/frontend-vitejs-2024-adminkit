import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const FormEditSector = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  

  const { id } = useParams();

  const GetSector = async () => {
    const response = await axios.get(`/api/sector/obtenersector/${id}`);
    const mensaje = response.data;

    setNombre(mensaje[0].nombre);
    setDescripcion(mensaje[0].descripcion);
    
  };

  useEffect(() => {
    GetSector();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();

    //    const token = data.Token;
    //    localStorage.setItem("Token", token);

    const sector = { nombre, descripcion };
    console.log(sector);
    const response = await axios.put(
      `/api/sector/actualizarsector/${id}`,
      sector
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

      window.location.href = "/sectores";
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Ingrese los datos del sector</h5>
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
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Resumen / Descripción</h5>
          </div>
          <div className="card-body">
            <textarea
              className="form-control"
              rows="2"
              placeholder="Resumen"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="card-body">
          <button className="btn btn-lg btn-primary" onClick={handleEdit}>
            Editar
          </button>{" "}
          <Link to="/sectores" className="btn btn-lg btn-secondary">
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormEditSector;
