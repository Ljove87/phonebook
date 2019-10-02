import React from 'react';


const  Person = ({person, id, number }) => {
    return (
        <div>
            {person.id} {person.name} / {person.number}
        </div>
    )
}

export default Person