import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
       <p>{props.part} - {props.exercise} </p>
    </>
  )
}

const Content = (props) => {
  
  const part = props.parts.map(part => <Part key={part.exercises} part={part.name} exercise={part.exercises} />)

  return(
    <>
      {part}
    </>
  )
}

const Total = (props) => {

  const totalExercices = props.parts.reduce((sum, part) => sum += part.exercises, 0)
  
  return (
    <p> Number of exercises {totalExercices} </p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render( <App />, document.getElementById('root'))
