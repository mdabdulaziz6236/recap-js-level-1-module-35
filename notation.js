/* dot vs bracket notation */


const person = {
    name: 'hero alom',
    age:10,
    friends:['korim', "rahim"],
    salary:25000,
    10 : 'secret code'
}

// const heroName = person.name; // using dot notation
// but

// const heroSecret = person.10 // error dibe
const heroSecret = person[10] // output asbe

const heroName = person['name']  // by key

// console.log(heroName)

