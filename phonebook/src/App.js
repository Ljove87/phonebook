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

  // update request PUT
  
 

  // delete person by his ID using axios
    const deletePersonId = (id) => {
      personService
      .delPerson(id)
      .then(response => {
        setPersons(persons.filter(p => p.id !== id))
        console.log(response)
      })
      .catch(error => {
      console.log(error.response)
      }) 
    }



  // effect hook for getting json data
  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
    .catch(error => {
      console.log(error.response)
    })
  
  }, [])

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
      setNewNumber('')
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
  // let filteredPersons = persons;
  // if (filter) {
  //   filteredPersons = persons.filter(
  //     p => p.name.toLocaleLowerCase().indexOf(filter.concat('')) !== -1
  //   );
  // }

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
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* { <div>{filteredPersons.map(person => <div key={person.id}>
                                              {person.id}. 
                                              {person.name} / 
                                              {person.number}
                                          </div>)} */}
      {/* </div> }   */}
      <p></p>
    </div>
  );
}


export default App;
