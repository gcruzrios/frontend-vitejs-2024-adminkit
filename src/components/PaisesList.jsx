import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const PaisesList = () => {
  const [pais, setPais] = useState([]);



 


  const peticionGet = async () => {
    //console.log("en petición get")         
    await axios.get("/api/pais/obtenerpaises").then((response) => {
      setPais(response.data);
     // console.log(empresas);
    });


  };

  useEffect(() => {
   
    peticionGet();
  }, []);


  const eliminar_completo = async (id) => {
    const respuesta = await axios.delete(`api/pais/borrarpais/${id}`);
    peticionGet();
  }  
  const eliminar = async (id) => {


    Swal.fire({
      title: 'Está seguro de borrar el registro?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      denyButtonText: `No borrar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        eliminar_completo(id);
        Swal.fire('Registro borrado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El Registro no ha sido borrado', '', 'info')
      }
    })
    
   
  };


  return (
    <div>
      <main className="content">
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3">Paises</h1>

         

<div className="col-12 col-xl-12">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Paises registrados</h5>
									
                                 <Link to="/addpais" className="btn btn-primary float-end">Agregar Pais</Link>
                
								</div>
								<table className="table table-striped">
									<thead>
										<tr>
											<th >Nombre</th>
                      <th >Continente</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
                  {pais.map((record) => ( 
										<tr  key={record._id}>
											<td>{record.nombre}</td>
                      <td>{record.continente}</td>
											
											<td className="table-action">
												<Link to={`/editpais/${record._id}`} className="btn btn-info">Editar</Link>{" "}
												<button className="btn btn-danger" onClick={()=>eliminar(record._id)}> Borrar</button>
											</td>
										</tr>
									   ))} 
									</tbody>
								</table>
							</div>
						</div>

        </div>



        
      </main>
    </div>
  );
};

export default PaisesList;
