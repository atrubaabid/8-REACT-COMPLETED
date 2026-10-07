import React from 'react'
import Header from './Common/Header'
import { toast, ToastContainer } from 'react-toastify'

export default function Form() {
  return (
    <div>
        <Header/>
        <ToastContainer/>

        <button onClick={()=> toast.error("Atruba")}>save</button>
        

    </div>
  )
}

