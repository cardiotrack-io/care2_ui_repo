import "./Styles/PhoneInput.css"
function PhoneInput({ errorState, setErrorState, customerPhone, setCustomerPhone }) {
    const handlePhoneInput = (phone_input) => {
        if (phone_input === "") {
            setCustomerPhone("");
            setErrorState({
                error_status: false,
                error_reason: ""
            });
            return;
        }
        // Regular expression to check if input contains only digits
        const isNumeric = /^\d+$/.test(phone_input);
    
        if (isNumeric) {
            setCustomerPhone(phone_input);
            setErrorState({
                error_status: false,
                error_reason: ""
            });
        } else {
            setErrorState({
                error_status: true,
                error_reason: "Please enter a numeric value!"
            });
        }
    };
    return (
        <>
            <div className="flex flex-row items-start justify-center mt-4 input_container">
                <div className="flex items-center justify-center h-8 py-2 pl-1 pr-2 border-2 rounded-md prefix border-paleBlue bg-inputWhite">
                    <p className="font-bold text-black" >+91</p>
                </div>
                <div className="phone_input">
                    <input type="tel" name="customer_phone" className="w-11/12 h-8 px-2 font-medium text-black border-2 rounded-md bg-inputWhite focus:ring-paleBlue border-paleBlue" value={customerPhone} onChange={(e) => {
                        handlePhoneInput(e.target.value)
                    }} />
                </div>
            </div>
        </>
    )
}

export default PhoneInput;


