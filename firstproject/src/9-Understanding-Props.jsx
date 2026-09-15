import React from 'react'

export default function Props({ obj, email, phone }) {

    // 1. Method
    // console.log(props);
    // console.log(props.email);
    // console.log(props.phone);

    // 2. Method
    // let { obj,email,phone } = props;
    // console.log(obj.student);
    // console.log(obj.program);
    // console.log(email);
    // console.log(phone);

    // 3. Method
    console.log(obj.student);
    console.log(obj.program);
    console.log(email);
    console.log(phone);


    return (
        <div>
            <h1>9-Understanding-Props</h1>

         
            {/* <p>{props.email}</p>
        <p>{props.phone}</p> */}

           
            <p>{obj.student}</p>
            <p>{obj.program}</p>
            <p>{email}</p>
            <p>{phone}</p>


        </div>
    )
}
