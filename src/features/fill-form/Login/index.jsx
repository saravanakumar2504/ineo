import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import {route} from '../../../constants/route'

export const Login = () => {
  const navigate = useNavigate();

  const handleOTP = () => {
    const { FILL_FORM, OTP } = route;

    navigate(`${FILL_FORM}/${OTP}`);
  };

  return (
    <>
    Login
      <Button variant="contained" onClick={handleOTP}>
        Go to OTP
      </Button>
    </>
  );
};
