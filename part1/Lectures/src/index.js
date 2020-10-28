//Adding state hook
import React, { useState } from 'react';
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

//--------------------------------------------------
// const Hello = (props) => {
//   return (
//     <div>
//       <p> Hello {props.name}, you are {props.age} years old </p>
//     </div>
//   )
// }

// const Footer = () => {
//   return (
//     <div>
//       greeting app created by <a href="https://github.com/andrecon">andrecon</a>
//     </div>
//   )
// }

// const App = () => {
//   const name = "Peter"
//   const age = 10
//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }

  //Using a root element is not the only working option. An array of components is also a valid solution:
  // return [
  //   <h1>Greetings</h1>,
  //   <Hello name="Maya" age={26 +10} />,
  //   <Hello name={name} age={age} />,
  //   <Footer />
  // ]
  //--------------------------------------------------

  //--------------------------------------------------

  //Guesses the year of birth of the person being greeted
  //props is an object:
  /* 
    props = {
    name: 'Arto Hellas',
    age: 35,
  }
  */

  //Component directly Destructing from props
  // const Hello = ({name, age}) => {
  //   //Destructuring 
  //   // const { name, age } = props
    

  //   const bornYear = () => new Date().getFullYear() - age

  //   //Or
  //   /*
  //     const bornYear = () => {
  //       return new Date().getFullYear() - age
  //     }
  //   */


  //   return (
  //     <div>
  //       <p> Hello {name}, you are {age} years old.</p>
  //       <p>So you were probably born in {bornYear()} </p>
  //     </div>
  //   )
  // }

  // const App = () => {
  //   const name = 'Peter'
  //   const age = 23

  //   return(
  //     <div>
  //       <h1>Greetings</h1>
  //       <Hello name="Maya" age={26 + 10} />
  //       <Hello name={name} age={age} />
  //     </div>
  //   )
  // }
  //--------------------------------------------------

  //--------------------------------------------------

  // const App = (props) => {
  //   const {counter} = props
  //   return (
  //     <div>
  //       {counter}
  //     </div>
  //   )
  // }

  // let counter = 1
  // const refresh = () => {
  //   ReactDOM.render(<App counter={counter} />, document.getElementById('root'))
  // }

  // setInterval(() => {
  //   refresh()
  //   counter += 1
  // }, 1000)

  //--------------------------------------------------

  //--------------------------------------------------
  //Stateful Component

  // const App = () => {

  //   //The function call adds state to the component and renders it initialized with the value of zero.
  //   //useState returns an array containing two items. It gets assigned using destructing assignment
  //   // counter variable is assigned with the initial value of state '0'
  //   // setCounter is assigned to a function that will use to modify the state.
  //   const [ counter, setCounter ] = useState(0)

  //   //Takes a function and the time it will take before calling the function back again
  //   //setCounter will re-render the component of useState
  //   setTimeout(
  //     () => setCounter( counter + 1), 1000
  //   )

  //   console.log('rendering...', counter)

  //   return (
  //     <div>
  //       {counter}
  //     </div>
  //   )
  // }

  // ReactDOM.render(<App />, document.getElementById('root'))

  //--------------------------------------------------

  //--------------------------------------------------

  // const Display = ({counter}) => {
  //   return (
  //     <div>
  //       {counter}
  //     </div>
  //   )
  // }
  // const Display = ({counter}) => <div>{counter} </div>

  // // const Button = ({handleClick, text}) => {
  // //   return (
  // //     <button onClick={handleClick} >
  // //       {text}
  // //     </button>
  // //   )
  // // }

  // const Button = ({handleClick, text}) => <button onClick={handleClick}> {text} </button>

  // const App = () => {
  //   const [ counter, setCounter ] = useState(0)

  //   // const handleClick = () => {
  //   //   console.log('Clicked Short Button')
  //   // }

  //   const increaseByOne = () => setCounter(counter + 1)
  //   const decreaseByOne = () => setCounter( counter - 1)
  //   const setToZero = () => setCounter(0)

  //   return (
  //     <div>
  //       <Display counter={counter} />
  //       <Button handleClick={increaseByOne} text='Plus' />
  //       <Button handleClick={decreaseByOne} text='Minus' />
  //       <Button handleClick={setToZero} text='Reset' />

  //       {/* <button onClick={increaseByOne} >
  //         Plus
  //       </button>
  //       <button onClick= {setToZero} >
  //         Restart Click Counter
  //       </button> */}
  //       {/* <button onClick={ () => console.log('Clicked Long Button')} > Another Button </button> */}
  //     </div>
  //   )
  // }

  //--------------------------------------------------

  //--------------------------------------------------

  // const App = () => {
  //   // const [left, setLeft] = useState(0)
  //   // const [right, setRight] = useState(0)

  //   //Better version

  //   const [clicks, setClicks] = useState( {
  //     left: 0, right: 0
  //   })

  //   // const handleLeftClick = () => {
      
  //   //   const newClicks = {
  //   //     ...clicks,
  //   //     left: clicks.left + 1
  //   //   }

  //   //   setClicks(newClicks)
  //   // }

  //   // const handleRightClick = () => {
      
  //   //   const newClicks = {
  //   //     ...clicks,
  //   //     right: clicks.right + 1
  //   //   }

  //   //   setClicks(newClicks)
  //   // }

  //   //Changing state has to always be done by setting the state to a new object.
  //   const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})
  //   const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})

  //   return(
  //     <div>
  //       {clicks.left}

  //       <button onClick={handleLeftClick} >
  //         Left
  //       </button>

  //       <button onClick = {handleRightClick} >
  //         Right
  //       </button>

  //       {clicks.right}
  //     </div>
  //   )

  // }

  //--------------------------------------------------

  //--------------------------------------------------

  const History = (props) => {

    //conditional rendering.
    if (props.allClicks.length === 0) {
      return (
        <div>
          The app is used by pressing the buttons
        </div>
      )
    }

    return(
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }

  const Button = ({onClick, text}) => {
 
    return(
      <button onClick={onClick}>
        {text}
    </button>
    )
  }

  const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
      //does not mutate the existing array but rather returns a new copy of the array with the item added to it.
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }

    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }

    return (
      <div>
        {left}
        {/* <button onClick={handleLeftClick} > Left </button>
        <button onClick={handleRightClick} > Right </button> */}
        <Button onClick={handleLeftClick} text='Left' />
        <Button onClick={handleRightClick} text='Right' />
        {right}

        {/* <p>{allClicks.join(' ')}</p> */}
        <History allClicks={allClicks} />
      </div>
    )
  }

  //--------------------------------------------------


ReactDOM.render(<App />,document.getElementById('root') );
