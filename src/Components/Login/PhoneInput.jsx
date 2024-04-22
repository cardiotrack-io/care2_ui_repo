import "./Styles/PhoneInput.css"
function PhoneInput({errorState , setErrorState}) {
    function handlePhoneInput(phone_input) {
        if (phone_input.toString().split("").pop().toUpperCase() == phone_input.toString().split("").pop().toLowerCase()) {
            setCustomerPhone(phone_input);
        } else {
            setErrorState({
                "error_status": true,
                "error_reason": "Please Enter Numeric Value !"
            })
        }
    }
    return (
        <>
            <div className="flex flex-row items-start justify-center mt-4 space-x-2 input_container">
                <div className="flex items-center justify-center h-8 py-2 pl-1 pr-2 border-2 rounded-md prefix border-paleBlue bg-inputWhite">
                    <p className="font-bold text-black" >+91</p>
                </div>
                <div className="phone_input">
                    <input type="tel" name="customer_phone" className="h-8 text-black bg-transparent border-2 border-black rounded-md bg-inputWhite focus:ring-transparent border-paleBlue" />
                </div>
            </div>
        </>
    )
}

export default PhoneInput;