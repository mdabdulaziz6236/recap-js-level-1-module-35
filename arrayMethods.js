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

/* Map ====>>>>> map return kore with an array */
const result = products.map((product) =>{
    const name = product.name;
    const price = product.price
    products.push({ name:name,price:price})
    return { name:name,price:price}
})

// console.log(result)
// console.log(products)

/* For Each   ======>>>>>>>>>  do not return with something */
// products.forEach(product => console.log(product.price))



/* Filter =====>>>>> return an array with specipic data  => */




const resutWithFilter = products.filter(product => product.price === 11000)
// console.log( resutWithFilter)


/* Find ====>>>>>>  return kore akta object */


const resultWithFind= products.find(product => product.brand === 'techno')
// console.log(resultWithFind)





