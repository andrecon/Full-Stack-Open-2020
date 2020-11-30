import React, {useState } from 'react'

import Phonebook from './components/Phonebook'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    //console.log('Button Clicked', event.target)

    const nameObject = {
      name: newName
    }
    setPersons(persons.concat(nameObject))
  
    setNewName('')

  }


  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
          <Phonebook numbers={persons}/>
      </table>
    </div>
  )
}

export default App