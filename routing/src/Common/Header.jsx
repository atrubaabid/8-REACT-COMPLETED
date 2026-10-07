import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <center>
                <h1>Static Routing</h1>

                <div> <Link to={"/"}>Home</Link > </div>
                <div> <Link to={"/about"}>About</Link ></div>
                <div> <Link to={"/contact"}>Contact</Link ></div>
                <div> <Link to={"/blog"}>Blog</Link ></div>

            </center >
        </div>
    )
}
