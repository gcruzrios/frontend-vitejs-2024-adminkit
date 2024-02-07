import React from 'react'
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";

const ListEmpresas = () => {
  return (
    <div>
        <div className="wrapper">
        <Sidebar />

        <div className="main">
          <Header />
          <MainContent/>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ListEmpresas