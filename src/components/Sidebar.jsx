import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  return (
    <div>
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <a className="sidebar-brand" href="index.html">
          <i className="fa-solid fa-at"></i>
            <span className="align-middle"> AdminKit</span>
          </a>

          <ul className="sidebar-nav">
            <li className="sidebar-header">Pages</li>

            <li className="sidebar-item active">
              <a className="sidebar-link" href="/index">
              <i className="align-middle" data-feather="user"></i>{" "}
                <i className="fa-solid fa-bars"></i>
               
                <span className="align-middle">Dashboard</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/empresas">
                <i className="align-middle" data-feather="user"></i>{" "}
                <i className="fa-solid fa-industry"></i>
                <span className="align-middle">Empresas</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="/contactos">
                <i className="align-middle" data-feather="user"></i>{" "}
                <i className="fa-solid fa-user-group"></i>
                <span className="align-middle">Contactos</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/usuarios">
                <i className="align-middle" data-feather="user"></i>{" "}
                <i className="fa-solid fa-user-check"></i>
                <span className="align-middle">Usuarios</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="/sectores">
                <i className="align-middle" data-feather="user"></i>{" "}
                <i className="fa-solid fa-business-time"></i>
                <span className="align-middle">Sectores</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link" href="/paises">
                <i className="align-middle" data-feather="log-in"></i>{" "}
                <i className="fa-solid fa-earth-americas"></i>
                <span className="align-middle">Paises</span>
              </a>
            </li>

           <li className="sidebar-item ">
              <a className="sidebar-link" href="/blank">
                <i className="align-middle" data-feather="book"></i>{" "}
                <i className="fa-solid fa-chalkboard"></i>
                <span className="align-middle">Blank</span>
              </a>
            </li>

            

            
          </ul>

          
        </div>
      </nav>
      <script>
  feather.replace()
</script>
    </div>
  );
};

export default Sidebar;