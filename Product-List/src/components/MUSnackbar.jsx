import React from "react";
import { Snackbar, Alert } from "@mui/material";

const MUSnackbar = ({ open,message, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      message={message}
  
     />
  )
};

export default MUSnackbar;
