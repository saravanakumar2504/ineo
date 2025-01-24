import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export const EligibilityCibilScore = () => {

  const handleOTP = () => {
    // const { FILL_FORM, PROFILE } = route;
    // navigate(`${FILL_FORM}/${PROFILE}`);
  };

  const labels = {
    title: "Eligibility Cibil Score"
  }
  return (
    <>
      <Typography variant="body1" sx={{
        fontWeight: "bold",
        fontSize: "1.5rem",
      }}>
        {labels.title}
      </Typography>
      <Button variant="contained" onClick={handleOTP} disabled>
        Launch Main screen
      </Button>
    </>
  );
};
