import React, { useState } from 'react'
import Header from '../Common/Header'


export default function Contact() {
    let [plength, setPlength] = useState(10)
    let [up, setUP] = useState(false)
    let [lo, setLO] = useState(false)
    let [num, setNUM] = useState(false)
    let [sc, setSC] = useState(false)
    let [finalPassword, setfinalPassword] = useState('')


    let UP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let LO = "abcdefghijklmnopqrstuvwxyz"
    let NUM = "1234567890"
    let SC = "!@#$%^&*()?><"
    let newPassword = '';

    let copycode = () => {
        if (finalPassword == "") {
            alert("Please select at least one character type");
        } else {
            navigator.clipboard.writeText(finalPassword);
            alert("Password Copied!")
        }
    }


    let handleform = (e) => {
        e.preventDefault();
        let charSet = "";

        if (up || lo || num || sc) {

            if (up) charSet += UP;
            if (lo) charSet += LO;
            if (num) charSet += NUM;
            if (sc) charSet += SC;


            for (let i = 0; i < plength; i++) {
                newPassword += charSet.charAt(Math.floor(Math.random() * charSet.length))

            }

        } else {
            alert("Please select at least one character type");
        }

        setfinalPassword(newPassword);


    }






    return (
        <div>
            <Header />

            <div className='pass-container'>
                <form onSubmit={handleform}>
                    <h3>Password Generator App</h3>

                    <div>
                        <input type="text" id='fp' readOnly value={finalPassword} onChange={() => setfinalPassword(finalPassword)} /> <button type='button' onClick={copycode}>Copy</button>
                    </div>

                    <div>
                        <label htmlFor="p-l">Password Length</label>
                        <input type="number" min={10} max={20} id='p-l' value={plength} onChange={(e) => setPlength(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="UC">UpperCase Charactors</label>
                        <input type="checkbox" name="" id="UC" checked={up} onChange={() => setUP(!up)} />
                    </div>

                    <div>
                        <label htmlFor="LC">LowerCase Charactors</label>
                        <input type="checkbox" name="" id="LC"
                            checked={lo} onChange={() => setLO(!lo)} />
                    </div>

                    <div>
                        <label htmlFor="NU">Numbers Charactors</label>
                        <input type="checkbox" name="" id="NU"
                            checked={num} onChange={() => setNUM(!num)} />
                    </div>

                    <div>
                        <label htmlFor="SC">Special Charactors</label>
                        <input type="checkbox" name="" id="SC"
                            checked={sc} onChange={() => setSC(!sc)} />
                    </div>

                    <button id='f-btn'>Generate Password</button>

                </form>
            </div>



        </div>
    )
}
