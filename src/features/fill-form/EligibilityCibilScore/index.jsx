import Button from "@mui/material/Button";

export const EligibilityCibilScore = () => {

  const handleOTP = () => {
   // const { FILL_FORM, PROFILE } = route;
    // navigate(`${FILL_FORM}/${PROFILE}`);
  };
  return (
    <>
      OTP
      <Button variant="contained" onClick={handleOTP} disabled>
        Launch Main screen
      </Button>
    </>
  );
};
