import React from 'react';


const  Person = ({person, deletePerson}) => (
    <div key={person.id}>
        {person.id} {person.name} {person.number}
        <button type="button" onClick={(e) => {
            e.stopPropagation();
            deletePerson(person.id)}
        }> Delete</button>
    </div>
);


export default Person