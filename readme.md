<h1>REACT COMPLETE</h1>

<h2>1. WHAT IS REACT?</h2>

<p>React.js → JavaScript ki library hai jo fast aur interactive websites/web apps banane ke liye use hoti hai.

Normal HTML mein agar aapko website par Navbar, Product Card, Button, Footer baar-baar use karna ho, to code repeat ho sakta hai.

React mein aap:
<ul>
<li>Navbar → Component</li>
<li>Product Card → Component</li>
<li>Button → Component</li>
<li>Footer → Component</li>
</ul>

bana kar unhein multiple places par reuse kar sakti ho 

SPA (Single Page Application) → Puri website ek hi page par dynamically content change karti hai, page reload nahi hota. (react worked on SPA Method)


MPA (Multi Page Application) → Har new page/request par naya page load hota hai.</p>


-------------------------------------------------------------------------------------------------------------------


<h2> 2. JS MODULE | DEFAULT & NAME EXPORT | IMPORTANT CONCEPT</h2>

<p>JS MODULE  =>  (export) (import)

<ol><li><b>Now we learn import export logic with simple JS, first you need to open cmd in your woring folder</b>

🛠️mkdir createmodule → createmodule naam ka new folder/directory create karega.

📁cd createmodule → createmodule folder ke andar chala jayega. 

💻code . → Current folder ko VS Code mein open karega.  </li>

<li><b>Now in open folder in vs code open terminal and use this commands</b>

npm init -y 📦 →  Project ke liye automatically package.json file create karega. (in this file write this after main tag ("type":"module"))

then make an index.js file  → for import <br>
then make an calculator.js file  → for export

then watch (createmodule) folder  →  for import export understanding

for run the file in terminal
<ul><li>node index.js  =>  run only one time</li>
<li>nodemon index.js  =>  automatic run every change</li></ul></li></ol></p>


-------------------------------------------------------------------------------------------------------------------

<h2>3. Prerequisites for Learning React</h2>

<ul>
<li>HTML</li>
<li>CSS</li>
<li>JAVASCRIPT</li>
<li>BOOTSTRAP</li>
<li>TAILWIND</li>
<li>GITHUB</li>
</ul>


-------------------------------------------------------------------------------------------------------------------


<h2>4. REACT Installation & Setup</h2>

<p>
you need to download Node.js

In NODE.js we have:
<ul>
<li>npm (Node Package Manager)  => USE: when you need to download anything in your system</li>
<li>npx (Node Package Execute)  => USE: when you need to download anything in just on your working folder</li>
</ul>

after download node check this commands in your cmd for confirmation:
<ul>
<li>node -v  =>  for check version</li>
<li>npm -v   =>  for check version</li>
<li>npx -v   =>  for check version</li>
</ul>

Through npx => create your project
<ul>
<li>npx create-react-app firstproject  ->  for install react in folder</li>
<li>cd firstproject ->  for enter the folder</li>
<li>npm start  ->  create the local host and run the website</li>
<li>ctrl + C  ->   for stop terminal</li>
<li>cls   ->   for clear screen of cmd</li>
</ul></p>


-------------------------------------------------------------------------------------------------------------------


<h2>5. Directory Structure of React App </h2>

<ol>
File/Folder   -------------------------	Easy Meaning
<li>node_modules  ---------------------	Installed packages</li>
<li>public  ---------------------------	Static/public files</li>
<li>favicon.ico  ---------------------- 🌐 Browser tab ka small icon</li>
<li>public/index.html  ----------------	Main HTML template + root</li>
<li>logo192.png ----------------------- 192×192 app/PWA icon</li>
<li>logo512.png  ---------------------- 512×512 app/PWA icon</li>
<li>manifest.json --------------------- 📱 Web app ki identity/settings</li>
<li>robots.txt ------------------------ 🤖 Search engine crawlers ke instructions</li>
<li>src  ------------------------------	⭐ Actual React coding</li>
<li>src/index.js  ---------------------	⭐ React app ka entry point</li>
<li>src/App.js  -----------------------	⭐ Main React component</li>
<li>App.css  --------------------------	App ki CSS</li>
<li>index.css  ------------------------	Global CSS</li>
<li>App.test.js  ----------------------	Testing</li>
<li>setupTests.js  --------------------	Testing setup</li>
<li>reportWebVitals.js  ---------------	Performance checking</li>
<li>logo.svg  -------------------------	Default React logo</li>
<li>.gitignore	  --------------------- Git ko files ignore karne ke liye</li>
<li>package.json ----------------------  ⭐ Dependencies + npm commands</li>
<li>package-lock.json  ----------------	Exact package versions</li>
<li>README.md  ------------------------	Project documentation</li>
</ol>


