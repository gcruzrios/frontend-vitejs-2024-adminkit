import React from 'react'
import FormSector from '../components/FormSector'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
const EditSector = () => {
  return (
    <div className="wrapper">
        <Sidebar />

        <div className="main">
          <Header />
          <FormSector/>

          <Footer />
        </div>
      </div>
  )
}

export default EditSector