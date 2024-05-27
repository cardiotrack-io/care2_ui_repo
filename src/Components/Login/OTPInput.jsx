import { useState } from "react";

// Global variable to declare the number of digits in OTP.
const OTPSize = 6;

const OTPInput = ({ otp, setOtp }) => {

    // Function to handle input change
    const handleChange = (element, index) => {
        const value = element.value;
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            // Focus on next input field
            if (element.nextSibling) {
                element.nextSibling.focus();
            }
        } else if (value === "") {
            // Handle backspace or delete
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
        }
    };
    // Function to handle key down events for navigating back on backspace
    const handleKeyDown = (event, index) => {
        if (event.key === "Backspace" && !otp[index] && index !== 0) {
            event.target.previousSibling.focus();
        }
    };
    return (
        <>
            <div style={{ display: "flex", gap: "10px" }}>
                {otp.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={value}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-9 h-10  bg-[#F5F5F5] border-2  rounded-lg border-[#BBE1EB] text-black text-center"
                    />
                ))}
            </div>
        </>
    );
};

export default OTPInput;
