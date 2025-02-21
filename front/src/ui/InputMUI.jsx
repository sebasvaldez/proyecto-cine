import { TextField } from "@mui/material";
import { forwardRef } from "react";

export const InputMUI = forwardRef(
  ({ label, type, name,  ...props }, ref) => {
    return (
      <TextField
        label={label}
        type={type}
        name={name}
       
        inputRef={ref}
        {...props}
        variant="outlined"
        margin="normal"
        fullWidth
      />
    );
  }
);
