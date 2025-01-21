
import { Otp } from "./Otp";
import { BusinessDetails } from "./BusinessDetails";
import { EligibilityCibilScore } from "./EligibilityCibilScore";
import { EmploymentDetails } from "./EmploymentDetails";
import { Profile } from "./Profile";
import { VerifyAadhar } from "./VerifyAadhar";
import { Login } from "./Login";

import { route } from "../../../constants/route";

export const LeftPanelOverlayContent = ({ pathname }) => {
  const {
    BUSINESS_DETAILS,
    ELIGIBILITY_CIBIL_SCORE,
    EMPLOTMENT_DETAILS,
    FILL_FORM,
    OTP,
    PROFILE,
    VERIFY_AADHAR,
  } = route;
  switch (pathname) {
    case `${FILL_FORM}/${OTP}`:
      return <Otp />;
    case `${FILL_FORM}/${PROFILE}`:
      return <Profile />;
    case `${FILL_FORM}/${VERIFY_AADHAR}`:
      return <VerifyAadhar />;
    case `${FILL_FORM}/${EMPLOTMENT_DETAILS}`:
      return <EmploymentDetails />;
    case `${FILL_FORM}/${BUSINESS_DETAILS}`:
      return <BusinessDetails />;
    case `${FILL_FORM}/${ELIGIBILITY_CIBIL_SCORE}`:
      return <EligibilityCibilScore />;
    default:
      return <Login />;
  }
};
