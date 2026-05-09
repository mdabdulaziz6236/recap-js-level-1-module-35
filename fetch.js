


// const person = {
//     name: 'Hero Alam',
//     age: 50,
//     friends: ['db', 'dc', 'kalam'],
//     family: {
//         fatherName: 'Kala can',
//         motherName: 'Jorina Begum'
//     }
// }


/*  palin data to json  */
// const jsonData = JSON.stringify(person)
// console.log(jsonData)


/* Json data to plain data */
// const planData = JSON.parse(jsonData)
// console.log(planData)


/* Fetch =====>>>>>>>>     */

// fetch('/')
// .then(res => res.json())
// .then(data => console.log(data))


/* key from object */
// const keys = Object.keys(person)
// console.log(keys)

/* Get value from a Object */
// const values = Object.values(person)
// console.log( values)





const products = [
    {
        name: "tecno",
        brand: "techno",
        price: 17000,
        color: "black",
    },
    {
        name: "Samsung",
        brand: "samsung",
        price: 11000,
        color: "white",
    },
    {
        name: "I phone",
        brand: "apple",
        price: 170000,
        color: "yeallow",
    },
    {
        name: "readmi",
        brand: "xaomi",
        price: 15000,
        color: "black",
    },
];


const newData = {
    name:'walton',
    brand:'Walton',
    price:25000,
    color:'green'
}



const newArray = [...products,newData]

// console.log(newArray)


const reamainingProducts = products.filter(p =>p.brand!== 'aplle')

console.log(reamainingProducts)


const newArray2 = [...reamainingProducts, newArray]
console.log(newArray2)