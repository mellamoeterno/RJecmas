// Handling events in React is a used for building interactive user interfaces. 
// In React, you can use event handlers 'onClick' and 'onChange' to respond to user interactions.

//  onClick event is a built-in event handler that is used to listen for and respond to a user's click action on a particular element

//  it can be used for example to track a click of a button: 

// class MyComponent extends React.Component {
//   handleClick() {
//     alert('Button clicked!');
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>Click me</button>
//     );
//   }
// }
// export default MyComponent;

// -when the "Click me" button is clicked, the handleClick function is called, and it shows an alert with the message "Button clicked!".


// onChange event is a common event handler used with form elements, particularly with input elements like text fields, checkboxes etc;
// -it detect and respond to changes in the value of these form elements.

// class MyComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       inputValue: ''
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({
//       inputValue: event.target.value
//     });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.inputValue}
//           onChange={this.handleInputChange}
//         />
//         <p>You typed: {this.state.inputValue}</p>
//       </div>
//     );
//   }
// }

// export default MyComponent;

// -here its an input field for text. the onChange event handler, handleInputChange, is called. It updates the component's state with the new input value, the value typed into the input is used by onChange, and if you want you use it to show somewhere.

// basically detects value element and returns to be used somewhere. (continue on the next RTF)

// Handling events with onChange and onClick has to do with building interactive user interfaces. basically just using their functionality by itself will do the job(handling events) is just how onClick and onChange works.
