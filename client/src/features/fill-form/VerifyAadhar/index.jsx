import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import { route } from "../../../constants/route";
import { OtpTextBoxes } from "../../../components/OtpTextBoxes";
import { useSelector } from "react-redux";
import Lock from "../../../Images/Lock.png";

export const VerifyAadhar = () => {
  const navigate = useNavigate();
  const profession = useSelector((state) => state.profession.professionType);

  const handleEmploymentDetails = () => {
    const { FILL_FORM, EMPLOTMENT_DETAILS } = route;
    navigate(`${FILL_FORM}/${EMPLOTMENT_DETAILS}`);
  };
  const handleBusinessDetails = () => {
    const { FILL_FORM, BUSINESS_DETAILS } = route;
    navigate(`${FILL_FORM}/${BUSINESS_DETAILS}`);
  };

  const labels = {
    verification: "Aadhar Verification",
    otpText: "Please Enter Your Verification Code Sent to Registered Mobile Number",
    mobileNumber: " +91 ********67",
    verify: "Verify",
    resendOTP: "Resend Aadhar OTP",
    didntReceiveAnOTP: "Didn't receive an OTP?",
  };

  return (
    <>
      <Typography
        variant="h7"
        className="text-2xl text-center mb-1"
        sx={{ fontWeight: "bold" }}
      >
        {labels.verification}{profession}
      </Typography>
      <Box className="flex flex-col items-center justify-center space-y-6">
        <Box className="flex justify-center">
          <Box
            component="img"
            src={Lock}
            alt="Lock"
            className="h-[150px] w-auto my-4"
          />
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
          className="text-lg font-normal text-center px-10"
        >
          {labels.otpText}
        </Typography>

        <Typography variant="h1"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
          className="text-lg font-normal text-center px-10">{labels.mobileNumber}</Typography>

        <OtpTextBoxes otpTextBoxLength={6} />

        <div className="space-y-2">
          <Typography align="center" mb={1} className="text-sm">
            {labels.didntReceiveAnOTP}
          </Typography>
          <Typography align="center" className="text-sm font-medium text-blue-500 cursor-pointer">
            {labels.resendOTP}
          </Typography>
        </div>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="mt-3 max-w-md w-full"
        >
          {labels.verify}
        </Button>
      </Box>
    </>
  );
};
