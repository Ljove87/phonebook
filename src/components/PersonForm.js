import React from "react";

const PersonForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onSubmit
}) => {
  const handleNameChange = event => {
    onNameChange(event.target.value);
  };
  const handleNumberChange = event => {
    onNumberChange(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input value={name} onChange={handleNameChange}  />
      </div>
      <div>
        number: <input value={number} onChange={handleNumberChange} placeholder="Enter number..."  />
      </div>
      <div>
        <input type="submit" value="add" />
      </div>
    </form>
  );
};

export default PersonForm;