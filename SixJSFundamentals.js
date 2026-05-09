// variable

// let and const

// let name = "Md. abdul Aziz";

// name = "fahad";
// // console.log(name)

// const countryName = "BD";
// countryName = 'kjkdj'

/*  if else */
// const num = 30;
// if (num >= 20 || num <= 30) {
//   console.log("yes");
// } else {
//   console.log("No");
// }


/* Array   && array methood  */

// const friends = ["hero", "jsk", "abdul", "kala"];
// console.log(friends[3]);

// sese add kora
// friends.push('sese')

// seser ta delete kora
// friends.pop()

// surute add kora
// friends.unshift('BDD')

// suru theke delete kora
// friends.shift()


// slice kora kete neowa surur ta theke suru kore sesertar ager ta porjonto
// console.log(friends.slice(1,3)); //['jsk', 'abdul']

// splice kora kete neowa surur ta theke suru kore sesertar ta porjonto
// console.log(friends.splice(2,3))  // ['abdul', 'kala']

// console.log(friends);



/*  for loop */

// for (let index = 0; index < friends.length; index++) {
//     const element = friends[index];

//     console.log(element)
    
// }

// for (let index = 1; index > 0; index++) {
//     const element = index +  1
//     console.log(element)
    
// }


// for (let i = 1; i > 0 ; i++) {

//     let stars = "😘".repeat(i);

//     console.log(
//         `Step ${i} => ${stars}`
//     );
// }


/* Function */


// function num(a, b) {
// // console.log(...arguments) // 5, 6

//      return a +b

    
// }

// console.log(num.length)
// const output= num(5,6)

// console.log(output)


/* object */
const friends = ["hero", "jsk", "abdul", "kala"];

const person = {
    name: 'Abdul Aziz',
    age:21,
    friends:friends
}

// console.log(person.age)
// console.log(person.friends[2])

// change value from object
// person.age= 23
// person.friends = 'No '

console.log(person)

