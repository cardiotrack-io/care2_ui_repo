import { useState } from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'
function App() {
  const [landingState, setLandingState] = useState(false);
  return (
    < div className=''>
      {(landingState == false) && (
        <LandingPage setLandingState={setLandingState} />
      )}
    </div>
  )
}

export default App
