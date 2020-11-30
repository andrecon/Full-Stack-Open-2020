import React from 'react'

const Header = (props) => {
    return(
        <h1>{props.course}</h1>
    )
  }
  
const Part = (props) => {
    return(
        <p>
            {props.part} {props.exercise} 
        </p>
    )
}

const Content = (props) => {
    
    const part = props.parts.map(part => <Part key={part.id} part={part.name} exercise={part.exercises} />)
  
    return( 
        <div> 
            {part} 
        </div> 
    )
}
  
const Total = (props) => {
  
    const totalExercices = props.parts.reduce((sum, part) => sum += part.exercises, 0)
    
    return (
        <div>
            <p> <b> total of {totalExercices} exercises </b></p>
        </div>
    )
}

const Course = ({course}) => {

    return (
        <div>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
    )

} 


export default Course