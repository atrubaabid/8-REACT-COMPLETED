import React, { useState } from 'react'
import Header from './Common/Header'
import { toast, ToastContainer } from 'react-toastify'

export default function Form() {

  // 34. Enquiry Form Handle with State Using Controlled Components

  let [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
    index: "",
  });




  return (
    <div>
      <Header />
      <h1>FORM</h1>

      {/* FORM */}

      <div className="form-container">

        <div className="my-form">
          <form action="">

            <label htmlFor="name">Name</label><br />
            <input type="text" id='name' value={userData.username} onChange={(e) => {
              setUserData({ ...userData, username: e.target.value })
            }} /><br /><br />

            <label htmlFor="email">Email</label><br />
            <input type="email" id='email' value={userData.email} />

            <br /><br />

            <label htmlFor="phone">Phone</label><br />
            <input type="phone" id='phone' value={userData.phone} />

            <br /><br />

            <label htmlFor="message">Message</label><br />
            <textarea id="message" rows={3}></textarea>

            <button>Submit</button>

          </form>

        </div>

        <div className="table">

        </div>

      </div>










    </div>
  )
}

