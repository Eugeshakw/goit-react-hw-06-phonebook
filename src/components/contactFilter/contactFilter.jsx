import React from 'react';

import { useDispatch } from 'react-redux';
import { updateFilter } from '../redux/createSlice';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const newFilter = event.target.value;
    dispatch(updateFilter(newFilter)); 
  };
    return (
        <div>
      <input
        type="text"
        placeholder="filter"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        
        id="filter"
        name="filter"
        onChange={handleFilterChange}
        
        required
      />
      <label
        htmlFor="filter"
        
      >
        Filter:
      </label>
    </div>
    )
}

export default ContactFilter;

