import { useNavigate } from "react-router-dom";
import { route } from "../../../constants/route";


import Button from "@mui/material/Button";

export const Profile = () => {
   const navigate = useNavigate();
 
   const handleVerifyAAdhar = () => {
     const { FILL_FORM, VERIFY_AADHAR } = route;
     navigate(`${FILL_FORM}/${VERIFY_AADHAR}`);
   };


  return (
    <>
      Profile
      <Button variant="contained" onClick={handleVerifyAAdhar}>
        Go to verify AAdhar
      </Button>
   
    </>
  );
};
