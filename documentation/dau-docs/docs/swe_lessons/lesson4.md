---
sidebar_label: "Beginner JavaScript"
sidebar_position: 4
---

# DAU SWE Lesson 4

## Beginner JavaScript

### JavaScript Intro

**What is Javascript?**
Javascript is a programming language that adds interactivity to a website. JavaScript was originally used only in frontend development and was client-side scripting language that interacted with the backend by running code in the browser.

This caused code maintability issues and slow performance. With the creation of Node.js, a runtime environment for JavaScript, the language can now run on both client and server side.

Javascript is a nessesary programming language for anyone getting into web development. As one of the most widely used programming languages, its important to have a strong foundation in learning its syntax and fundementals.

**What can javascript do?**

- Adding interactive elements to webpages.
- Creating dynamic content and live-changing interfaces.
- Handling events and user inputs.
- Manipulating the DOM (Document Object Model).
- Communicating with servers using APIs.
- Developing complex web applications with frameworks like React and Node.js.

### JavaScript [Beginner Level]

This guide goes over some fundemental concepts and programming features of Javascipt. As a programming language that is inspired by C++ and Javascript, the syntax is not as

#### Variables

Variables are used to store data that can be used and manipulated later in your program.

- **Declaring Variables**:
  Variables are a way to store values.
  There are three ways to declare a variable, but we focus on **let** and **const**.

  ```javascript
  var name = "Peter"; // not used
  let age = 21;
  const pi = 3.14;
  ```

  The difference between `let` and `const` is that `const` does not allow you to change the assigned value. Use `const` whenever you are sure that the variable and value will not need to be changed.

  ```javascript
  const food = "Apple Pie";
  food = "Peach Pie"; //type error: Assignment to constant variable
  ```

#### Data Types

JavaScript has several data types:

- **String**: Represents textual data.

  ```javascript
  let greeting = "Hello, World!";
  ```

  You may use single quotes '' or double quotes "" for strings.

- **Number**: Represents numerical values.

  ```javascript
  let score = 99.5;
  ```

  Other programming languages have data types like float and integer, but javascript fits these into 'number' as the data type.

- **Boolean**: Represents true or false.

  ```javascript
  let isActive = true;
  ```

- **Array**: Represents a list of values.

  ```javascript
  let fruits = ["Apple", "Banana", "Cherry"];
  ```

- **Object**: Represents a collection of key-value pairs.

  ```javascript
  let person = { name: "John", age: 25 };
  ```

  Data types can be changed and the comparisons can be evaluated from operations.

- Type coercion is the auto conversion of a variables data type

  ```javascript
  console.log(21 = "21") //returns true
  ```

  the string "21" is coerced into a number before being compared with the number 21

- Type coversion is the explicit change of a variables data type

  - preferred to explicitly changes a variables data type
  - also known as type casting or casting

  Here are the functions built in with javascript.

  - `Number(str)`
  - `String(Num)`
  - `Boolean(Value)` returns true by default

JavaScript is an interpreted programming language, so we can explore how data types are implicitly interpreted in operations.

#### Operators

Operators are used to perform operations on variables and values.

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`

  ```javascript
  let sum = 10 + 5; // 15
  let product = 10 * 5; // 50
  ```

- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`

  ```javascript
  let isEqual = 10 == "10"; // true
  let isStrictEqual = 10 === "10"; // false
  ```

  The difference between equality (`==`) and strict equality (`===`) is that strict equality checks both the value and the data type of the variable.

- **Logical Operators**: `&&`, `||`, `!`

  - **AND (`&&`)**: Both conditions must be true to return true.
  - **OR (`||`)**: Either condition being true will return true.
  - **NOT (`!`)**: Returns the opposite of the logical result.

  ```javascript
  let andOperation = true && false; // false
  let orOperation = true || false; // true
  let notOperation = !false; // true
  ```

---

### Conditional Statements

Conditional statements are used to perform different actions based on different conditions. These are commonly known as:

- If
- If-Else
- If-ElseIf-Else
- Switch

- **if...else**:

  ```javascript
  let age = 20;
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }
  ```

- **if...else-if...else**:

  ```javascript
  let score = 85;
  if (score >= 90) {
    console.log("Grade: A");
  } else if (score >= 80) {
    console.log("Grade: B");
  } else if (score >= 70) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  }
  ```

- **switch**:

  ```javascript
  let day = "Monday";
  switch (day) {
    case "Monday":
      console.log("Start of the week!");
      break;
    case "Friday":
      console.log("End of the week!");
      break;
    default:
      console.log("Midweek days.");
  }
  ```

### Loops

Loops are used to repeat a block of code multiple times. The purpose of using loops is to run the same statement of code multiple times. Loops help a programmer be efficient.

- remember to add a
- **for loop**:

  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

- **while loop**:

  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

- **do...while loop**:

  ```javascript
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

---

### Functions

Functions are blocks of code designed to perform a particular task, executed when called.

- Use functions when you have repeated and reusing code
- helps write efficient and convinient code

Function name rules:

- cant use special words like `function`
- cant start with a number like `123name`
- cant use special characters except `$` and `_`
- use camelCase as good practice for function naming
- **Function Declaration**:

Using functions:

1. declare a function
2. call the function

```javascript
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("John"));
```

- **Function Expression**:

  ```javascript
  const greet = function (name) {
    return "Hello, " + name;
  };
  console.log(greet("John"));
  ```

- **Arrow Function**:

  ```javascript
  const greet = (name) => {
    return "Hello, " + name;
  };
  console.log(greet("John"));
  ```

---

### Objects

Objects are collections of related data and functions (called properties and methods). Objects are a essential part of programming and understanding how they are created and used in web development is fundemental.

- **Creating an Object**:

  ```javascript
  let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function () {
      console.log("Car started");
    },
  };
  ```

- **Accessing Object Properties**:

  ```javascript
  console.log(car.make); // Toyota
  car.start(); // Car started
  ```

---
