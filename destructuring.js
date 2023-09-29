// is a feature in JavaScript that allows you to extract values from objects 
//and arrays and assign them to variables in a more concise and readable way. 
//It's commonly used in React to extract values from props and state objects.

// Destructuring Props:
// When you pass data to a React component through props, you can destructure the props 
//object to access specific values.

// jsx
// Copy code
// // Without destructuring
// const MyComponent = (props) => {
//   const name = props.name;
//   const age = props.age;
//   // ...
// };

// // With destructuring
// const MyComponent = ({ name, age }) => {
//   // Now you can directly use 'name' and 'age' as variables.
//   // ...
// };
// Destructuring State:
// When you work with component state, especially in functional components using hooks like useState, you can destructure the state variable to access its values and update functions.

// jsx
// Copy code
// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [count, setCount] = useState(0);

//   // Destructuring state and state updater
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   // ...
// };
// Destructuring Arrays:
// Destructuring can also be applied to arrays. You can extract specific elements from an array into variables.

// javascript
// Copy code
// const myArray = [1, 2, 3];
// const [first, second, third] = myArray;

// console.log(first);  // 1
// console.log(second); // 2
// console.log(third);  // 3
// Destructuring helps make your code more concise and readable, especially when you're dealing with complex objects
// or arrays in React components. It's a fundamental JavaScript feature that's widely used in modern web development.