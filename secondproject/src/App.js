import logo from './logo.svg';
import './App.css';
import Header from './Header';
import weblogo from './images/logo img.webp'

function App() {
  return (
    <div className="App">

      {/* 13. How to Setup Tailwind CSS in React */}

      <h1 className='bg-red-900 text-white mt-[100px] p-[100px] text-2xl'>Syeda Atruba</h1>

      {/* 14. How to import CSS in React */}
      <Header />

      {/* 15. How to import images in React */}
      <img width={100} src={weblogo} />
      <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmQTS2WTQWPif9ajaKpowwsSg3fEJSvty-6EAqq_80Q&s" />




    </div>
  );
}

export default App;
