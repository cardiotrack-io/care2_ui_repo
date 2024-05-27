import { useState } from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'
import LoginPage from './Components/Login/LoginPage';
//Globally declaring size of OTP
const OTPSize = 6;
function App() {
  const [landingState, setLandingState] = useState(false);
  const [loginState, setLoginState] = useState(false)
  const [customerPhone, setCustomerPhone] = useState(null);
  const [employeeStatus, setEmployeeStatus] = useState(false);
  const [otp, setOtp] = useState(new Array(OTPSize).fill(""));
  return (
    < div className=''>
      {(landingState == false) && (
        <LandingPage setLandingState={setLandingState} setLoginState={setLoginState} />
      )}
      {(loginState == true) && (
        <LoginPage customerPhone={customerPhone} setCustomerPhone={setCustomerPhone} otp={otp} setOtp={setOtp} />
      )}
    </div>
  )
}

export default App
