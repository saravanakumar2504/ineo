import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { route } from "../../../constants/route";

export const VerifyAadhar = () => {
  const navigate = useNavigate();

  const handleEmploymentDetails = () => {
    const { FILL_FORM, EMPLOTMENT_DETAILS } = route;
    navigate(`${FILL_FORM}/${EMPLOTMENT_DETAILS}`);
  };
  const handleBusinessDetails = () => {
    const { FILL_FORM, BUSINESS_DETAILS } = route;
    navigate(`${FILL_FORM}/${BUSINESS_DETAILS}`);
  };

  return (
    <>
      Verify Aadhar
      <Button variant="contained" onClick={handleEmploymentDetails}>
        Goto Employment details
      </Button>
      <Button variant="contained" onClick={handleBusinessDetails}>
        Goto Business details
      </Button>
    </>
  );
};
