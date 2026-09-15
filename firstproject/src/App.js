import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Props from './9-Understanding-Props';
import ChildrenProps from './10-Using-Children-Props';

function App() {

  let myname = "Syeda Atruba"
  let arr = [10, 20, 30, 40, 50]
  let obj = {
    student: "Atruba",
    program: "BSCS",
  }

  return (
    <div className="App">

      {/*  6. Understanding JSX */}
      {/*  html */}

      <h1>{myname}</h1>

      {arr.map((v) => {
        return (
          <div>{v + 2}</div>
        )
      })}

      <div>{obj.student}</div>
      <div>{obj.program}</div>



      {/* css */}

      <h1 style={{ color: "red", backgroundColor: "yellow" }}>{myname}</h1>

      <h1 className='main'>{myname}</h1>


      {/* 7. React Components */}

      <Header />
      <div className='rowss'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      <Footer />


      {/* 8. Setup + Adding Bootstrap in React */}

      <div className='container-fluid mt-5'>
        <div className='container bg-info'>
          <div className='row'>
            <div className='col-12 d-flex gap-5 justify-content-center'>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>

          </div>

        </div>

      </div>

      {/* 9. Understanding Props */}

      <Props email="example@gmail.com" phone="123456" obj={obj} />


      {/* 10. Using Children Props */}

      <ChildrenProps>
        <h1>This is a Children Props</h1>
      </ChildrenProps>







    </div>
  );
}

export default App;



function Card() {
  return (
    <div className='cardDiv'>CardDiv
    </div>
  )
}


