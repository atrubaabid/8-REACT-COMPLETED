import React from 'react'
import Header from '../Common/Header'
import { blog } from '../Data/blog'
import { Link } from 'react-router-dom'

export default function Myblog() {

    let allmyCards = blog.map((items, i) => {
        return (
            <div className='Card' key={items.id}>
                <h3>{items.id} {items.title}</h3>
                <p>{items.body}</p>
                <Link to={`/blog/${items.id}`}><button>Read More</button></Link>
            </div>
        )

    })


    return (
        <div>
            <Header />
            <h1>My Blog</h1>

            <div className='container'>
                {allmyCards}
            </div>
        </div>
    )
}
