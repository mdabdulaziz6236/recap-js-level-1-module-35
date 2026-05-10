````md
#  - JavaScript Revision 

## 📌 Topics Covered

This module is a complete revision of core JavaScript concepts.  
All important beginner-to-intermediate JavaScript topics were practiced again.

---

# ✅ JavaScript Fundamentals

## 1. Variable Declaration
Learned how to declare variables using:

- `let`
- `const`
- `var`

### Usage
- `let` → changeable value
- `const` → fixed value
- `var` → old way of declaring variables

---

## 2. Conditionals

### Comparison Operators
```js
>, <, >=, <=, ==, !=, ===, !==
````

### Logical Operators

```js
&&   // AND
||   // OR
```

### Conditional Statements

* `if`
* `if...else`
* `if...else if...else`

Example:

```js
if (marks >= 80) {
   console.log("A+");
}
```

---

## 3. Arrays

### Array Methods

* `length`
* `push()`
* `pop()`
* `indexOf()`
* `includes()`

### Extra Topics

* `slice()`
* `splice()`
* `shift()`
* `unshift()`
* `join()`
* `reduce()`

### Check Array

```js
Array.isArray(arr)
```

---

## 4. Loops

### Basic Loops

* `for`
* `while`

### Advanced Loops

* `for...of`
* `for...in`

---

## 5. Functions

### Learned

* Function declaration
* Parameters
* Arguments
* Return values
* Function calling

Example:

```js
function add(a, b) {
   return a + b;
}
```

---

## 6. Objects

### Topics Covered

* Object declaration
* Accessing properties
* Nested objects
* Array inside object

Example:

```js
const student = {
   name: "Aziz",
   skills: ["HTML", "CSS", "JS"]
}
```

---

# ✅ Data Types

## 1. String

### String Methods

* `length`
* `includes()`
* `indexOf()`
* `toUpperCase()`
* `toLowerCase()`
* `substring()`
* `concat()`

### Extra

* String is immutable

---

## 2. Number

### Topics

* Integer
* Float
* String to Number conversion
* `NaN`
* Check integer

Example:

```js
Number.isInteger(10)
```

---

## 3. Boolean

### Learned

* `true`
* `false`
* Truthy values
* Falsy values

Falsy values:

```js
false
0
""
null
undefined
NaN
```

---

## 4. Null & Undefined

### Difference

* `null` → intentionally empty
* `undefined` → value not assigned

---

# ✅ ES6 Concepts

## 1. Template String

Example:

```js
const message = `My name is ${user.name}`;
```

---

## 2. Spread Operator

### Copy Array

```js
const newArr = [...oldArr];
```

### Add New Element

```js
const updated = [...oldArr, "React"];
```

### Remove Element with Filter

```js
const filtered = arr.filter(item => item !== "JS");
```

---

## 3. Arrow Functions

### No Parameter

```js
const getNine = () => 9;
```

### One Parameter

```js
const multiply = num => num * 12;
```

### Two Parameters

```js
const average = (a, b) => (a + b) / 4;
```

### Multi-line Arrow Function

```js
const calculate = (a, b) => {
   const x = a + 5;
   const y = b + 5;
   return x * y;
}
```

---

## 4. Destructuring

### Object Destructuring

```js
const { name } = user;
```

### Array Destructuring

```js
const [first, balance] = numbers;
```

---

## 5. Default Parameters

Example:

```js
function add(a = 0, b = 0) {
   return a + b;
}
```

---

## 6. Optional Chaining

Used to safely access nested properties.

Example:

```js
console.log(user?.address?.city);
```

---

# 🚀 Final Note

This module was a complete JavaScript revision before starting React.
Understanding these concepts properly will make React much easier to learn.

---

# 🛠️ Technologies Practiced

* JavaScript (ES6)
* Arrays
* Objects
* Functions
* Loops
* Conditionals

---

# 📚 Next Step

➡️ Start Learning React.js / Next.js / More....

```
```
