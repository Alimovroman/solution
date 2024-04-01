import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const CheckBox = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Евро" />
      <FormControlLabel control={<Checkbox />} label="Доллар" />
      <FormControlLabel control={<Checkbox />} label="Юань" />
    </FormGroup>
  );
};
