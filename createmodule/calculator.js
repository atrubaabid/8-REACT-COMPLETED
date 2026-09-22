// // 1. DEFAULT EXPORT  =>   we use default export when we have only one function to export

// let sum = (a, b) => {
//     return a + b;
// }

// export default sum  



// =========================================================================================================




// 2. NAME EXPORT   =>  we use name export when we have multiple function to export

// let sum = (a, b) => {
//     return a + b;
// }

// let min = (a, b) => {
//     return a - b;
// }

// // 1. Method
// export { sum, min }


// --------------------------------------------------------------------------------------

// 2. Method
 export let sum = (a, b) => {
    return a + b;
}

export let min = (a, b) => {
    return a - b;
}

export let name = "Syeda Atruba"

