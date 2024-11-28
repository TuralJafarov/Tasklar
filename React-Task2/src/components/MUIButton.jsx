import React from 'react';
import { Button } from '@mui/material'; 

function MUIButton({ variant, color, children, type,onClick}) {
  return (
    <div style={{marginTop:"10PX"}}>
      <Button variant={variant} color={color} type={type} onClick={onClick}>
      {children}
      </Button>
    </div>
  );
}

export default MUIButton;
