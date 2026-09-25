<h1>REACT COMPLETE</h1>

<h3>1. WHAT IS REACT?</h3>

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


<h3> 2. JS MODULE | DEFAULT & NAME EXPORT | IMPORTANT CONCEPT</h3>
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

<h3>3. Prerequisites for Learning React</h3>

<ul>
<li>HTML</li>
<li>CSS</li>
<li>JAVASCRIPT</li>
<li>BOOTSTRAP</li>
<li>TAILWIND</li>
<li>GITHUB</li>
</ul>


-------------------------------------------------------------------------------------------------------------------


<h3>4. REACT Installation & Setup</h3>

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


<h3>5. Directory Structure of React App </h3>

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

<h3>6. Understanding JSX</h3>

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

<h3>7. React Components</h3>

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



<h3>8. Setup + Adding Bootstrap in React</h3>

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


<h3>9. Understanding Props</h3>

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



<h3>10. Using Children Props</h3>

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



<h3>11. How to pass Object to child Components</h3>

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


<h3>12. How to Add Font Awesome Icon</h3>

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


<h3>13. How to Setup Tailwind CSS in React</h3>

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






































