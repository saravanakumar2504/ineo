import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { route } from "../../../constants/route";
import { Typography, Box, TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export const EmploymentDetails = () => {
  const navigate = useNavigate();

  const handleOTP = () => {
    const { FILL_FORM, ELIGIBILITY_CIBIL_SCORE } = route;
    navigate(`${FILL_FORM}/${ELIGIBILITY_CIBIL_SCORE}`);
  };

  const labels = {
    employmentDetails: "Employment Details",
    employerName: "Employer Name",
    designation: "Designation",
    grossSalary: "Gross Salary",
    netSalary: "Net Salary",
    bankCredit: "Bank Credit",
    yes: "Yes",
    no: "No",
    save: "Save",
    cibil: "Check cibil",
  };

  return (
    <Box className="p-4 space-y-6 md:space-y-8 w-full max-w-4xl mx-auto">
      <Typography
        variant="h1"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
        }}
        mb={5}
      >
        {labels.employmentDetails}
      </Typography>

      <Box className="space-y-6">
        <Box>
          <Typography variant="body1" className="mb-2">
            {labels.employerName}
          </Typography>
          <TextField fullWidth variant="outlined" />
        </Box>

        <Box>
          <Typography variant="body1" className="mb-2">
            {labels.designation}
          </Typography>
          <TextField fullWidth variant="outlined" />
        </Box>

        <Box className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <Box className="w-full md:w-1/2">
            <Typography variant="body1" className="mb-2">
              {labels.grossSalary}
            </Typography>
            <TextField fullWidth variant="outlined" />
          </Box>
          <Box className="w-full md:w-1/2">
            <Typography variant="body1" className="mb-2">
              {labels.netSalary}
            </Typography>
            <TextField fullWidth variant="outlined" />
          </Box>
        </Box>

        <Box>
          <Typography variant="body1" className="mb-2">
            {labels.bankCredit}
          </Typography>
          <RadioGroup row>
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label={labels.yes}
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label={labels.no}
            />
          </RadioGroup>
        </Box>
      </Box>

      <Box className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 gap-20">
        <Button fullWidth variant="contained" color="primary">
          {labels.save}
        </Button>
        <Button fullWidth variant="contained" color="primary" onClick={handleOTP}>
          {labels.cibil}
        </Button>
      </Box>
    </Box>
  );
};