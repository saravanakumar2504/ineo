import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { route } from "../../../constants/route";

export const EmploymentDetails = () => {
  const navigate = useNavigate();

  const handleOTP = () => {
    const { FILL_FORM, ELIGIBILITY_CIBIL_SCORE } = route;
    navigate(`${FILL_FORM}/${ELIGIBILITY_CIBIL_SCORE}`);
  };
  return (
    <>
      EmploymentDetails
      <Button variant="contained" onClick={handleOTP}>
      Go to my cibil score
      </Button>
    </>
  );
};
