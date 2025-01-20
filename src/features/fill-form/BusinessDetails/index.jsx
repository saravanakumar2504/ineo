import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { route } from "../../../constants/route";

export const BusinessDetails = () => {
  const navigate = useNavigate();

  const handleBusinessDetails = () => {
    const { FILL_FORM, ELIGIBILITY_CIBIL_SCORE } = route;
    navigate(`${FILL_FORM}/${ELIGIBILITY_CIBIL_SCORE}`);
  };
  return (
    <>
      BusinessDetails
      <Button variant="contained" onClick={handleBusinessDetails}>
        Go to my cibil score
      </Button>
    </>
  );
};
