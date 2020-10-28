//Adding state hook
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const App = () => {
  const [rates, setRates] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const setGoodRating = () => {
    const newRate = {
      good: rates.good + 1,
      neutral: rates.neutral,
      bad: rates.bad
    }
    setRates(newRate)
  }

  const setNeutralRating = () => {
    const newRate = {
      good: rates.good,
      neutral: rates.neutral + 1,
      bad: rates.bad
    }
    setRates(newRate)
  }

  const setBadRating = () => {
    const newRate = {
      good: rates.good,
      neutral: rates.neutral,
      bad: rates.bad + 1
    }
    setRates(newRate)
  }
  
  return(
    <div>
      <h1> Give Feedback </h1>
      <button onClick={setGoodRating}>good</button>
      <button onClick={setNeutralRating}>neutral</button>
      <button onClick={setBadRating}>bad</button>

      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{rates.good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{rates.neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{rates.bad}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}



ReactDOM.render(<App />,document.getElementById('root') );
