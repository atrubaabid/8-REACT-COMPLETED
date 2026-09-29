import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [pshow, setPshow] = useState(false)
  let [nshow, setNshow] = useState(false)
  return (

    <div className="App">

      {/* 21. Show or Hide Password | PROJECT */}
      <div className='max-w-[1270px] bg-orange-500 p-6 mx-auto'>

        <h1 className='mb-6 font-bold'>21. Show or Hide Password | PROJECT</h1>

        <div className='flex justify-center gap-4'>


          <input type={pshow ? 'text' : 'password'} className='rounded px-3' />


          <button className='bg-yellow-300 p-[5px] rounded text-[13px]' onClick={() => setPshow(!pshow)}>{pshow ? 'Hide' : 'Show'}</button>
        </div>


      </div>


      {/* 22. Responsive Menu | PROJECT */}

      <div className='max-w-[1270px] bg-orange-500 p-6 mx-auto mt-3'>

        <h1 className='mb-6 font-bold'>22. Responsive Menu | PROJECT</h1>



        <ul className={`text-[10px] fixed bg-yellow-400 h-[80%] top-0 left-[-1000px] p-10 duration-[0.5s]  ${nshow ? 'left-[0px]' : ''}`}>
          <li>Home</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Our Courses</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>

        <button onClick={()=>setNshow(!nshow)}>Open Navbar {nshow ? <span className='bg-yellow-300 px-2 py-1 rounded-full'>&times;</span> : <span  className='bg-yellow-300 px-2 py-1 rounded-full'>&#9776;</span>} </button>


      </div>


    </div>
  );
}

export default App;
