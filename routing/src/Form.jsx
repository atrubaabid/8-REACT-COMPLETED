import React, { useState } from 'react'
import Header from './Common/Header'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Form() {

  // 34. Enquiry Form Handle with State Using Controlled Components

  let [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
    index: "",
  });

  let [allUserData, setAllUserData] = useState([]);


  let getvalue = (e) => {
    let currentUserData = { ...userData };
    let currentInputName = e.target.id;
    let currentInputValue = e.target.value;
    currentUserData[currentInputName] = currentInputValue;
    setUserData(currentUserData);
  }


  let handleform = (e) => {
    e.preventDefault();

    let currentUserData = { ...userData };

    // 36. Email or Phone Number already exist
    let checkEmailandPhone = allUserData.filter((obj) => obj.email == currentUserData.email || obj.phone == currentUserData.phone);
    if (checkEmailandPhone.length == 1) {
      toast.error("Email or Phone number already Exist");
    } else {

      setAllUserData([...allUserData, currentUserData]);
      toast.success("Your Information Successfully saved!");

      setUserData(
        {
          username: "",
          email: "",
          phone: "",
          message: "",
          index: "",
        }
      )

    }
  }

  // 37. Delete Row in User Data State
  let deleteRow = (indexNumber) => {
    let filteredData = allUserData.filter((obj, idx) => indexNumber != idx)
    setAllUserData(filteredData);
    toast.warning("Your Data Successfully deleted!");
  }


  // 38. Update UserRow in User Data State



  return (
    <div>
      <ToastContainer/>
      <Header />
      <h1>FORM</h1>

      {/* FORM */}

      <div className="form-container">
        <div className="my-form">
          <form onSubmit={handleform}>

            <label htmlFor="name">Name</label><br />
            <input type="text" id='username' value={userData.username} onChange={getvalue} /><br /><br />



            <label htmlFor="email">Email</label><br />
            <input type="email" id='email' value={userData.email} onChange={getvalue} required />

            <br /><br />

            <label htmlFor="phone">Phone</label><br />
            <input type="phone" id='phone' value={userData.phone} onChange={getvalue} required />

            <br /><br />

            <label htmlFor="message">Message</label><br />
            <textarea id="message" rows={3} value={userData.message} onChange={getvalue} ></textarea>

            <br /><br />

            <button>{userData.index !== "" ? "Update" : "save"}</button>

          </form>

        </div>


        <div className="table">
          <h1>Table</h1>
          {/* 35. Show User Data from State in Table Tag */}
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>




              {allUserData.length >= 1 ?


                allUserData.map((obj, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{obj.username}</td>
                      <td>{obj.email}</td>
                      <td>{obj.phone}</td>
                      <td>{obj.message}</td>
                      <td>
                        <button>Update</button>
                        <button onClick={() => deleteRow(i)}>Delete</button>
                      </td>
                    </tr>)
                }) :

                <tr><td colSpan={6}>No Data Found</td></tr>

              }




            </tbody>
          </table>
        </div>

      </div>










    </div>
  )
}

