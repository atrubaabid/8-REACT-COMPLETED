import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Props from './9-Understanding-Props';
import ChildrenProps from './10-Using-Children-Props';
import { blog } from './Data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFaceAngry } from '@fortawesome/free-regular-svg-icons';

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

      {arr.map((v, i) => {
        return (
          <div key={i}>{v + 2}</div>
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


      {/* 11. How to pass Object to child Components */}


      <div className='blogContainer'>
        {blog.map((v, i) => {
          return (
            <BlogCard blogdata={v} key={i} />
          )
        })}
      </div>

      {/* 12. How to Add Font Awesome Icon */}

      <FontAwesomeIcon icon={faWhatsapp}  className='fs-1'/>
      <FontAwesomeIcon icon={faFaceAngry} className='fs-1'/>
      <FontAwesomeIcon icon={faFacebook} className='fs-1'/>
      <FontAwesomeIcon icon={faInstagram} className='fs-1'/>



      


    </div>
  );
}

export default App;


// CARD
function Card() {
  return (
    <div className='cardDiv'>CardDiv
    </div>
  )
}

// BLOG-CARD
function BlogCard({ blogdata }) {
  return (
    <div className='blogCard'>
      <h1>{blogdata.id}</h1>
      <h5>{blogdata.title}</h5>
      <p>{blogdata.body}</p>
    </div>
  )
}


