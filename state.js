// The useState hook is one of the fundamental concepts in React, and it's used to represent information that can change over time and affect a component's rendering.

// Change over time, effect components rendering.

// these two things mean:

// as because components often need to change what’s on the screen as a result of an interaction.
// Typing into the form should update the input field.

// And for example in a click “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart.

// with this we have the 'State' which is a component-memory

// so the useState hook in react works that allows you to add state to functional components. State is a way to manage and store data that can change over time in your application. The useState hook lets you declare and manage state variables

// You can provide an initial value for the state variable by passing it as an argument to useState. This initial value is used when the component is first rendered.

// const [count, setCount] = useState(0);

// To update the state variable, you call the function that is returned by useState
// for example using "set" prefix, takes the new value you want to assign to the state variable.

// setCount(count + 1);

// When you update a state variable using its associated setter function, React will automatically re-render the component, ensuring that the new state is reflected in the user interface.

// theres also multiple state variables:
// const [name, setName] = useState('');
// const [age, setAge] = useState(0);

// Multiple State Variables: You can use useState multiple times within the same component to manage multiple state variables. Each state variable is independent of the others.
