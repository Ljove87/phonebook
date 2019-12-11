import React from 'react';


const Person = ({person, deletePerson }) => {
    return (
        <div>
            {person.id}...{person.name} --- {person.number}
            <button type="button" onClick={() => {
            deletePerson(person.id)}
        }> DELETE</button>
        </div>
    )
}

export default Person