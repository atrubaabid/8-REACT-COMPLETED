// 1. DEFAULT EXPORT  =>   we use default export when we have only one function to export


// import sum from "./calculator.js";

// console.log(sum(10,20));
// console.log(sum(10,40));
// console.log(sum(10,100));



// =========================================================================================================



// 2. NAME EXPORT   =>  we use name export when we have multiple function to export

// 1. Method
// import { min, sum } from "./calculator.js";

// console.log(sum(10, 20));
// console.log(min(10, 20));

// ---------------------------------------------------------------

// 2. Method
// import { min, name, sum } from "./calculator.js";

// console.log(sum(10, 30));
// console.log(min(30, 30));
// console.log(name);


// ---------------------------------------------------------------


// 3. Method
// we can also write like this
// import { min as subtract, name as myname, sum as Addition } from "./calculator.js";

// console.log(Addition(10, 30));
// console.log(subtract(30, 30));
// console.log(myname);










