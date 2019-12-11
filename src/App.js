import React, {useState, useEffect} from 'react'
import './App.css';
import Person from './components/Person'
import Filter from './components/Filter'
import Notification from './components/Notification'

import personService from './services/persons'

const  App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState([])
  const [newNumber, setNewNumber] = useState([])
  const [filter, setNewFilter] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
 
  // update request PUT
  const updatePersonAndNumber = () => {
    const personNewName = persons.find(p => p.name === newName)
    const personNewNumber = persons.find(n => n.number === newNumber)

    if (!personNewName && !personNewNumber) {
      return false;
    };
    if (
      personNewName &&
      !window.confirm(
        `Name ${newName} is already in the phonebook.\nDo you want to update the number to ${newNumber}?`
      )
    ) {
      return false;
    }
    if (
      personNewNumber &&
      !window.confirm(
        `Number ${newNumber} is already in the phonebook.\nDo you want to update the name to ${newName}?`
      )
    ) {
      return false;
    }
    const p = personNewName || personNewNumber;
    const id = p.id;
    console.log('UpdatePersons', p)

    personService
    .update(id, {...p, name:newName, number:newNumber})
    .then(updatedPerson => {
      setPersons(persons.map(p => (p.id !== id ? p : updatedPerson)));
      setNewName('');
      setNewNumber('');
    })
    .catch(error => {
      console.log(error.response);
    })
    return true;
  };

  // delete person by his ID using axios
    const deletePersonId = (id) => {
      console.log('delete person')
      personService
      .del(id)
      .then(response => {
        setPersons(persons.filter(p => p.id !== id))
        console.log(response)
        console.log('deletePersonId')
      })
      .catch(error => {
        console.log(error.response)
      }) 
    }



  // effect hook for getting json data
  useEffect(() => {
    console.log('UseEffect, getAllRequest')
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
      console.log('promise fullfiled')
    })
    .catch(error => {
      console.log(error.response)
      console.log('error')
    })
  
  }, [])

  // adding new names using json data with axios
  const addName = (e) => {
    e.preventDefault()
    if(updatePersonAndNumber()) {
      return;
    }
    console.log('addName')
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    personService
    .create(nameObject)
    .then(response => {
      if(typeof(response) === 'undefined') 
        setErrorMsg(["Number already deleted, please refresh to reflect", false])
      else
        setErrorMsg(["Added new name ", newName, " with a number", newNumber, true])
        setPersons(persons.map(person => (person.id === response.id) ? response : person))
              
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
      console.log('addedNewName')
    })
    .catch(error => {
      console.log(error.response)
    })
  }


  // maping persons and getting a list of persons
  const rows = () => persons.map(p => 
    <Person 
        key={p.id} 
        person={p}
        number={p.number} 
        deletePerson={(id) => (deletePersonId(id))}
    />     
  )

  
  // add button event
  const handleAdd = (event) => {
    setNewName(event.target.value)
  }

  // add number event
  const addNumber = (event) => {
    setNewNumber(event.target.value)
  }

  // filter persons with input element
   let filteredPersons = persons;
   if (filter) {
     filteredPersons = persons.filter(
       p => p.name.toLocaleLowerCase().indexOf(filter.concat('')) !== -1
     );
   }

  return ( 
    <div>
      <h2>Phonebook</h2>
      <Notification  message={errorMsg}/>
      <Filter onChange={setNewFilter} value={filter}  />
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleAdd} value={newName}/>
        </div>
        <div>
          number: <input onChange={addNumber} value={newNumber}/>
        </div>
        <div>{rows()}</div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {<div>
      {filteredPersons.map(person => 
      <div 
        key={person.id}>
        {person.name} / 
        {person.number}
      </div>)}
      </div>}
      <p></p>
    </div>
  );
}


export default App;
