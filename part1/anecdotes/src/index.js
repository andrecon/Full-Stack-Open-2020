import {React, useState} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const App = ({anecdotes}) => {
  let rand = Math.floor((Math.random() * anecdotes.length));
  const [selected, setSelected] = useState(rand)
  const [allVotes, setAll] = useState(new Uint8Array(anecdotes.length))

  const [popularAnecdote, setPopularAnecdote] = useState('')

  const changeAnecdote = () => {
    let selector = Math.floor((Math.random() * anecdotes.length));
    setSelected(selector)
  }

  const upvote = () => {
    const copy = [...allVotes]
    copy[selected] += 1  
    let i = copy.indexOf(Math.max(...copy))
    setPopularAnecdote(anecdotes[i])
    setAll(copy)
  }
  
  return(
    <div>
      <h1>Anecdote of the Day </h1>
      <p> {anecdotes[selected]} </p>
      <p> has {allVotes[selected]} votes.</p>
      <button onClick={upvote}> Vote </button>
      <button onClick={changeAnecdote}> Next Anecdote </button>

      <p>Anecdote with most votes </p>
      {popularAnecdote}
    </div>
  )
}

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))