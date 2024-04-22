import './Styles/LoginPage.css'
import PhoneInput from './PhoneInput';
import { useState } from 'react';
function LoginPage({ customerPhone, setCustomerPhone }) {
    const errorInit = {
        "error_status": false,
        "error_reason": ""
    }
    const [errorState, setErrorState] = useState(errorInit);
    

    return (
        <div className="relative flex flex-col w-full h-screen px-6 ">
            <div className="container mt-11">
                <div className="flex flex-col -space-y-4">
                    <div className="cardiotrack">
                        <p className='font-bold text-black slide-in-blurred-top'>Cardiotrack</p>
                    </div>
                    <div className="flex justify-center space-x-1 care-medical-test">
                        <div className='care slide-in-blurred-left'>
                            <p className='tracking-tighter text-black'>Care</p>
                        </div>
                        <div className="flex items-center justify-center medical-test slide-in-elliptic-top-fwd">
                            <p className='px-4 tracking-tighter rounded-lg text-navyBlue bg-paleBlue'>Medical Home Visit</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <div className="flex flex-col items-start justify-center mt-8 -space-y-1 welcome_message">

                    <div className="welcome_text">
                        <p className="font-bold tracking-tighter text-black">Welcome !</p>
                    </div>
                    <div className="instruction_text">
                        <p className="tracking-tighter text-left text-black">Please Enter your Mobile number to Login and Verify</p>
                    </div>
                    </div>

                    <div className="phone_input_container">
                        <PhoneInput errorState={errorState} setErrorState={setErrorState} />
                    </div>
                </div>
                <div className="absolute flex items-center justify-center w-full pb-8 text-center bottom-2 -left-1">
                    <div className="w-full starting_button">
                        <button className='w-4/5 starting_button bg-darkGray lg:w-1/4'
                            onClick={(e) => {
                                setLandingState(true)
                            }}>
                            <p className='font-light text-white'>Get OTP</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;