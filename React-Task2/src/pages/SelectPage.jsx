import React, { useState } from 'react';
import CustomSelect from './../components/CustomSelect'; // CustomSelect komponentini import edirik.
import { Typography } from '@mui/material';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);  
  };

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', paddingTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Custom Material UI Select Example
      </Typography>

      <CustomSelect
        label="Select an Option"
        options={options}
        value={selectedOption}
        onChange={handleChange} 
      />

      <Typography variant="h6">
        Selected Option: {selectedOption || 'None'} 
      </Typography>
    </div>
  );
}

export default App;
