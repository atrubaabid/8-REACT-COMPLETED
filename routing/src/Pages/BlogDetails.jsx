import React from 'react'
import { useLocation } from 'react-router-dom'
import { blog } from '../Data/blog';
import Header from '../Common/Header';

export default function BlogDetails() {

  let mylocation = useLocation();
  let currentID = mylocation.pathname.split('/')[2];

  let currentBlog = blog.filter((item, i) => {
    return (
      (currentID == item.id)
    )
  })

  let obj = currentBlog[0];

  console.log(obj);



  return (
    <div>
      <Header />

      <div className='container'>

        <h1>{obj.id} {obj.title}</h1>
        <p>{obj.body}</p>

      </div>
    </div>
  )
}
