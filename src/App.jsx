import { useState } from 'react'

import Index from "./pages/Index";
import Login from './pages/Login';
import NotFound from './pages/Error404';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from './pages/Register';

import AddEmpresa from './pages/AddEmpresa';
import EditEmpresa from './pages/EditEmpresa';
import Blank from './pages/Blank';
import ListEmpresas from './pages/ListEmpresas';
import ListContactos from './pages/ListContactos';
import ListUsuarios from './pages/ListUsuarios';
import AddContacto from './pages/AddContacto';
import EditContacto from './pages/EditContacto';
import AddUsuario from './pages/AddUsuario';
import EditUsuario from './pages/EditUsuario';
import ListSectores from './pages/ListSectores';
import AddSector from './pages/AddSector';
import EditSector from './pages/EditSector';
import Prueba from './pages/Prueba';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} exact>
        {" "}
      </Route>
      <Route path="/index" element={< Index />} exact>
        {" "}
      </Route>
      

      <Route path="/blank" element={<Blank/>} exact>
            {" "}
          </Route>
          
          <Route path="/register" element={<Register/>} exact>
            {" "}
          </Route>
          <Route path="/empresas" element={<ListEmpresas/>} exact>
            {" "}
          </Route> 
          <Route path="/addempresa" element={<AddEmpresa />} exact>
            {" "}
          </Route> 
          <Route path="/editempresa/:id" element={<EditEmpresa />} exact>
            {" "}
          </Route> 
          <Route path="/contactos" element={<ListContactos/>} exact>
            {" "}
          </Route> 
          <Route path="/addcontacto" element={<AddContacto />} exact>
            {" "}
          </Route>
          <Route path="/editcontacto/:id" element={<EditContacto />} exact>
            {" "}
          </Route> 
          <Route path="/usuarios" element={<ListUsuarios/>} exact>
            {" "}
          </Route> 
          <Route path="/addusuario" element={<AddUsuario/>} exact>
            {" "}
          </Route>
          <Route path="/editusuario/:id" element={<EditUsuario/>} exact>
            {" "}
          </Route>

          <Route path="/sectores" element={<ListSectores/>} exact>
            {" "}
          </Route> 
          <Route path="/addsector" element={<AddSector/>} exact>
            {" "}
          </Route>
          <Route path="/editsector/:id" element={<EditSector/>} exact>
            {" "}
          </Route>
          <Route path="/prueba" element={<Prueba/>} exact>
            {" "}
          </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
    
  </BrowserRouter>
  )
}

export default App