-------------------------------------------------------------------------------------------------------------------

<h2>6. Understanding JSX</h2>

<p>
React work with 4 files
<ul>
<li>.js file  ->  javascript file</li>
<li>.jsx file  ->  javascript + XML file  ->  we can use 'html' between 'javascript' in that file</li>
<li>.ts file  ->  typescript file</li>
<li>.tsx file  ->  typescript + XML file  ->   we can use 'html' between 'typescript'  in that file</li>
</ul>

for HTML in App.js file

```jsx
  function App() {
      let myname = "Syeda Atruba"
    return (
        <div>       
              <h1>{myname}</h1>
        </div>
    )
}

export default App
```

for CSS in App.js file

```jsx
  function App() {
      let myname = "Syeda Atruba"
    return (
        <div>       
                <h1 style={{ color: "red", backgroundColor: "yellow" }}>{myname}</h1>
        </div>
    )
}

export default App
```

also you can use css by app.css file like normal we use css

<h5>for further understanding how we can write html and css in javascript file watch firstproject/src/app.js file</h5>


-------------------------------------------------------------------------------------------------------------------

<h2>7. React Components</h2>

Component = reusable part of a React website.

### Example:

- Navbar     → Component
- Button     → Component
- Card       → Component
- Footer     → Component

Har component ko alag bana kar baar baar use kar sakte ho.

**1. Method**
- you need to make component file in src folder like Header.jsx and then after completion your code you can import it in your App.js file (for all the procedure you can see firstproject folder)
  
Header.jsx file code

```jsx
function Header() {
    return (
        <div>
            <h1>Header Content Shows here</h1>
        </div>
    )
}

export default Header
```

App.js file code

```jsx
import Header from './Header';

function App() {
    return(
        <div>
      <Header />
        </div>
    )
}

```


**2. Method**
- you can make component in your App.js file after the (export deafault app) and use it as a tag


-------------------------------------------------------------------------------------------------------------------



<h2>8. Setup + Adding Bootstrap in React</h2>

```
npm i bootstrap
```

run this command in your vs code terminal and then check **package.json** file for confirmation of **("bootstrap": "^5.3.8",)** after that

write these lines in index.js file

```
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
```
and after this you can use all the classes of bootstrap in app.js



-------------------------------------------------------------------------------------------------------------------


<h2>9. Understanding Props</h2>

Props = Parent component se Child component ko data bhejne ka tareeqa.

**Parent: data deta hai 📦**

```jsx
function App() {
  let obj = {
    student: "Atruba",
    program: "BSCS",
  }

  return (
    <div>
    <Header email="example@gmail.com" phone="123456" obj={obj} />
    </div>

    )
}
```

**Child: data receive karta hai 🎁**

```jsx
function Header({ obj,email,phone }) {

    // 1. Method
    // console.log(props);
    // console.log(props.email);
    // console.log(props.phone);

    // 2. Method
    // let { obj,email,phone } = props;
    // console.log(obj.student);
    // console.log(obj.program);
    // console.log(email);
    // console.log(phone);

    // 3. Method
    console.log(obj.student);
    console.log(obj.program);
    console.log(email);
    console.log(phone);

  return (
    <div>

            <p>{obj.student}</p>
            <p>{obj.program}</p>
            <p>{email}</p>
            <p>{phone}</p>

    </div>

    )
}
```


