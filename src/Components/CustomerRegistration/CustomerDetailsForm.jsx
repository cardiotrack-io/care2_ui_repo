import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerDetailsForm = ({
  customerName,
  setCustomerName,
  customerAddress,
  setCustomerAddress,
  onValidationChange,
}) => {
  const [addressLine1, setAddressLine1] = useState(customerAddress.addressLine1 || "");
  const [state, setState] = useState(customerAddress.state || "");
  const [district, setDistrict] = useState(customerAddress.district || "");
  const [pincode, setPincode] = useState(customerAddress.pincode || "");
  const [gender, setCustomerGender] = useState(customerAddress.gender || "");
  const [error, setError] = useState("");

  useEffect(() => {
    validateForm();
  }, [customerName, gender, addressLine1, state, district, pincode]);

  const validateForm = () => {
    if (!customerName || !gender || !addressLine1 || !state || !district || !pincode) {
      setError("All fields are required");
      onValidationChange(false);
      return false;
    }
    if (pincode.length !== 6) {
      setError("Pincode must be exactly 6 digits long");
      onValidationChange(false);
      return false;
    }
    setError("");
    onValidationChange(true);
    return true;
  };

  const handleNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleAddressChange = () => {
    setCustomerAddress({
      addressLine1,
      district,
      state,
      pincode,
      gender,
    });
  };

  const validatePincode = async (e) => {
    const value = e.target.value.slice(0, 6);
    setPincode(value);

    if (value.length === 6) {
      try {
        const response = await axios.get(`https://api.dev.cardiotrack.link/clientuibackendsvc/care/location/${value}`);
        const { State, District } = response.data;
        console.log(response)
        if(response.status==200) {
          if(response.data.status==400) {
            setError("Invalid Pincode");
            setState("");
            setDistrict("");
          }
          else {
          console.log(State,District)
          setState(State);
          setDistrict(District);
          setError("");
          handleAddressChange(); // Update address after setting state and district
          }
        }
        else {
          setError("Pincode not Servicable, Please try some other location");
        }
      } catch (error) {
        setError("Invalid pincode or unable to fetch location details");
      }
    }
  };

  return (
    <div className="form_container flex flex-col items-start py-4 px-2 rounded-md bg-darkBlue bg-opacity-20 space-y-4">
      <div className="name_container w-full">
        <label htmlFor="customer_name" className="block text-darkBlue text-xs text-left font-semibold mb-2">
          Enter your full name<span className="text-red-500"> *</span>
        </label>
        <input
          type="text"
          id="customer_name"
          placeholder="Enter your name"
          className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
          value={customerName}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="gender" className="block text-darkBlue text-xs text-left font-semibold mb-2">
          Gender<span className="text-red-500"> *</span>
        </label>
        <select
          id="gender"
          className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
          value={gender}
          onChange={(e) => setCustomerGender(e.target.value)}
          onBlur={handleAddressChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="address_container w-full flex flex-col space-y-4">
        <div className="w-full">
          <label htmlFor="pincode" className="block text-darkBlue text-xs text-left font-semibold mb-2">
            Pincode<span className="text-red-500"> *</span>
          </label>
          <input
            type="number"
            id="pincode"
            placeholder="Enter your pincode"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
            value={pincode || ""}
            onInput={validatePincode}
            required
          />
          <small className="text-xs text-darkBlue">Enter the pincode to autofill city and state.</small>
        </div>
        <div className="w-full">
          <label htmlFor="state" className="block text-darkBlue text-xs text-left font-semibold mb-2">
            State<span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            id="state"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
            value={state || ""}
            disabled
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="district" className="block text-darkBlue text-xs text-left font-semibold mb-2">
            City <span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            id="district"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
            value={district || ""}
            disabled
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="address_line_1" className="block text-darkBlue text-xs text-left font-semibold mb-2">
            Address<span className="text-red-500"> *</span>
          </label>
          <textarea
            id="address_line_1"
            placeholder="Enter your Address"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            onBlur={handleAddressChange}
            required
          />
        </div>
      </div>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default CustomerDetailsForm;
