import React from "react";
import TextField from "@mui/material/TextField";

function MUTextfield({ label, value, onChange, type }) {
  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", display: "block",marginTop:"20px" }}>
      <TextField label={label} value={value} onChange={onChange} type={type} />
    </div>
  );
}

export default MUTextfield;