-------------------------------------------------------------------------------------------------------------------



<h2>10. Using Children Props</h2>

children special prop hai jo parent ke component ke opening aur closing tag ke beech ka content child component ko deta hai.

Component ke andar jo content likha ho, woh props.children ke through milta hai.

**Parent: data deta hai 📦**

```jsx
function App() {
  return (
    <Card>
      <h1>Hello Atruba</h1> -> this one is children props
    </Card>
  );
}
```



**Child: data receive karta hai 🎁**

```jsx
function Card(props) {
  return ( 
    <div>{props.children}</div>
  )
}
```


-------------------------------------------------------------------------------------------------------------------



<h2>11. How to pass Object to child Components</h2>

```jsx
import { blog } from './Data/blog';

function App(){
  return(
    <div>
       <div className='blogContainer'>
        {blog.map((v, i) => {
          return (
            <BlogCard blogdata={v} key={i} />
          )
        })}
       </div>
    </div>

  )
}

export default App;


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

```
for further understanding you can see **firstproject** folder



-------------------------------------------------------------------------------------------------------------------


<h2>12. How to Add Font Awesome Icon</h2>

first you need to go on this site https://docs.fontawesome.com/web/use-with/react 

after that install these packages in your working folder cmd

**1. Add the React Component**
```
npm i --save @fortawesome/react-fontawesome@latest
```

**2. Add SVG Core**
```
npm i --save @fortawesome/fontawesome-svg-core
```

**3. Add Icon Packages**
```
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

**And, Now you can use it like this**
```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFaceAngry } from '@fortawesome/free-regular-svg-icons';


function App(){
  return(
    <div>
      <FontAwesomeIcon icon={faWhatsapp}/>
      <FontAwesomeIcon icon={faFaceAngry}/>
      <FontAwesomeIcon icon={faFacebook}/>
      <FontAwesomeIcon icon={faInstagram}/>
    </div>

  )
}

export default App;
```


-------------------------------------------------------------------------------------------------------------------


<h2>13. How to Setup Tailwind CSS in React</h2>

**Step 1 — Tailwind install karo**
```
npm install -D tailwindcss@3
```

**Step 2 — Tailwind ki config files banao**
```
npx tailwindcss init -p
```

Ab tumhare project mein ye do files ban jaengi:
```
tailwind.config.js ✅
postcss.config.js ✅
```

**Step 3 — tailwind.config.js open karo**

ab **tailwind.config.js** file me jo code hai usko replace karke ye code likho:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Step 4 — src/index.css open karo**

usme ye code paste krdo
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Step 5 — Ab Tailwind test karo ❤️**

```jsx
function App() {
  return (
    <div className="bg-blue-500 text-white text-3xl p-5">
      Hello Tailwind
    </div>
  );
}

export default App;
```


-------------------------------------------------------------------------------------------------------------------

<h2>14. How to import CSS in React</h2>

**FOR IMPORT CSS**
For example, if you create a **Header.jsx** file and a **Header.css** file to keep the CSS separate for that component, you just need to import the CSS file into your Header.jsx component like this.

**Header.css**
```css
.header{
    width: 100%;
    padding: 20px;
    background-color: aqua;
    color: red;
}
```

**Header.jsx**
```jsx
import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>Header component</div>
  )
}

```


-------------------------------------------------------------------------------------------------------------------



<h2>15. How to import images in React</h2>

**FOR IMPORT IMAGES**
If you need to use your own images on your website, you can import them like this.

**your image**
```
src/
   └── images/
           └── logo img.webp   ← 🖼️ Aapki image
   
```

**you can use it like this**
```jsx
import React from 'react'
import weblogo from './images/logo img.webp'

export default function Header() {
  return (
    <div>
    // import from your system
      <img width={100} src={weblogo} />

    // live link
      <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmQTS2WTQWPif9ajaKpowwsSg3fEJSvty-6EAqq_80Q&s" />
    </div>
  )
}

