import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { route } from "../../../constants/route";

export const Otp = () => {
  const navigate = useNavigate();

  const handleOTP = () => {
    const { FILL_FORM, PROFILE } = route;
    navigate(`${FILL_FORM}/${PROFILE}`);
  };
  return (
    <>
      OTP
      <Button variant="contained" onClick={handleOTP}>
        Go to my profile
      </Button>
    </>
  );
};
