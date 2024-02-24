import React, { useState } from 'react';

const Dropdown = ({setEntryfor}) => {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Event handler for option selection
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setEntryfor(event.target.value)
  };

  return (
    <div className='flex justify-center'>
      <label htmlFor="dropdown">Select your diary:</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="Shooy">Shooy</option>
        <option value="Helio">Helio</option>
      </select>

      {/* Display the selected option */}
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default Dropdown;
