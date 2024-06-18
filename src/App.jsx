import { useState } from "react";
import "./App.css";
import LandingPage from "./Components/Landing/LandingPage";
import LoginPage from "./Components/Login/LoginPage";
import MedicalTests from "./Components/MedicalTests/MedicalTests";
import MedicalTestsPicker from "./Components/MedicalTestsPicker/MedicalTestsPicker";
import Loading from "./Components/Utility/Loading";
import Registration from "./Components/CustomerRegistration/Registration";
//Globally declaring size of OTP
const OTPSize = 6;
function App() {
  //All the variables which i would need are present here.

  //Page States
  const [landingState, setLandingState] = useState(true);
  const [loginState, setLoginState] = useState(true);
  const [medicalTestState, setMedicalTestState] = useState(true);
  const [medicalTestsPickerState, setMedicalTestsPickerState] = useState(true);
  const [registrationState, setRegistrationState] = useState(true);
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
  const [allIndividualTests, setAllIndividualTests] = useState(null);
  const [selectedMedicalTestIndividualList, setSelectedMedicalTestIndividualList] = useState(null)
  const [selectedIndividualList, setSelectedIndividualList] = useState(null)
  const [selectedIndividualListCost, setSelectedIndividualListCost] = useState(null)
  const [selectedMedicalTests, setSelectedMedicalTests] = useState(null);
  const [selectedMedicalTestsPackageCost, setSelectedMedicalTestsPackageCost] = useState(null);
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
          allIndividualTests={allIndividualTests}
          setAllIndividualTests={setAllIndividualTests}
          selectedMedicalTests={selectedMedicalTests}
          setSelectedMedicalTests={setSelectedMedicalTests}
          selectedMedicalTestsPackageCost={selectedMedicalTestsPackageCost}
          setSelectedMedicalTestsPackageCost={setSelectedMedicalTestsPackageCost}
          selectedMedicalTestIndividualList={selectedMedicalTestIndividualList}
          setSelectedMedicalTestIndividualList={setSelectedMedicalTestIndividualList}
          setLoading={setLoading}
          loading={loading}
          setMedicalTestsPickerState={setMedicalTestsPickerState}
          setMedicalTestState={setMedicalTestState}
        />
      )}
      {medicalTestsPickerState == true && (
        <MedicalTestsPicker
          selectedMedicalTests={selectedMedicalTests}
          setSelectedMedicalTests={setSelectedMedicalTests}
          selectedMedicalTestsPackageCost={selectedMedicalTestsPackageCost}
          setSelectedMedicalTestsPackageCost={setSelectedMedicalTestsPackageCost}
          allIndividualTests={allIndividualTests}
          setAllIndividualTests={setAllIndividualTests}
          selectedIndividualList={selectedIndividualList}
          setSelectedIndividualList={setSelectedIndividualList}
          selectedMedicalTestIndividualList={selectedMedicalTestIndividualList}
          setSelectedMedicalTestIndividualList={setSelectedMedicalTestIndividualList}
          selectedIndividualListCost={selectedIndividualListCost}
          setSelectedIndividualListCost={setSelectedIndividualListCost}
          setMedicalTestsPickerState={setMedicalTestsPickerState}
          setRegistrationState={setRegistrationState}
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
