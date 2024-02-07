import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const FormAddSector = () => {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    
    
    
   const handleAdd = async (e) => {
        e.preventDefault();
    
        const sector = { nombre, descripcion };
    
        console.log(sector);
    
        const response = await axios.post(`/api/sector/agregarsector`, sector);
        const mensaje = response.data;
        console.log(mensaje);
    
        if (mensaje === null) {
          Swal.fire({
            text: "Error insertando sector..",
            icon: "error",
          });
        } else {
          Swal.fire({
            text: "sector insertada con éxito..",
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
          <input type="text" className="form-control" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
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
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>
      </div>
      
        <div className="card-body">

            <button className="btn btn-lg btn-primary" onClick={handleAdd} >Guardar</button>
            {" "}
            <Link to="/sectores" className="btn btn-lg btn-secondary">Volver</Link>
        </div>

      </div>

   

    </div>
  )
}

export default FormAddSector