import React, {useState} from 'react'
import './App.css';
import Person from './components/Person'
import Filter from './components/Filter'

const  App = () => {

  const [persons, setPersons] = useState([
    
     { id: 1, name:'Veljko Kukic', number: '313-555'},
     {id: 2, name:'Ivana Stankovic', number: '313-222'},
     { id: 3, name:'Milica Aleksic', number: '3451-123'}
    
    
  ])
  const [newName, setNewName] = useState([])
  const [newNumber, setNewNumber] = useState([])
  const [filter, setNewFilter] = useState([
    
    { id: 1, name:'Veljko Kukic', number: '313-555'},
    {id: 2, name:'Ivana Stankovic', number: '313-222'},
    { id: 3, name:'Milica Aleksic', number: '3451-123'}
   
   
 ])
  if (persons.find(p => p.name === newName )) {
     alert(`${newName} is already in the phonebook.` )
  } 


  const addName = (e) => {
    e.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const rows = () => persons.map(person => 
    <Person key={person.id} person={person} number={person.number} />
  )

  const handleAdd = (event) => {
    setNewName(event.target.value)
  }

  const addNumber = (event) => {
    setNewNumber(event.target.value)
  }

  let filteredPersons = persons;
  if (filter) {
    filteredPersons = persons.filter(
      p => p.name.toLowerCase().indexOf(filter.concat('')) !== -1
    );
  }

  console.log(filteredPersons)

 
  return ( 
    <div>s
      <h2>Phonebook</h2>
      <Filter onChange={setNewFilter} value={filter} />
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
      <p></p>
    </div>
  );
}


export default App;
