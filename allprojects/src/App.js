import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [pshow, setPshow] = useState(false)
  return (

    <div className="App">

      {/* 21. Show or Hide Password | PROJECT */}
      <div className='max-w-[1270px] bg-orange-500 p-6 mx-auto'>

        <h1 className='mb-6'>21. Show or Hide Password | PROJECT</h1>

        <div className='flex justify-center gap-4'>


          <input type={pshow ? 'text' : 'password'} className='rounded px-3' />


          <button className='bg-yellow-300 p-[5px] rounded text-[13px]' onClick={() => setPshow(!pshow)}>{pshow ? 'Hide' : 'Show'}</button>
        </div>


      </div>

    </div>
  );
}

export default App;