```


-------------------------------------------------------------------------------------------------------------------


<h2>16. Event Handling</h2>

```jsx
function App(){

// function 1
    let hey = () => {
    alert("Hey")
  }

// function 2
    let addData = (a, b) => {
    alert(`you addition is ${a + b}`)
  }

  return(
    <div>
// When you just call a function, you can use it without parentheses.
      <button className='bg-red-500 p-[10px] rounded text-white mr-[10px]' onClick={hey}> Save</button>

// When you call a function with its parameter, you can use it like this -> create an arrow function and then call it.
      <button className='bg-orange-500 p-[10px] rounded text-white' onClick={() => addData(5, 50)}>Save</button>

    </div>

  )
}
```



-------------------------------------------------------------------------------------------------------------------


<h2>17. HOOKS (Usestate in hooks)</h2>

```js
let count = 0;
count = count + 1;
```
Value memory mein change ho sakti hai, lekin React automatically UI update nahi karega. isliye ham useState use kerty hyn.<br>


**USESTATE** -> Component ke andar aisa data store karna jo change ho sakta hai, aur change hone par UI ko update karna.
```jsx
const [state, setState] = useState(initialValue);
```

**EXAMPLE**
```jsx
function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
```
**📌Summery** 
```
count → Current value.

setCount → Function to update the value.

useState → React Hook.

0 → Initial value.
```

**In simple words: useState helps us store changing data and automatically update the UI when that data changes.**

-------------------------------------------------------------------------------------------------------------------

<h2>18. Conditional Statement (if-else)</h2>

```jsx

function App() {

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


  return (
    <div>
       <div>{template}</div>
    </div>
  );
}

```


-------------------------------------------------------------------------------------------------------------------



<h2>19. Ternary Operator</h2>

```jsx
function App() {

  let [showpara, setShowpara] = useState(false)

  return (
    <div>
     
      <button className='bg-purple-500 text-white p-3 -m-3 mt-6' onClick={() => setShowpara(!showpara)}>{showpara ? 'Hide' : 'Show'}</button>

      {
        showpara  ?  <p className='max-w-[1200px] bg-purple-500 m-auto p-6 font-bold text-white m-3'>I'm Ternery Opertor</p>   :   ""
      }

    </div>
  );
}
```




-------------------------------------------------------------------------------------------------------------------

<h2>20. Module Style for a component</h2>

CSS Modules are used in React to create component-specific CSS, so the styles of one component don't accidentally affect another component.
```
src/
   └── button.module.css    -> your file
```


you can use this file like this
**button.module.css file** 
```css
.info {
    padding: 10px;
    background-color: aqua;
    margin-right: 5px;   
}

.danger {
    padding: 10px;
    background-color: red;
    color: white;
    margin-right: 5px;
}

.success {
    padding: 10px;
    background-color: green;
    color: white;
    margin-right: 5px;
}
```

**App.js file**
```jsx
import mybtn from './button.module.css'


function App() {

  return (
    <div>
      
        <button className={mybtn.info}>Info</button>
        <button className={mybtn.danger}>Danger</button>
        <button className={mybtn.success}>Success</button>

    </div>
  );
}
```



-------------------------------------------------------------------------------------------------------------------


<h2>21. Show or Hide Password | PROJECT</h2>

```jsx

function App() {

  let [pshow, setPshow] = useState(false)

  return (
    <div>
      
         <input type={pshow ? 'text' : 'password'} />
         <button onClick={() => setPshow(!pshow)}>{pshow ? 'Hide' : 'Show'}</button>

    </div>
  );
}

```


-------------------------------------------------------------------------------------------------------------------


<h2>22. Responsive Menu | PROJECT</h2>

```jsx

