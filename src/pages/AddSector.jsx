import React from 'react'
import FormSector from '../components/FormSector'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
const AddSector = () => {
  return (
    <div>

<div className="wrapper">
        <Sidebar />

        <div className="main">
          <Header />
          <FormSector/>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default AddSector