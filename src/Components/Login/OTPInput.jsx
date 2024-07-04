import { useState, useRef } from "react";

const OTPSize = 6;

const OTPInput = ({ otp, setOtp, size = OTPSize }) => {
    const inputRefs = useRef([]);

    // Function to handle input change
    const handleChange = (element, index) => {
        const value = element.value;
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            // Focus on next input field
            if (index < size - 1) {
                inputRefs.current[index + 1].focus();
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
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            {Array(size).fill("").map((_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={otp[index] || ""}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={el => inputRefs.current[index] = el}
                    className="w-9 h-10 bg-[#F5F5F5] border-2 rounded-lg border-[#BBE1EB] text-black text-center"
                />
            ))}
        </div>
    );
};

export default OTPInput;
