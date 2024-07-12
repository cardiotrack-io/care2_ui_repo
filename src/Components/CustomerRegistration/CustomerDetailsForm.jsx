import React, { useState, useEffect } from "react";

const statesWithDistricts = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
  "Arunachal Pradesh": ["Itanagar"],
  "Assam": ["Guwahati"],
  "Bihar": ["Patna"],
  "Chhattisgarh": ["Raipur"],
  "Goa": ["Panaji", "Margao"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
  "Haryana": ["Gurugram", "Faridabad"],
  "Himachal Pradesh": ["Shimla"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
  "Karnataka": ["Bengaluru", "Mysore", "Mangalore", "Hubli", "Belgaum"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
  "Manipur": ["Imphal"],
  "Meghalaya": ["Shillong"],
  "Mizoram": ["Aizawl"],
  "Nagaland": ["Kohima"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
  "Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer"],
  "Sikkim": ["Gangtok"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar"],
  "Tripura": ["Agartala"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi"],
  "Uttarakhand": ["Dehradun"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
  "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
};

const CustomerDetailsForm = ({
  customerName,
  setCustomerName,
  customerAddress,
  setCustomerAddress,
}) => {
  const [addressLine1, setAddressLine1] = useState(customerAddress.addressLine1 || "");
  const [addressLine2, setAddressLine2] = useState(customerAddress.addressLine2 || "");
  const [city, setCity] = useState(customerAddress.city || "");
  const [state, setState] = useState(customerAddress.state || "");
  const [district, setDistrict] = useState(customerAddress.district || "");
  const [pincode, setPincode] = useState(customerAddress.pincode || "");
  const [districts, setDistricts] = useState([]);

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
    });
  };

  useEffect(() => {
    if (state) {
      setDistricts(statesWithDistricts[state] || []);
    } else {
      setDistricts([]);
    }
  }, [state]);

  return (
    <div className="form_container flex flex-col items-start py-4 px-2 rounded-md bg-darkBlue bg-opacity-20 space-y-4">
      <div className="name_container w-full">
        <label
          htmlFor="customer_name"
          className="block text-darkBlue text-xs text-left font-semibold mb-2"
        >
          Enter your name
        </label>
        <input
          type="text"
          id="customer_name"
          placeholder="Enter your name"
          className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
          value={customerName}
          onChange={handleNameChange}
        />
      </div>
      <div className="address_container w-full flex flex-col space-y-4">
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
          >
            <option value="">Select State</option>
            {Object.keys(statesWithDistricts).map((state) => (
              <option key={state} value={state}>{state}</option>
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
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>{district}</option>
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
            type="text"
            id="pincode"
            placeholder="Enter your pincode"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            onBlur={handleAddressChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsForm;
