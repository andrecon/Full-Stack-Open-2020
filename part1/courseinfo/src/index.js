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
  const parts = props.courses.map( item => {
    return <Part key={item.id} part={item.part} exercise={item.exercise} />
  })

  return(
    <>
      {parts}
    </>
  )
}

const Total = (props) => {

  const totalExercices = props.numberOfExercises.reduce((totalExercices, numberOfExercises) => totalExercices + numberOfExercises.exercise, 0)
  
  return (
    <p> Number of exercises {totalExercices} </p>
  )
}


const App = () => {
  const course = 'Half Stack Application development'

  const courses = [
    {'id': 1, 'part': 'Fundamentals of React', 'exercise': 10}, 
    {'id': 2, 'part': 'Using props to pass data', 'exercise': 7}, 
    {'id': 3, 'part': 'State of component', 'exercise': 14} 
  ]

  return (
    <div>
      <Header course={course} />
      <Content courses={courses} />
      <Total numberOfExercises={courses} />
    </div>
  )
}

ReactDOM.render( <App />, document.getElementById('root'))
