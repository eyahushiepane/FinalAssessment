import React from 'react';

function SearchFilter({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search books..."
    />
  );
}

export default SearchFilter;


