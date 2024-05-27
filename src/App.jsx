import { useState } from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'
import LoginPage from './Components/Login/LoginPage';
import MedicalTests from './Components/MedicalTests/MedicalTests';
//Globally declaring size of OTP
const OTPSize = 6;
function App() {
  const [landingState, setLandingState] = useState(false);
  const [loginState, setLoginState] = useState(false)
  const [medicalTestState, setMedicalTestState] = useState(false)
  const [customerPhone, setCustomerPhone] = useState(null);
  const [allMedicalTests, setAllMedicalTests] = useState(null);
  const [selectedMedicalTests, setSelectedMedicalTests] = useState(null)
  const [employeeStatus, setEmployeeStatus] = useState(false);
  const [otp, setOtp] = useState(new Array(OTPSize).fill(""));
  return (
    < div className=''>
      {(landingState == false) && (
        <LandingPage
          setLandingState={setLandingState}
          setLoginState={setLoginState}
        />
      )}
      {(loginState == true) && (
        <LoginPage
          customerPhone={customerPhone}
          setCustomerPhone={setCustomerPhone}
          otp={otp}
          setOtp={setOtp}
          loginState={loginState}
          setLoginState={setLoginState}
          setMedicalTestState = {setMedicalTestState}
        />
      )}
      {(medicalTestState == true) && (
        <MedicalTests
          allMedicalTests={allMedicalTests}
          setAllMedicalTests={setAllMedicalTests}
          selectedMedicalTests={selectedMedicalTests}
          setSelectedMedicalTests={setSelectedMedicalTests}
        />
      )}
    </div>
  )
}

export default App
