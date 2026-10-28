import React, { useState } from 'react'
import Header from '../Common/Header'

export default function About() {

    let [wdetails, setWdetails] = useState();
    let [isLoading, setIsloading] = useState(false)

    let getData = (e) => {
        e.preventDefault()
        let city = e.target.cityname.value;

        setIsloading(true);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=66f9d5eb1020e310d0f0374665c61254&units=metric`)
            .then((res) => {
                return res.json();
            }).then((data) => {
                if (data.cod == "404") {
                    setWdetails(undefined)
                    setIsloading(false);

                } else {
                    setWdetails(data)
                    setIsloading(false);

                }

            }).catch((err) => {
                console.log(err);

            })

        e.target.cityname.value = "";


    }

    return (
        <div>
            <Header />
            <div className='whetherApp'>
                <h1>Whether App Using fetch API</h1>

                <form onSubmit={getData}>
                    <input type="text" id='cityname' />
                    <button>Search</button>
                </form>

                <div className='whetherData'>

                    <img src="https://i.sstatic.net/kOnzy.gif" alt="" width={100} className={isLoading ? "show" : 'hide'} />

                    {wdetails == undefined ? <p>Data not found</p> : <>
                        <h3>{wdetails.name} {wdetails.sys.country}</h3>
                        <p>{wdetails.main.temp}</p>
                        <img src={`http://openweathermap.org/img/wn/${wdetails.weather[0].icon}@4x.png`} alt="" width={100} />
                        <p>{wdetails.weather[0].description}</p>
                    </>
                    }

                </div>
            </div>
        </div>
    )
}
