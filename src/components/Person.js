import React from 'react';


const Person = ({person, deletePerson }) => {
    return (
        <div className="mb-2">
            <div className="row border-list">  
                <div className="col-md-10 persons">
                 {person.name}  {person.number}
                </div>

                <div className="col-md-2">
                <button type="button" className="btn btn-danger button-font" onClick={() => {
                deletePerson(person.id)}}>Delete</button>
                
                </div>

            </div>
         
          
        </div>
    )
}

export default Person