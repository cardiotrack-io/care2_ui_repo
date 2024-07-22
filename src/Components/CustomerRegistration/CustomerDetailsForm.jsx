import React, { useState, useEffect } from "react";

const statesWithDistricts = {
  "Andhra Pradesh": [
    "Guntur",
    "Kurnool",
    "Nellore",
    "Visakhapatnam",
    "Vijayawada",
  ],
  "Arunachal Pradesh": ["Itanagar"],
  Assam: ["Guwahati"],
  Bihar: ["Patna"],
  Chhattisgarh: ["Raipur"],
  Goa: ["Margao", "Panaji"],
  Gujarat: ["Ahmedabad", "Bhavnagar", "Rajkot", "Surat", "Vadodara"],
  Haryana: ["Faridabad", "Gurugram"],
  "Himachal Pradesh": ["Shimla"],
  Jharkhand: ["Dhanbad", "Jamshedpur", "Ranchi"],
  Karnataka: ["Bengaluru", "Belgaum", "Hubli", "Mangalore", "Mysore"],
  Kerala: ["Kochi", "Kozhikode", "Thiruvananthapuram"],
  "Madhya Pradesh": ["Bhopal", "Gwalior", "Indore", "Jabalpur", "Ujjain"],
  Maharashtra: ["Nagpur", "Nashik", "Mumbai", "Pune", "Thane"],
  Manipur: ["Imphal"],
  Meghalaya: ["Shillong"],
  Mizoram: ["Aizawl"],
  Nagaland: ["Kohima"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
  Punjab: ["Amritsar", "Chandigarh", "Jalandhar", "Ludhiana"],
  Rajasthan: ["Ajmer", "Bikaner", "Jaipur", "Jodhpur", "Kota"],
  Sikkim: ["Gangtok"],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Salem",
    "Tiruchirappalli",
  ],
  Telangana: ["Hyderabad", "Khammam", "Karimnagar", "Nizamabad", "Warangal"],
  Tripura: ["Agartala"],
  "Uttar Pradesh": ["Agra", "Ghaziabad", "Kanpur", "Lucknow", "Varanasi"],
  Uttarakhand: ["Dehradun"],
  "West Bengal": ["Asansol", "Durgapur", "Howrah", "Kolkata", "Siliguri"],
  Delhi: [
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West Delhi",
    "West Delhi",
  ],
};

const CustomerDetailsForm = ({
  customerName,
  setCustomerName,
  customerAddress,
  setCustomerAddress,
  onValidationChange,
}) => {
  const [addressLine1, setAddressLine1] = useState(
    customerAddress.addressLine1 || ""
  );
  const [addressLine2, setAddressLine2] = useState(
    customerAddress.addressLine2 || ""
  );
  const [city, setCity] = useState(customerAddress.city || "");
  const [state, setState] = useState(customerAddress.state || "");
  const [district, setDistrict] = useState(customerAddress.district || "");
  const [pincode, setPincode] = useState(customerAddress.pincode || "");
  const [email, setEmail] = useState(customerAddress.email || "");
  const [alternateNumber, setAlternateNumber] = useState(
    customerAddress.alternateNumber || ""
  );
  const [districts, setDistricts] = useState([]);
  const [gender, setCustomerGender] = useState(customerAddress.gender || "");
  const [error, setError] = useState("");

  useEffect(() => {
    if (state) {
      setDistricts(statesWithDistricts[state] || []);
    } else {
      setDistricts([]);
    }
  }, [state]);

  useEffect(() => {
    validateForm();
  }, [
    customerName,
    gender,
    addressLine1,
    city,
    state,
    district,
    pincode,
    email,
    alternateNumber
  ]);

  const validateForm = () => {
    if (
      !customerName ||
      !gender ||
      !addressLine1 ||
      !city ||
      !state ||
      !district ||
      !pincode
    ) {
      setError("All fields are required");
      onValidationChange(false);
      return false;
    }
    if (pincode.length !== 6) {
      setError("Pincode must be exactly 6 digits long");
      onValidationChange(false);
      return false;
    }
    // if (!validateAlternateNumber(alternateNumber)) {
    //   setError("Alternate number must be 10 digits long and start with 6-9");
    //   onValidationChange(false);
    //   return false;
    // }
    setError("");
    onValidationChange(true);
    return true;
  };


  // const validateAlternateNumber = (number) => {
  //   const regex = /^[6-9]\d{9}$/;
  //   console.log(regex,regex.test(number))
  //   return regex.test(number);
  // };

  const handleNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleAddressChange = () => {
    setCustomerAddress({
      addressLine1,
      addressLine2,
      city,
      district,
      state,
      pincode,
      gender,
      email,
      alternateNumber,
    });
  };

  const validatePincode = (e) => {
    const value = e.target.value;
    if (value.length <= 6) {
      setPincode(value);
      setError("");
    }
  };

  return (
    <div className="form_container flex flex-col items-start py-4 px-2 rounded-md bg-darkBlue bg-opacity-20 space-y-4">
      <div className="name_container w-full">
        <label
          htmlFor="customer_name"
          className="block text-darkBlue text-xs text-left font-semibold mb-2"
        >
          Enter your full name
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
        <label
          htmlFor="gender"
          className="block text-darkBlue text-xs text-left font-semibold mb-2"
        >
          Gender
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
      <div className="w-full">
        <label
          htmlFor="email"
          className="block text-darkBlue text-xs text-left font-semibold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleAddressChange}
          required
        />
      </div>
      {/* <div className="w-full">
        <label
          htmlFor="alternate_number"
          className="block text-darkBlue text-xs text-left font-semibold mb-2"
        >
          Alternate Number
        </label>
        <input
          type="tel"
          id="alternate_number"
          placeholder="Enter alternate number"
          maxLength="10"
          className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
          value={alternateNumber}
          onChange={(e) => setAlternateNumber(e.target.value)}
          onInput={validateAlternateNumber}
        />
      </div> */}
      <div className="address_container w-full flex flex-col space-y-4">
        <div className="w-full">
          <label
            htmlFor="state"
            className="block text-darkBlue text-xs text-left font-semibold mb-2"
          >
            State
          </label>
          <select
            id="state"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
            value={state}
            onChange={(e) => setState(e.target.value)}
            onBlur={handleAddressChange}
            required
          >
            <option value="">Select State</option>
            {Object.keys(statesWithDistricts).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor="district"
            className="block text-darkBlue text-xs text-left font-semibold mb-2"
          >
            District
          </label>
          <select
            id="district"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            onBlur={handleAddressChange}
            disabled={!state}
            required
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor="city"
            className="block text-darkBlue text-xs text-left font-semibold mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter your city"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onBlur={handleAddressChange}
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="pincode"
            className="block text-darkBlue text-xs text-left font-semibold mb-2"
          >
            Pincode
          </label>
          <input
            type="number"
            id="pincode"
            placeholder="Enter your pincode"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
            value={pincode}
            maxLength="6"
            onInput={validatePincode}
            onBlur={handleAddressChange}
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="address_line_1"
            className="block text-darkBlue text-xs text-left font-semibold mb-2"
          >
            Address Line - 1
          </label>
          <textarea
            id="address_line_1"
            placeholder="Enter your Address"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            onBlur={handleAddressChange}
          />
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
        <div className="w-full">
          <label
            htmlFor="address_line_2"
            className="block text-darkBlue text-xs text-left font-semibold mb-2"
          >
            Address Line - 2
          </label>
          <textarea
            id="address_line_2"
            placeholder="Enter your Address"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            onBlur={handleAddressChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsForm;
