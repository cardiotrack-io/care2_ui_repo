import './Styles/LoginPage.css'
import PhoneInput from './PhoneInput';
import OTPInput from './OTPInput';
import { useEffect, useState } from 'react';
function LoginPage({ customerPhone, setCustomerPhone, otp, setOtp }) {
    const errorInit = {
        "error_status": false,
        "error_reason": ""
    }
    const checkIfValidPhone = (phone) => {
        // Check for spaces
        if (/\s/.test(phone)) {
            return {
                error_status: true,
                error_reason: "Phone number should not contain spaces."
            };
        }
        // Check for presence of any other characters
        if (/[^0-9]/.test(phone)) {
            return {
                error_status: true,
                error_reason: "Phone number should not contain any special characters or alphabets."
            };
        }
        // Check for non-digit characters
        if (/[^0-9]/.test(phone)) {
            return {
                error_status: true,
                error_reason: "Phone number should contain only digits (0-9)."
            };
        }
        // If no errors, return no error status
        return {
            error_status: false,
            error_reason: ""
        };
    };

    const [errorState, setErrorState] = useState(errorInit);
    const [phoneStatus, setPhoneStatus] = useState(false);
    const [OTPStatus, setOTPStatus] = useState()
    useEffect(() => {
        setTimeout(() => {
            setErrorState({
                "error_status": false,
                "error_reason": ""
            })
        }, 5000)
    }, [errorState])
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
                        <div className="instruction_text transition-all">
                            <p className="tracking-tighter text-left text-black">Please Enter your Mobile number to Login and Verify</p>
                        </div>
                    </div>
                    <div className="error_container w-full transition-all">
                        {errorState.error_status == true && (
                            <div className='error transition-opacity'>
                                <p className=' text-red-500 text-xs text-left '>{errorState.error_reason}</p>
                            </div>
                        )}
                    </div>
                    {phoneStatus == false && (
                        <div className="phone_input_container">
                            <PhoneInput
                                customerPhone={customerPhone}
                                setCustomerPhone={setCustomerPhone}
                                errorState={errorState}
                                setErrorState={setErrorState}
                                phoneStatus={phoneStatus}
                                setPhoneStatus={setPhoneStatus}
                            />
                        </div>
                    )}
                    {phoneStatus == true && (
                        <div className="otp_input_container">
                            <OTPInput
                                otp={otp}
                                setOtp={setOtp}
                                OTPStatus={OTPStatus}
                                setOTPStatus={setOTPStatus}

                            />
                        </div>
                    )}
                </div>
                <div className="absolute flex items-center justify-center w-full pb-8 text-center bottom-2 -left-1">
                    <div className="w-full starting_button">
                        {phoneStatus == false && (

                            <button className='w-4/5 starting_button bg-darkGray lg:w-1/4'
                                onClick={(e) => {
                                    if (phoneStatus == false) {
                                        let validity = checkIfValidPhone(customerPhone)
                                        console.log(validity)
                                        setErrorState(validity)
                                        if (!validity.error_status) {
                                            setPhoneStatus(true)
                                        }
                                    } else if (phoneStatus == true) {
                                    }
                                }}>
                                <p className='font-light text-white'>Get OTP</p>
                            </button>
                        )}
                        {phoneStatus == true && (
                            <button className='w-4/5 starting_button bg-darkGray lg:w-1/4'
                                onClick={(e) => {
                                    if (phoneStatus == false) {
                                        let validity = checkIfValidPhone(customerPhone)
                                        console.log(validity)
                                        setErrorState(validity)
                                        if (!validity.error_status) {
                                            setPhoneStatus(true)
                                        }
                                    } else if (phoneStatus == true) {
                                    }
                                }}>
                                <p className='font-light text-white'>Verify OTP</p>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;