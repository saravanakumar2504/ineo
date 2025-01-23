import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { Box, Typography, Link } from "@mui/material";

import { route } from "../../../constants/route";
import { OtpTextBoxes } from "../../../components/OtpTextBoxes"

const mobileNumber = "+91 ********67";
const labels = {
  otpVerification: "OTP Verification",
  messageImage: "https://cdn-icons-png.flaticon.com/512/5356/5356190.png",
  messageAlternativeText: "Centered Icon",
  otpText: "Please Enter Your Verification Code Sent To Your Mobile Number ",
  register: "Register",
  verify: "Verify",
  resendOTP: "Resend OTP",
  didntReceiveAnOTP: "Didn't receive an OTP?",
  dontHaveAnAccount: "Don't have an account",
};

export const Otp = () => {
  const navigate = useNavigate();

  const handleOTP = () => {
    const { FILL_FORM, PROFILE } = route;
    navigate(`${FILL_FORM}/${PROFILE}`);
  };

  return (
    <>
      <Box className="flex flex-col">
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
        >
          {labels.otpVerification}
        </Typography>
      </Box>

      <Box className="flex justify-center items-center">
        <img
          src={labels.messageImage}
          alt={labels.messageAlternativeText}
          className="w-[13rem] h-[13rem]"
        />
      </Box>

      <Typography
        variant="h2"
        sx={{
          fontSize: "1.5rem",
          fontWeight: "400",
        }}
        className="px-10"
      >
        {labels.otpText} {mobileNumber}
      </Typography>

      <OtpTextBoxes otpTextBoxLength={6}/>

      <Box className="flex flex-col items-center gap-y-[10px]">
        <Typography
          variant="body1"
          className="text-gray-600"
          sx={{ fontWeight: "100" }}
        >
          {labels.didntReceiveAnOTP}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {labels.resendOTP}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOTP}>
          {labels.verify}
        </Button>
      </Box>

      <Typography variant="body2" className="text-center pt-10">
        {labels.dontHaveAnAccount}{" "}
        <Link
          href="/signup"
          sx={{
            textDecoration: "none",
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          {labels.register}
        </Link>
      </Typography>
    </>
  );
};
