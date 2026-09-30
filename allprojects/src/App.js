import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { questions } from './Data/question';

function App() {
  // 21. Show or Hide Password | PROJECT
  let [pshow, setPshow] = useState(false)
  // 22. Responsive Menu | PROJECT
  let [nshow, setNshow] = useState(false)
  // 23. Create Login Modal | PROJECT
  let [modalshow, setModalshow] = useState(false)
  // 24. Create FAQ using state | PROJECT 
  let [faqshow, setFaqshow] = useState(questions[0].id)



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

        <button onClick={() => setNshow(!nshow)}>Open Navbar {nshow ? <span className='bg-yellow-300 px-2 py-1 rounded-full'>&times;</span> : <span className='bg-yellow-300 px-2 py-1 rounded-full'>&#9776;</span>} </button>


      </div>



      {/* 23. Create Login Modal | PROJECT */}

      <div className='max-w-[1270px] bg-orange-500 p-6 mx-auto mt-3'>

        <h1 className='mb-6 font-bold'>23. Create Login Modal | PROJECT</h1>

        <button className='bg-yellow-300 p-2 rounded' onClick={() => setModalshow(true)}>Enquiry Form</button>

        <div className={` w-[100%] h-screen bg-black/50 fixed left-0 top-0 ${modalshow ? 'block' : 'hidden'}`}></div>

        <div className={`pt-[20px] duration-[0.3s] bg-white w-[350px] h-[350px] fixed left-[50%] translate-x-[-50%] translate-y-[-50%] ${modalshow ? 'top-[50%]' : 'top-[-50%]'}`}>Enquiry Now <span className='text-2xl text-red-600 ' onClick={() => setModalshow(false)}>&times;</span> </div>


      </div>

      {/* 24. Create FAQ using state | PROJECT */}

      <div className='max-w-[1270px] bg-orange-500 p-6 mx-auto mt-3'>
        <h1 className='mb-6 font-bold'>24. Create FAQ using state | PROJECT</h1>

        <div>
          {questions.map((v, i) => {

            return (
              <div className='mb-3'>

                <h3 className='bg-yellow-400 text-left ps-[20px] font-bold  py-2 cursor-pointer' onClick={() => setFaqshow(v.id)}>{v.id} {v.title}</h3>

                <p className={`ps-[20px] text-left border-[5px] border-yellow-400 duration-[0.5s] transition-all  overflow-hidden ${faqshow == v.id ? 'h-auto opacity-100 translate-y-0 py-3' : 'h-0 translate-y-[-40px] opacity-0 '}`}>{v.body}</p>
              </div>
            )

          })}

        </div>


      </div>



    </div>
  );
}

export default App;
