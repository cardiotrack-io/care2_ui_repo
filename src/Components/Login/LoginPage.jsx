import "./Styles/LoginPage.css";
import PhoneInput from "./PhoneInput";
import OTPInput from "./OTPInput";
import axios from "axios";
import { useEffect, useState } from "react";
import qs from "qs";
import UserApiEndPoints from "../../Constants/UserEndPoints";
import AuthorizationKey from "../../Constants/AuthorizationKey";
function LoginPage({
  customerPhone,
  setCustomerPhone,
  otp,
  setOtp,
  loginState,
  setLoginState,
  setMedicalTestState,
  setLoading
}) {
  const errorInit = {
    error_status: false,
    error_reason: "",
  };
  const [errorState, setErrorState] = useState(errorInit);
  const [phoneStatus, setPhoneStatus] = useState(false);
  const [OTPStatus, setOTPStatus] = useState(false);

  //Function to verify the

  const sendOTP = async (phone) => {
    let data = qs.stringify({
      Contact_Number: phone,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: UserApiEndPoints.send_passcode,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: AuthorizationKey.key,
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(response);
        setPhoneStatus(true);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Please check your internet connection");
        console.error(error);
      });
  };
  const getOtpValidationStatus = async (otp, phone) => {
    let data = qs.stringify({
      Contact_Number: phone,
      Validated_Passcode: otp,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: UserApiEndPoints.validate_passcode,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: AuthorizationKey.key,
      },
      data: data,
    };
    console.log(config);
    await axios
      .request(config)
      .then((response) => {
        const data = response.data;
        if (data.status === 400) {
          // setOtpStatus(false)
          setOtpValidity(false);
          setOtp("");
        }
        if (data.status === 200) {
          setOTPStatus(true);
          console.log(data);
          setLoginState(false);
          setMedicalTestState(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
        console.log("Please check your internet connection");
      });
  };
  const checkIfValidPhone = (phone) => {
    // Check for spaces
    if (/\s/.test(phone)) {
      return {
        error_status: true,
        error_reason: "Phone number should not contain spaces.",
      };
    }
    // Check for presence of any non-digit characters
    if (/[^0-9]/.test(phone)) {
      return {
        error_status: true,
        error_reason: "Phone number should contain only digits (0-9).",
      };
    }
    // Check if the phone number is exactly 10 digits long
    if (phone.length !== 10) {
      return {
        error_status: true,
        error_reason: "Phone number should be exactly 10 digits long.",
      };
    }
    // Check if the phone number starts with a digit between 6 and 9
    if (!/^[6-9]/.test(phone)) {
      return {
        error_status: true,
        error_reason: "Phone number should start with a digit between 6 and 9.",
      };
    }
    // If no errors, return no error status
    return {
      error_status: false,
      error_reason: "",
    };
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorState({
        error_status: false,
        error_reason: "",
      });
    }, 5000);
  }, [errorState]);
  return (
    <div className="relative flex flex-col w-full h-screen px-6 ">
      <div className="container mt-11">
        <div className="flex flex-col -space-y-4 slide-in-left">
          <div className="cardiotrack slide-in-left">
            <p className="font-bold text-black ">
              Cardiotrack
            </p>
          </div>
          <div className="flex justify-center space-x-1 care-medical-test">
            <div className="care ">
              <p className="tracking-tighter text-black">Care</p>
            </div>
            <div className="flex items-center justify-center medical-test ">
              <p className="px-4 tracking-tighter rounded-lg text-navyBlue bg-paleBlue">
                Medical Home Visit
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col items-start justify-start mt-8 -space-y-1 welcome_message">
            <div className="welcome_text">
              <p className="font-bold tracking-tighter text-black">Welcome !</p>
            </div>
            <div className="instruction_text transition-all">
              <p className="tracking-tighter text-left text-black">
                {phoneStatus == false ? (
                  <>Please Enter your Mobile number to Login and Verify</>
                ) : (
                  <>Please enter the OTP sent to your phone.</>
                )}
              </p>
            </div>
          </div>
          <div className="error_container w-full transition-all">
            {errorState.error_status == true && (
              <div className="error transition-opacity">
                <p className=" text-red-500 text-xs text-left ">
                  {errorState.error_reason}
                </p>
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
            <button
              className="w-4/5 starting_button bg-darkGray lg:w-1/4"
              onClick={(e) => {
                if (phoneStatus == false) {
                  let validity = checkIfValidPhone(customerPhone);
                  console.log(validity);
                  setErrorState(validity);
                  if (!validity.error_status) {
                    setLoading(false)
                    sendOTP(customerPhone);
                  }
                } else if (phoneStatus == true && OTPStatus == false) {
                  let joinedOTP = otp.join("");
                  setLoading(false)
                  getOtpValidationStatus(joinedOTP, customerPhone);
                }
              }}
            >
              <p className="font-light text-white">
                {phoneStatus == false ? <>Get OTP</> : <>Verify OTP</>}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
