import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { Box, TextField, Link, Typography } from "@mui/material";

import { route } from "../../../constants/route";

const labels = {
  login: "Login",
  mobileNumber: "Mobile Number",
  termsAndConditions: "Terms & Conditions.",
  getOTP: "Get OTP",
  enterYourMobileNumberPlaceholder: "Enter your mobile number",
  dontHaveAnAccount: "Don't have an account?",
  signup: "Signup",
};

export const Login = () => {
  const navigate = useNavigate();

  const handleOTP = () => {
    const { FILL_FORM, OTP } = route;
    navigate(`${FILL_FORM}/${OTP}`);
  };

  return (
    <Box className="flex flex-col h-full  mt-10">
      <Typography
        variant="h1"
        sx={{
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        {labels.login}
      </Typography>

      {/* Mobile Number Input */}
      <Box className="mt-30">
        <Typography variant="body1" className="text-[1rem]  pb-[0.5rem]">
          {labels.mobileNumber}
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder={labels.enterYourMobileNumberPlaceholder}
          className="m-3"
        />
      </Box>

      {/* Terms and Condition with Get OTP Button */}
      <Box className="flex flex-col mt-20">
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.9rem",
            flexGrow: 1,
          }}
          className="pb-[0.5rem] text-center"
        >
          {labels.termsAndConditions}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOTP}>
          {labels.getOTP}
        </Button>
      </Box>

      {/* Signup Link */}
      <Typography variant="body2" className="text-center pt-5">
        {labels.dontHaveAnAccount}{" "}
        <Link
          href="/signup"
          sx={{
            textDecoration: "none",
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          {labels.signup}
        </Link>
      </Typography>
    </Box>
  );
};
