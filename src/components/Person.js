import React from 'react';


const  Person = ({person, id, number, deletePerson }) => {
    return (
        <div key={person.id}>
            {person.id} {person.name} {person.number}
            <button onClick={deletePerson}>Delete</button>
        </div>
    )
}

export default Person