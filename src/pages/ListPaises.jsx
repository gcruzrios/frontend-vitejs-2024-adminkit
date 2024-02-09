import React from 'react'
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PaisesList from '../components/PaisesList';
const ListPaises = () => {
  return (
    <div>

<div className="wrapper">
        <Sidebar />

        <div className="main">
          <Header />
          <PaisesList/>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ListPaises