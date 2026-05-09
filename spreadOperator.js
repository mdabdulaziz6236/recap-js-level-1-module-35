/*  Spread Operator */

const numbers = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers) // consoled full array

// console.log(...numbers) // only value 1 2 3 4 4 5 6 7 8 9 10



// const newNumberArray = [ 12, 243, 23, numbers ]
// console.log(newNumberArray) // consoled full array

const newNumberArray = [ 12, 243, 23, ...numbers ]

// console.log(newNumberArray) // consoled only value[12, 243, 23, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]
// console.log(...newNumberArray) // consoled 12 243 23 1 2 3 4 4 5 6 7 8 9 10 










 






