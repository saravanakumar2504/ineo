import { Routes, Route, Outlet } from "react-router-dom";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Login } from "./features/fill-form/Login";
import { Otp } from "./features/fill-form/Otp";
import { Profile } from "./features/fill-form/Profile";
import { VerifyAadhar } from "./features/fill-form/VerifyAadhar";
import { EmploymentDetails } from "./features/fill-form/EmploymentDetails";
import { BusinessDetails } from "./features/fill-form/BusinessDetails";

import { EligibilityCibilScore } from "./features/fill-form/EligibilityCibilScore";

import { route } from "./constants/route";

const Layout = () => {
  return (
    <>
      <main className="App">
        <Outlet />
      </main>
    </>
  );
};

function App() {
  const {
    FILL_FORM,
    OTP,
    PROFILE,
    VERIFY_AADHAR,
    BUSINESS_DETAILS,
    EMPLOTMENT_DETAILS,
    ELIGIBILITY_CIBIL_SCORE,
  } = route;
  return (
    <>
      <Routes>
        <Route path={FILL_FORM} element={<Layout />}>
          <Route index element={<Login />} />
          <Route path={OTP} element={<Otp />}></Route>
          <Route path={PROFILE} element={<Profile />}></Route>
          <Route path={VERIFY_AADHAR} element={<VerifyAadhar />}></Route>
          <Route
            path={EMPLOTMENT_DETAILS}
            element={<EmploymentDetails />}
          ></Route>
          <Route path={BUSINESS_DETAILS} element={<BusinessDetails />}></Route>
          <Route
            path={ELIGIBILITY_CIBIL_SCORE}
            element={<EligibilityCibilScore />}
          ></Route>
        </Route>
      </Routes>
      <Counter />
    </>
  );
}

export default App;
