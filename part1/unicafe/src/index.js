//Adding state hook
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Text = ({title}) => {
  return(
    <div>
      <h1>{title}</h1>
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

const Statistic = ({text,value}) => {

    if(text === "Positive")
    {
      return(
        <tr>
          <td>{text} </td> 
          <td> {value}%</td>
        </tr>
      )
    }
    return(
      <tr>
        <td>{text} </td> 
        <td> {value}</td>
      </tr>
    )
}


const Statistics = ({positive, negative, neutral, title}) =>{
  const total = positive+negative+neutral

  if (total === 0)
  {
    return(
      <div>
        <h1> {title} </h1>
        No Feedback Given.
      </div>
    )
  }

  const goodScore = positive - negative
  const average = goodScore/total
  const positiveScore = (positive / total) * 100

  return(
    <div>
      <Text title={title} />
      <table>
        <tbody>
            <Statistic text="Good" value={positive} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={negative} />
            <Statistic text="All" value={total} />
            <Statistic text="Average" value={average} />
            <Statistic text="Positive" value={positiveScore} />
        </tbody>
      </table>
    </div>
  )


  
}

const App = (props) => {
  const title = "Give Feedback"
  const stats = "Statistics"

  const [good, setGoodRating] = useState(0)
  const [bad, setBadRating] = useState(0)
  const [neutral, setNeutralRating] = useState(0)

  const countGood = (goodRate) => () => setGoodRating(goodRate)  
  const countBad = (badRate) => () => setBadRating(badRate)
  const countNeutral = (neutralRate) => () => setNeutralRating(neutralRate)

  return(
    <div>
      <Text title={title} />
      <Button onClick={countGood(good + 1)} text="Good" />
      <Button onClick={countNeutral(neutral +1)} text="Neutral" />
      <Button onClick={countBad(bad +1)} text="Bad" />
      <Statistics title={stats} positive={good} negative={bad} neutral={neutral} />      
    </div>
  )
  }



ReactDOM.render(<App />,document.getElementById('root') );
