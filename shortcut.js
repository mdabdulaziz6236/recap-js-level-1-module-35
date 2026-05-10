/* truthy,
 false Ternary operator,
  shortcut and or */


/* false value */

// 0 , -0 , '' , NaN , false, null , undefined,





/* Truthy value */

// 'Alhdmdulillah', ' ' , 786, {},[], true

/* General way */


const test =   ''

// if (test) {
//     console.log("It's Truthy value.")
// } else {
//     console.log("It's false value.")
// }

/* Turnary operator */

// test?console.log("It's Truthy value."):console.log("It's False value.")


// const num = 10;
// const result= (num >= 10 && num<20 )? 'true':"false"
// console.log(result)


const isActive = true;
// console.log(!isActive) // give opposite result by !

const showUser = ()=>console.log("show User green")
const hideUser = ()=>console.log("Hide User")

// isActive?showUser():hideUser()

// isActive && showUser() // যদি সত্য হয় রেজাল্ট আসবে না হয় কিছু দিবে না।

// isActive || hideUser() // যদি false হয় রেজাল্ট আসবে না হয় কিছু দিবে না।

const num = '10'; // string
// const number = +num /// number

const result2 = num - 2
// const result = 10 + ''  
// console.log(typeof num) // string
// console.log(typeof +num) // number ...... +string = number

// console.log(typeof result) // string
console.log(typeof result2) // number output = 8 number








