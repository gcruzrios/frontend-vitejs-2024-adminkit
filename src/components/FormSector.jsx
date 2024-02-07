import React from "react";

import { useLocation } from 'react-router-dom';

import FormAddSector from "./FormAddSector";
import FormEditSector from "./FormEditSector";

const FormSector = () => {

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
   <main className="content">
        <div className="container-fluid p-0">
          <div className="mb-3">
            <h1 className="h3 d-inline align-middle">Formularios de Sectores</h1>
            
          </div>
          <div className="row">
            <div className="col-12 col-lg-8">

            { location.pathname==="/addsector" ? <FormAddSector /> : <FormEditSector />}  
            </div>

            
          </div>
        </div>
      </main>

    </div>
  )
}

export default FormSector