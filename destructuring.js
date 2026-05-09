/* Array Destructuring  */

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



// const element1 = products[0]
// const element2 = products[1]
// const element3 = products[2]

const [element1, element2, element3] = products   // array destructuring

// console.log(element1,element2,element3)

/* Object Destructuring  */

const userMobile = { name: "readmi", brand: "xaomi", price: 15000, color: "black" }
// const name = userMobile.name
// const brand = userMobile.brand
// const color = userMobile.color



const { name:mobileName, brand, color} = userMobile /// using ............. object Destructuring 



// console.log(mobileName, brand, color)
