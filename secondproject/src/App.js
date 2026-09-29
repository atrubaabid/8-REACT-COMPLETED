import logo from './logo.svg';
import './App.css';
import Header from './Header';
import weblogo from './images/logo img.webp'
import { useState } from 'react';

function App() {

  // 16. Event Handling 

  let hey = () => {
    alert(`hey`)
  }


  let addData = (a, b) => {
    alert(`you addition is ${a + b}`)
  }


  // ---------------------------------------------------------------


  // 17. HOOKS (Usestate in hooks)

  // let n = 10;

  const [count, setCount] = useState(0)

  let increase = () => {
    //  n++
    //  console.log(n);
    setCount(count + 1)

  }


  // ---------------------------------------------------------------


  // 18. Conditional Statement (if-else)

  let template = '';

  let [show, setShow] = useState(false)

  if (show) {
    template = <>
      <button className='bg-blue-500 text-white p-[10px]' onClick={() => setShow(!show)}>Hide</button>
      <p className='font-bold'>Atruba</p>
    </>
  } else {
    template = <>
      <button className='bg-blue-500 text-white p-[10px]' onClick={() => setShow(!show)}>Show</button>
    </>
  }


  // ---------------------------------------------------------------



  return (
    <div className="App">

      {/* 13. How to Setup Tailwind CSS in React */}

      <h1 className='bg-red-900 text-white mt-[100px] p-[100px] text-2xl'>Syeda Atruba</h1>



      {/* 14. How to import CSS in React */}
      <Header />



      {/* 15. How to import images in React */}
      <img width={100} src={weblogo} />
      <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmQTS2WTQWPif9ajaKpowwsSg3fEJSvty-6EAqq_80Q&s" />




      {/* 16. Event Handling */}

      <button className='bg-red-500 p-[10px] rounded text-white mr-[10px] mb-[10px]' onClick={hey}> Save</button>

      <button className='bg-orange-500 p-[10px] rounded text-white mb-[10px]' onClick={() => addData(5, 50)}>Save</button><br />



      {/* 17. HOOKS (Usestate in hooks) */}

      {/* {n} */}

      <div className='bg-red-500 h-[50px] w-[200px] flex  justify-evenly items-center m-auto mb-[10px]'>

        <button className='bg-yellow-300 p-[5px] rounded' onClick={increase}> UseState increase</button>

        <p className='bg-yellow-300 p-[5px] rounded w-[40px]' >{count}</p>

      </div>


      {/* 18. Conditional Statement (if-else) */}

      <div>{template}</div>












    </div>
  );
}

export default App;
