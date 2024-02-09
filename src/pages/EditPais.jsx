import React from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import FormPais from "../components/FormPais";

const EditContacto = () => {
  return (
    <div>
      <div className="wrapper">
        <Sidebar />

        <div className="main">
          <Header />
          <FormPais />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EditContacto;
