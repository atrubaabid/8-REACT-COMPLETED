import logo from './logo.svg';
import './App.css';
import Header from './Header';
import weblogo from './images/logo img.webp'
import { useState } from 'react';

function App() {

  // let n = 10;

  const [count, setCount] = useState(0)

  let hey = () => {
    //  n++
    //  console.log(n);
    setCount(count+1)

  }

  let addData = (a, b) => {
    alert(`you addition is ${a + b}`)
  }


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

      <button className='bg-red-500 p-[10px] rounded text-white mr-[10px]' onClick={hey}> Save</button>

      <button className='bg-orange-500 p-[10px] rounded text-white' onClick={() => addData(5, 50)}>Save</button>



      {/* 17. HOOKS (Usestate in hooks) */}

      {/* {n} */}
      {count}









    </div>
  );
}

export default App;
