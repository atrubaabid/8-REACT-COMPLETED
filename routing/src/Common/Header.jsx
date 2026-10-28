import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <center>
                <h1>Static Routing</h1>

                <div> <Link to={"/"}>Home</Link > </div>
                <div> <Link to={"/contact"}>Password Generator App</Link ></div>
                <div> <Link to={"/about"}>Whether App Using fetch API</Link ></div>
                <div> <Link to={"/form"}>Form</Link ></div>
                <div> <Link to={"/ecommerce"}>Ecommerce min web</Link ></div>

                <h1>Dynamic Routing</h1>
                <div> <Link to={"/blog"}>Blog</Link ></div>

            </center >
        </div>
    )
}
