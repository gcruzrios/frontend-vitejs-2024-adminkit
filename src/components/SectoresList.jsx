import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const SectoresList = () => {
  const [sectores, setSectores] = useState([]);



 


  const peticionGetSectores = async () => {
    //console.log("en petición get")         
    await axios.get("/api/sector/obtenersectores").then((response) => {
      setSectores(response.data);
     // console.log(empresas);
    });


  };

  useEffect(() => {
   
    peticionGetSectores();
  }, []);


  const eliminar_completo = async (id) => {
    const respuesta = await axios.delete(`api/sector/borrarsector/${id}`);
    peticionGetSectores();
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
          <h1 className="h3 mb-3">Sectores</h1>

         

<div class="col-12 col-xl-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Sectores registrados</h5>
									
                  <Link to="/addsector" className="btn btn-primary float-end">Agregar Sector</Link>
                
								</div>
								<table class="table table-striped">
									<thead>
										<tr>
											<th >Nombre</th>
											<th >Resumen</th>
                                           
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
                    {sectores.map((sector) => ( 
										<tr  key={sector._id}>
                      <td>{sector.nombre}</td>
											<td>{sector.descripcion}</td>
                                            
                                            
											<td class="table-action">
												<Link to={`/editsector/${sector._id}`} className="btn btn-info">Editar</Link>{" "}
												<button className="btn btn-danger" onClick={()=>eliminar(sector._id)}> Borrar</button>
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

export default SectoresList;
