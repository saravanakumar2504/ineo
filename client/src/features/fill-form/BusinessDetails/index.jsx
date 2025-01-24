import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { route } from "../../../constants/route";
import { TextField, Box, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export const BusinessDetails = () => {
  const navigate = useNavigate();

  const handleBusinessDetails = () => {
    const { FILL_FORM, ELIGIBILITY_CIBIL_SCORE } = route;
    navigate(`${FILL_FORM}/${ELIGIBILITY_CIBIL_SCORE}`);
  };

  const labels = {
    businessDetails: "Business Details",
    typeof: "Type of Business",
    annualTurnover: "Annual Turnover",
    fyProfit: "Last FY Profit",
    itrFiles: "ITR Files",
    yes: "Yes",
    no: "No",
    save: "Save",
    cibil: "Check cibil"
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="body1" sx={{
          fontWeight: "bold",
          fontSize: "2rem",
        }}>
          Business Details
        </Typography>
        <Box>
          <Typography variant="body1" mb={1}>
            {labels.typeof}
          </Typography>
          <TextField fullWidth variant="outlined" placeholder="Enter type of business" />
        </Box>

        <Box>
          <Typography variant="body1" mb={1}>
            {labels.annualTurnover}
          </Typography>
          <TextField fullWidth variant="outlined" placeholder="Enter annual turnover" />
        </Box>

        <Box>
          <Typography variant="body1" mb={1}>
            {labels.fyProfit}
          </Typography>
          <TextField fullWidth variant="outlined" placeholder="Enter last FY profit" />
        </Box>

        <Box>
          <Typography variant="body1" mb={1}>
            {labels.itrFiles}
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

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
          >
            {labels.save}
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleBusinessDetails}
          >
            {labels.cibil}
          </Button>
        </Box>
      </Box></>
  );
};