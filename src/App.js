import React, {useState, useEffect} from 'react'
import './App.css';
import Person from './components/Person'
import Filter from './components/Filter'

import personService from './services/persons'

const  App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState([])
  const [newNumber, setNewNumber] = useState([])
  const [filter, setNewFilter] = useState([])
    

  // delete person by his ID using axios
  const deletePersonId = (id) => {
    const person = persons.find(p => p.id === id)
    personService
    .delPerson(id)
    .then(response => {
      setPersons(persons.map(person => person.id !==id ? person : response.data))
      console.log(person)
    })
  }

  // effect hook for getting json data
  useEffect(() => {
   
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])


  // if already in phonebook
  if (persons.find(p => p.name === newName )) {
     alert(`${newName} is already in the phonebook.` )
  } 

  // adding new names using json data with axios
  const addName = (e) => {
    e.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    personService
    .create(nameObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
    })
  }

  // maping persons and getting a list of persons
  const rows = () => persons.map(person => 
    <Person 
          key={person.id} 
          person={person}
          number={person.number} 
          deletePerson={() => deletePersonId(person.id)}
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
      p => p.name.indexOf(filter.concat('')) !== -1
    );
  }

  return ( 
    <div>
      <h2>Phonebook</h2>
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{filteredPersons.map(person => <div key={person.id}>{person.id}. {person.name} / {person.number}</div>)}</div>
      <p></p>
    </div>
  );
}


export default App;
