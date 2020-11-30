import React from 'react'
import Name from './Name'

const Phonebook = ({numbers}) => {

    const allNumbers = numbers.map(number => 
        <Name key ={number.name} name={number.name}/>
    )
    return(
        <tbody>
          {allNumbers}
        </tbody>
    )
}

export default Phonebook