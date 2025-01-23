import { Typography, Box } from "@mui/material";

export const Login = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "20px" }}>
      <Typography variant="h5" color="white">
        Welcome To iNeo Bank
      </Typography>
      <Typography style={{ fontSize: "12px",marginBottom:"10px", color: "#ffffff" }}>© iNeo Bank | All rights reserved</Typography>
    </Box>
  );  
};
