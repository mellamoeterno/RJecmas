// PROPS are short term for "properties"
// Props are a way to send information from one component to another in a unidirectional flow. 

// you need to create a parent component that will pass data to the child component

// import React from 'react';

// class ParentComponent extends React.Component {
//   render() {
//     // Data to be passed to the child component
//     const data = "Hello from Parent!";
    
//     return (
//       <div>
//         <ChildComponent message={data} />
//       </div>
//     );
//   }
// }

// export default ParentComponent;
// In this example, we have a ParentComponent that renders a ChildComponent and passes a message via a prop named message.

//  Now, you need to create the child component that will receive the data through props:

// import React from 'react';

// class ChildComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.message}</p>
//       </div>
//     );
//   }
// }

// export default ChildComponent;

// (continue...)
