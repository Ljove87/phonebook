import React, {useState, useEffect} from 'react'
import './App.css';
import Person from './components/Person'
import Filter from './components/Filter'
import Notification from './components/Notification'

import personService from './services/persons'

const  App = () => {


  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState([]);
  const [newNumber, setNewNumber] = useState([]);
  const [filter, setNewFilter] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  // update request PUT
  const updatePersonAndNumber = () => {
    const personNewName = persons.find(p => p.name === newName);
    const personNewNumber = persons.find(n => n.number === newNumber);

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
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    personService
    .create(newPerson)
    .then(newPerson => {   
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
      console.log('addedNewName')
      setErrorMsg(`Successefuly added ${newName}`)
      setTimeout(() => {
        setErrorMsg(null)
      }, 5000)
    })
    .catch(error => {
      setErrorMsg(`Person validation failed, name or phonenumber must be minimum 5 characters long`)
      setTimeout(() => {
        setErrorMsg(null)
      }, 5000)
      console.log(error)
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
       p => p.name.toLowerCase().indexOf(filter.concat('')) !== -1
     );
   }

  return ( 
    <div className="container">
      <h2>Phonebook</h2>
      <Notification  message={errorMsg}/>
      
      <div className="pt-3">
        <form onSubmit={addName}>
          <div className="form-add">
            <div className="pb-3">
              <label htmlFor="name">Name</label> 
              <input type="text" onChange={handleAdd} value={newName} placeholder="Enter name..."/>
            </div>
            <div className="pb-3">
              <label htmlFor="number">Number</label>
              <input type="text" onChange={addNumber} value={newNumber} placeholder="Enter number..."/>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary button-font">Add Name</button>
          </div>
          <div className="phonebook-list">{rows()}</div>
         
        </form>
      </div>

        <div className="filter">
          <h2>Numbers</h2>
          <Filter onChange={setNewFilter} value={filter}  />
            {<div>
            {filteredPersons.map(person => 
            <div key={person.id}>
              <div className="row filter-persons">
                <div className="col-md-3">{person.name} </div>
                <div className="col-md-3">{person.number}</div>
              </div>
            </div>)}
          </div>}
        </div>
    </div>
  );
}


export default App;
