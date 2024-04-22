import { useState } from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'
import LoginPage from './Components/Login/LoginPage';
function App() {
  const [landingState, setLandingState] = useState(false);
  const [loginState , setLoginState] = useState(false)
  const [customerPhone , setCustomerPhone] = useState(null);
  const [employeeStatus , setEmployeeStatus] = useState(false);

  return (
    < div className=''>
      {(landingState == false) && (
        <LandingPage setLandingState={setLandingState} setLoginState={setLoginState} />
      )}
      {(loginState == true) && (
        <LoginPage customerPhone = {customerPhone} setCustomerPhone={setCustomerPhone} />
      )}
    </div>
  )
}

export default App
