import React from "react";
import SectoresList from "../components/SectoresList";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
const ListSectores = () => {
  return (
    <div>
      <div className="wrapper">
        <Sidebar />

        <div className="main">
          <Header />
         
          <SectoresList />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ListSectores;