function App() {

 let [nshow, setNshow] = useState(false)

  return (
    <div>
      
        <ul className={`text-[10px] fixed bg-yellow-400 h-[80%] top-0 left-[-1000px] p-10 duration-[0.5s]  ${nshow ? 'left-[0px]' : ''}`}>
          <li>Home</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Our Courses</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>

        <button onClick={()=>setNshow(!nshow)}>Open Navbar {nshow ? <span className='bg-yellow-300 px-2 py-1 rounded-full'> &times; </span> : <span  className='bg-yellow-300 px-2 py-1 rounded-full'> &#9776; </span>} </button>

    </div>
  );
}

```



-------------------------------------------------------------------------------------------------------------------


<h2>23. Create Login Modal | PROJECT</h2>

```jsx

function App() {

  let [modalshow, setModalshow] = useState(false)

  return (
    <div>

    <button onClick={() => setModalshow(true)}>Enquiry Form</button>

    <div className={`w-[100%] h-screen bg-black/50 fixed left-0 top-0 ${modalshow ? 'block' : 'hidden'}`}></div>

    <div className={`pt-[20px] duration-[0.3s] bg-white w-[350px] h-[350px] fixed left-[50%] translate-x-[-50%] translate-y-[-50%] ${modalshow ? 'top-[50%]' : 'top-[-50%]'}`}>Enquiry Now <span className='text-2xl text-red-600 ' onClick={()=>setModalshow(false)}>&times;</span> </div>

    </div>
  );
}

```


-------------------------------------------------------------------------------------------------------------------


<h2>24. Create FAQ using state | PROJECT</h2>

```jsx

function App() {

  let [faqshow, setFaqshow] = useState(questions[0].id)

  return (
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
  );
}

```



-------------------------------------------------------------------------------------------------------------------


<h2>25. Create FAQ with Props Drilling | PROJECT</h2>

**App.js**

```jsx
import Faqproject from './Faqproject';

function App() {

  return (
    <div>
      
       <Faqproject/>

    </div>
  );
}

```

**Faqproject.jsx**

```jsx
import React from 'react'
import { useState } from 'react';
import { questions } from './Data/question';

export default function Faqproject() {

    // USESTATE
    let [faqshow, setFaqshow] = useState(questions[0].id)

    // MAP
    let allitems = questions.map((item, i) => {
        let itemdetail = {
            item,
            faqshow,
            setFaqshow
        }
        return (
            <Items itemdetail={itemdetail} key={item.id}/>
        )
    })

    return (
        <div className='max-w-[1270px] bg-orange-500 p-6 mx-auto mt-3'>
            <h1 className='mb-6 font-bold'>25. Create FAQ with Props Drilling | PROJECT</h1>

            <div>
                {/* UPDATED MAP SHOW ON THE BROWSER */}
                {allitems}
            </div>


        </div>
    )
}




// Items
function Items({ itemdetail }) {

    let { item, faqshow, setFaqshow } = itemdetail;

    return (
        <div className='mb-3'>

            <h3 className='bg-yellow-400 text-left ps-[20px] font-bold  py-2 cursor-pointer' onClick={() => setFaqshow(item.id)}>{item.id} {item.title}</h3>

            <p className={`ps-[20px] text-left border-[5px] border-yellow-400 duration-[0.5s] transition-all  overflow-hidden ${faqshow == item.id ? 'h-auto opacity-100 translate-y-0 py-3' : 'h-0 translate-y-[-40px] opacity-0 '}`}>{item.body}</p>

        </div>
    )
}

```


-------------------------------------------------------------------------------------------------------------------


<h2>26. What is Key Prop in React JS & its Importance</h2>

key prop gives each list item a unique identity so React can efficiently track, add, remove, or update items.

- Think of it like a student ID number. Every student has a different ID, so the school can easily identify each student. Similarly, React uses key to identify each list item.
- 

```jsx
function App() {

  const users = [
  { id: 101, name: "Ali" },
  { id: 102, name: "Sara" },
  { id: 103, name: "Ahmed" }
];

  return (
    <div>

       {users.map((user) => {
            return (
              <p key={user.id}>{user.name}</p>
            )
          })}

    </div>
  );
}

```



-------------------------------------------------------------------------------------------------------------------




<h2>27. What is Key Prop in React JS & its Importance</h2>








































































