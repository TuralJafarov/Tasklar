import { Checkbox } from "@mui/material";

const MUICheckbox = ({ checked, onChange }) => {
  return <Checkbox checked={checked} onChange={onChange} />;
};

export default MUICheckbox;
