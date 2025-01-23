import { useRef, useEffect } from "react";
import { Box, TextField } from "@mui/material";

export const OtpTextBoxes = ({ otpTextBoxLength = 6 }) => {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < otpTextBoxLength - 1) {
      inputs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    inputs.current[0].focus();
  }, []);

  return (
    <Box className="flex justify-center gap-2 my-[6rem]">
      {Array.from({ length: otpTextBoxLength }).map((_, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputs.current[index] = el)}
          variant="outlined"
          inputProps={{ maxLength: 1 }}
          onChange={(e) => handleChange(e, index)}
          sx={{ width: 50 }}
        />
      ))}
    </Box>
  );
};
