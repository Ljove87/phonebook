import React from "react";

const Filter = ({ value, onChange }) => {
  const handleFilterChange = event => {
    onChange(event.target.value);
  };
  return (
    <div className="filter-input">
      <label htmlFor="filter">Filter shown with:</label>
       <input type="text" value={value} onChange={handleFilterChange} placeholder="Enter any name to check if it exist" />
    </div>
  );
};

export default Filter;