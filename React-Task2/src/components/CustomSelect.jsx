import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';

function CustomSelect({ label, options, value, onChange }) {
  return (
    <div style={{marginTop:"20px"}}>
      <FormControl fullWidth variant="outlined" style={{ marginBottom: '20px', maxWidth:"220px" }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          label={label}
         
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.id}>
              {option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CustomSelect;
