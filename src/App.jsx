import { useState } from "react";
import "./App.css";
import LandingPage from "./Components/Landing/LandingPage";
import LoginPage from "./Components/Login/LoginPage";
import MedicalTests from "./Components/MedicalTests/MedicalTests";
import Loading from "./Components/Utility/Loading";
import Registration from "./Components/CustomerRegistration/Registration";
//Globally declaring size of OTP
const OTPSize = 6;
function App() {
  //All the variables which i would need are present here.

  //Page States
  const [landingState, setLandingState] = useState(true);
  const [loginState, setLoginState] = useState(false);
  const [medicalTestState, setMedicalTestState] = useState(true);
  const [registrationState, setRegistrationState] = useState(false);
  //Customer Details
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [customerPhone, setCustomerPhone] = useState(null);
  const [employeeStatus, setEmployeeStatus] = useState(false);
  //Appointment Details
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  //Medical Details
  const [allMedicalTests, setAllMedicalTests] = useState(null);
  const [selectedMedicalTests, setSelectedMedicalTests] = useState(null);
  const [otp, setOtp] = useState(new Array(OTPSize).fill(""));
  const [loading, setLoading] = useState(false);
  return (
    <div className="">
      {loading == true && (
        <div className="loading_container absolute bg-slate-900 ">
          <Loading />
        </div>
      )}
      {landingState == false && (
        <LandingPage
          setLandingState={setLandingState}
          setLoginState={setLoginState}
        />
      )}
      {loginState == true && (
        <LoginPage
          customerPhone={customerPhone}
          setCustomerPhone={setCustomerPhone}
          otp={otp}
          setOtp={setOtp}
          loginState={loginState}
          setLoginState={setLoginState}
          setMedicalTestState={setMedicalTestState}
          setLoading={setLoading}
        />
      )}
      {medicalTestState == true && (
        <MedicalTests
          allMedicalTests={allMedicalTests}
          setAllMedicalTests={setAllMedicalTests}
          selectedMedicalTests={selectedMedicalTests}
          setSelectedMedicalTests={setSelectedMedicalTests}
          setLoading={setLoading}
          loading={loading}
          setRegistrationState={setRegistrationState}
          setMedicalTestState={setMedicalTestState}
        />
      )}
      {registrationState == true && (
        <Registration
          customerName={customerName}
          setCustomerName={setCustomerName}
          customerAddress={customerAddress}
          setCustomerAddress={setCustomerAddress}
          appointmentDate={appointmentDate}
          setAppointmentDate={setAppointmentDate}
          appointmentTime={appointmentTime}
          setAppointmentTime={setAppointmentTime}
        />
      )}
    </div>
  );
}

export default App;
