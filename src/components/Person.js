import React from 'react';


const  Person = ({person, deletePerson }) => {
    return (
        <div key={person.id}>
            {person.id} {person.name} {person.number}
            <button type="button" onClick={() => {
            deletePerson(person.id)}
        }> Delete</button>
        </div>
    )
}

export default Person