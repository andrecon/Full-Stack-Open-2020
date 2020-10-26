import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


//--------------------------------------------------
// Using the Arrow Function ECMAScript6 (ES6)
// Compiling is handled by Bable
// const App = () => (
//   <div>
//     <p>Hello World</p>
//   </div>
// )

//OR
// const App = () => {
//   //console.log('Hello from component')

//   const now = new Date()
//   const a = 10
//   const b = 20

//   return (
//     <div>
//       <p> Hello World, it is {now.toString()} </p>
//       <p> {a} plus {b} os {a + b} </p>
//     </div>
//   )
// }
//--------------------------------------------------

//The core Philosophy of React is composing applications from many specialized reusable components.
//--------------------------------------------------
// const Hello = () => {
//   return(
//     <div>
//       <p>Hello World</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   )
// }
//--------------------------------------------------

const Hello = (props) => {
  return (
    <div>
      <p> Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/andrecon">andrecon</a>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )

  //Using a root element is not the only working option. An array of components is also a valid solution:
  // return [
  //   <h1>Greetings</h1>,
  //   <Hello name="Maya" age={26 +10} />,
  //   <Hello name={name} age={age} />,
  //   <Footer />
  // ]
}

ReactDOM.render(<App />,document.getElementById('root') );
