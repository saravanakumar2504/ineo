import { useNavigate } from "react-router-dom";
import { route } from "../../../constants/route";
import {
  Box,
  Typography,
  InputAdornment,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2"; // Grid2 for advanced grid layout
import { useSelector, useDispatch } from "react-redux";
import { handleProfession } from "./professionSlice";

export const Profile = () => {
  const navigate = useNavigate();
  const profession = useSelector((state) => state.profession.professionType);
  
  const dispatch = useDispatch();

  // Navigate to Verify Aadhaar page
  const handleVerifyAAdhar = () => {
    const { FILL_FORM, VERIFY_AADHAR } = route;
    navigate(`${FILL_FORM}/${VERIFY_AADHAR}`);
  };

  // Navigate to the next step based on the profession
  const handleNext = () => {
    const { FILL_FORM,EMPLOYMENT_DETAILS, BUSINESS_DETAILS } = route;

    if (profession === "employed") {
      navigate(`${FILL_FORM}/${EMPLOYMENT_DETAILS}`);
    } else if (profession === "business") {
      navigate(`${FILL_FORM}/${BUSINESS_DETAILS}`);
    } else {
      alert("Please select a profession to proceed.");
    }
  };

  // Handle profession change
  const handleProfessionChange = (event) => {
    console.log(event.target.value);
    dispatch(handleProfession(event.target.value));
  };

  // Form labels
  const labels = {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    DOB: "DOB",
    pan: "PAN",
    address: "Address",
    town: "Town",
    pincode: "PinCode",
    aadhar: "Aadhar",
    profession: "Profession",
    employed: "Employed",
    business: "Business",
    selfEmployed: "Self Employed",
  };

  return (
    <Box>
      <Typography
        variant="h6"
        className="text-2xl font-bold mb-4"
      >
        My Profile!
      </Typography>

      <Grid2 className="w-full p-4" sx={{ width: "100%" }}>
        <Grid2 className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Grid2>
            <Typography variant="body1" className="mb-2">
              {labels.firstName}
            </Typography>
            <TextField fullWidth variant="outlined" />
          </Grid2>

          <Grid2>
            <Typography variant="body1" className="mb-2">
              {labels.lastName}
            </Typography>
            <TextField fullWidth variant="outlined" />
          </Grid2>

          <Grid2 className="col-span-1 md:col-span-2">
            <Typography variant="body1" className="mb-2">
              {labels.email}
            </Typography>
            <TextField fullWidth variant="outlined" />
          </Grid2>

          <Grid2>
            <Typography variant="body1" className="mb-2">
              {labels.DOB}
            </Typography>
            <TextField fullWidth variant="outlined" />
          </Grid2>

          <Grid2>
            <Typography variant="body1" className="mb-2">
              {labels.pan}
            </Typography>
            <TextField fullWidth variant="outlined" />
          </Grid2>

          <Grid2 className="col-span-1 md:col-span-2">
            <Typography variant="body1" className="mb-2">
              {labels.address}
            </Typography>
            <TextField fullWidth variant="outlined" />
          </Grid2>

          <Grid2>
            <Typography variant="body1" className="mb-2">
              {labels.town}
            </Typography>
            <TextField fullWidth variant="outlined" />
          </Grid2>

          <Grid2>
            <Typography variant="body1" className="mb-2">
              {labels.pincode}
            </Typography>
            <TextField fullWidth variant="outlined" />
          </Grid2>

          <Grid2 className="col-span-1 md:col-span-2">
            <Typography variant="body1" className="mb-2">
              {labels.aadhar}
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography
                      variant="button"
                      color="primary"
                      style={{
                        cursor: "pointer",
                        color: "#302c64",
                        fontWeight: "bold",
                      }}
                      onClick={handleVerifyAAdhar}
                    >
                      Verify
                    </Typography>
                  </InputAdornment>
                ),
              }}
            />
          </Grid2>

          <Grid2 className="col-span-1 md:col-span-2">
            <Typography variant="body1" className="mb-2">
              {labels.profession}
            </Typography>
            <RadioGroup onChange={handleProfessionChange} row>
              <FormControlLabel
                value="employed"
                control={<Radio />}
                label={labels.employed}
              />
              <FormControlLabel
                value="business"
                control={<Radio />}
                label={`${labels.business} / ${labels.selfEmployed}`}
              />
            </RadioGroup>
          </Grid2>

          <Grid2
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Button sx={{ width: "50%" }} variant="contained" color="primary">
              Save
            </Button>
            <Button
              onClick={handleNext}
              sx={{ width: "50%" }}
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};
