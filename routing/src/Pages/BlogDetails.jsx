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
  })[0]

  console.log(currentBlog);
  

  // let obj = currentBlog[0];


  return (
    <div>
      <Header />

      <div className='container'>

        <h1>{currentBlog.id} {currentBlog.title}</h1>
        <p>{currentBlog.body}</p>

      </div>
    </div>
  )
}
