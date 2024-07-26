import React, { useState } from "react";
import TestPlus from "../../assets/test_plus.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import CustomerDetailsForm from "./CustomerDetailsForm";
import axios from "axios";
import PaymentGatewayEndPoints from "../../Constants/PaymentGatewayEndPoints";
import AuthorizationKey from "../../Constants/AuthorizationKey";
import Loading from "../Utility/Loading";
import Header from "../Utility/Header";
import TimePicker from "../CustomerRegistration/DateTimePop";

dayjs.extend(customParseFormat);
const Registration = ({
  customerName,
  setCustomerName,
  customerAddress,
  setCustomerAddress,
  appointmentDate,
  setAppointmentDate,
  appointmentTime,
  setAppointmentTime,
  setCurrentPage,
  customerPhone,
  selectedIndividualList,
  selectedMedicalTestsPackageCost,
  selectedPackageName,
  selectedMedicalTests,
  paymentStatus,
  setPaymentStatus,
}) => {
  const [total, setTotal] = useState(selectedMedicalTestsPackageCost);
  const [promocode, setPromocode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(selectedMedicalTestsPackageCost);
  const [error, setError] = useState(""); // State for general error messages
  const [isFormValid, setIsFormValid] = useState(false); // Track form validity
  const [loading, setLoading] = useState(false);


  const calculateTotal = () => {
    const newTotal = total - discount;
    setTotalAfterDiscount(newTotal);
    console.log(newTotal);
  };

  const applyPromocode = () => {
    if (promocode === "SAVE10") {
      setDiscount(10); // Example discount for a specific promocode
    } else {
      setDiscount(0);
      setError("Promo Code is Invalid");
    }
    calculateTotal();
  };

  const handleTimeChange = (time) => {
    setAppointmentTime(time);
    console.log(time)
  };

  const validateInputs = () => {
    if (!isFormValid) {
      setError("Please enter valid information in all fields.");
      return false;
    }
    if (!appointmentDate) {
      setError("Please select an appointment date");
      return false;
    }
    if (!appointmentTime) {
      setError("Please select an appointment time");
      return false;
    }
    setError(""); // Clear any previous errors
    return true;
  };

  const loadRazorpay = async () => {
    if (!validateInputs()) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = async () => {
      generateOrder();
    };
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    document.body.appendChild(script);
  };

  const generateOrder = async () => {
    try {
      const requestData = {
        amount: Math.floor(total) * 100, // Amount in paise
        currency: "INR",
        receipt: "test-order",
      };

      const response = await axios.post(
        PaymentGatewayEndPoints.create_order,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthorizationKey.key,
          },
        }
      );

      if (response.data && response.data.id) {
        displayCheckout(response.data.amount, response.data.id);
        console.log("Order Generated: " + response.data, response.data.id);
      } else {
        console.error("Invalid response from backend API", response.data);
      }
    } catch (error) {
      console.error(
        "Error creating order:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const displayCheckout = (amount, orderId) => {
    const razorpay_key = import.meta.env.VITE_RAZORPAY_KEY;
    const options = {
      key: razorpay_key, // Use your Razorpay test/live key here
      amount: amount,
      currency: "INR",
      name: "Cardiotrack Care",
      description: "Test Transaction",
      order_id: orderId,
      handler: async function (response) {
        const data = {
          order_id: orderId,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        };
        console.log("Payment Success: ", data);
        console.log(amount);
        //savePaymentInfo(data.order_id, data.payment_id, data.signature, appointmentDate, amount)
        sendOrderToServer_Validated(data, amount);
      },
      modal: {
        ondismiss: function () {
          console.log("Modal closed");
        },
      },
      prefill: {
        name: `${customerName}`,
        email: "example@example.com",
        contact: "9999999999",
      },
      notes: {
        address: `${customerAddress.addressLine1}`,
      },
      theme: {
        color: "#61dafb",
      },
    };
    let paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  async function sendOrderToServer_Validated(paymentData) {
    const originalDate = new Date(appointmentDate);
    const options = { day: "numeric", month: "short", year: "numeric" };

    const formattedDate = originalDate
      .toLocaleDateString("en-GB", options)
      .split(" ")
      .map((part, index) => (index === 1 ? part.replace(".", "") : part)) // Remove period from month abbreviation
      .join("-");
      console.log(appointmentTime)
      const time24hr = dayjs(time, ["HH:mm A"]).format("HH:mm");
      onTimeChange(time24hr);
      console.log(time24hr)
    console.log(formattedDate);
    console.log(selectedPackageName);
    const data = {
      order: {
        Appointment_Date: formattedDate,
        Appointment_Time: appointmentTime,
        Contact_Number1: customerPhone,
        Customer_Address: {
          address_line_1: customerAddress.addressLine1,
          // address_line_2: customerAddress.addressLine2 || "",
        },
        Customer_City: customerAddress.district,
        Customer_PIN_Code: customerAddress.pincode,
        Customer_Statee: customerAddress.state,
        Customer_Name: customerName,
        Gender: customerAddress.gender[0].toUpperCase(),
        // Life_Assured_Email: customerAddress.email,
        Package_Name: selectedPackageName,
      },
      payment: {
        Payment_Order_ID: paymentData.order_id,
        Payment_ID: paymentData.payment_id,
        Payment_Signature: paymentData.signature,
        Amount: total.toString(),
      },
    };
    console.log("Order ID:", paymentData.order_id);
    console.log("Payment ID:", paymentData.payment_id);
    console.log("Generated Signature:", paymentData.signature);

    console.log("Request Data:", data);
    setLoading(true);
    try {
      const response = await axios.post(
        PaymentGatewayEndPoints.validate_order,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthorizationKey.key,
          },
        }
      );

      if (response.status === 200) {
        console.log("Response Data:", response);
        setLoading(false);
        setPaymentStatus("Paid");
        navigateToThankyouPage();
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        // No response was received
        console.error("Error request:", error.request);
      } else {
        // Error setting up the request
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    }
  }

  function navigateToThankyouPage() {
    setCurrentPage("thankYou", {
      customerName,
      customerAddress,
      appointmentDate,
      appointmentTime,
      total: totalAfterDiscount,
      paymentStatus: paymentStatus,
      selectedIndividualList,
    });
  }

  return (
    <>
      <div className="relative flex flex-col w-full h-screen px-6 items-center">
        <Header />
        <div className="container mt-11">
          <div className="header_container flex justify-center items-center">
            <div className="flex flex-col -space-y-4 slide-in-left">
              <div className="cardiotrack">
                <p className="font-bold text-black cursor-pointer">
                  Cardiotrack
                </p>
              </div>
              <div className="flex justify-center space-x-1 care-medical-test">
                <div className="care">
                  <p className="tracking-tighter text-black">Care</p>
                </div>
                <div className="flex items-center justify-center medical-test">
                  <p className="px-4 tracking-tighter rounded-lg text-navyBlue bg-paleBlue">
                    Medical Home Visit
                  </p>
                </div>
              </div>
            </div>
            <div className="plus_container">
              <img src={TestPlus} alt="Test Plus" />
            </div>
          </div>
          <div className="flex justify-start mt-6">
            <p className="text-darkBlue text-sm font-semibold">
              Appointment Details
            </p>
          </div>
          {/* <div className="appointment_details_container flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-2">
            <div className="appointment_date relative w-full md:w-1/2">
              {showDatePicker ? (
                <DatePicker
                  selected={appointmentDate}
                  onChange={(date) => {
                    setAppointmentDate(date);
                    setShowDatePicker(false);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  inline
                  minDate={new Date()} // Today as minDate
                  maxDate={
                    new Date(new Date().setDate(new Date().getDate() + 15))
                  } // 15 days from today as maxDate
                />
              ) : (
                <div onClick={() => setShowDatePicker(true)}>
                  <img
                    src={AppointmentDateIcon}
                    alt="appointment_date_icon"
                    className="w-full h-full cursor-pointer"
                  />
                  <div className="absolute top-3 left-0 w-full h-full px-6 flex items-center justify-center">
                    <p className="text-darkBlue text-md font-bold">
                      {appointmentDate
                        ? format(appointmentDate, "dd-MM-yy")
                        : "Select date"}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="appointment_time relative w-full md:w-1/2 text-black">
              {showTimePicker ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileTimePicker
                    open={showTimePicker}
                    onClose={() => setShowTimePicker(false)}
                    value={
                      appointmentTime ? dayjs(appointmentTime, "HH:mm") : null
                    }
                    onAccept={handleTimeChange}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        fullWidth: true,
                      },
                    }}
                  />
                </LocalizationProvider>
              ) : (
                <div onClick={() => setShowTimePicker(true)}>
                  <img
                    src={AppointmentTimeIcon}
                    alt="appointment_time_icon"
                    className="w-full h-full cursor-pointer"
                  />
                  <div className="absolute top-3 left-0 w-full h-full px-7 flex items-center justify-center">
                    <p className="text-darkBlue text-md font-bold">
                      {getFormattedTime()}
                    </p>
                  </div>
                </div>
              )}
              {timeError && (
                <div className="text-red-500 text-sm mt-2">{timeError}</div>
              )}
            </div>
          </div> */}
          <div className="appointment_details_container flex flex-row space-x-2 mt-2">
            <div className="appointment_date relative w-1/2">
              <DatePicker
                selected={appointmentDate}
                onChange={(date) => setAppointmentDate(date)}
                className="w-full p-2 border text-darkBlue bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-darkBlue"
                minDate={new Date(new Date().setDate(new Date().getDate() + 1))} // Today as minDate
                maxDate={
                  new Date(new Date().setDate(new Date().getDate() + 15))
                } // 15 days from today as maxDate
                placeholderText="Select Date"
                dateFormat="dd-MM-yyyy" // Format the date as DD-MM-YYYY
                popperModifiers={{
                  preventOverflow: {
                    enabled: true,
                    boundariesElement: 'viewport',
                  },
                  offset: {
                    enabled: true,
                    offset: '5, 10', // Adjust the offset as needed
                  },
                }}
              />
            </div>
            <div className="appointment_time w-1/2">
              <TimePicker appointmentDate={appointmentDate} onTimeChange={handleTimeChange}/>
            </div>
          </div>
          <div className="details_container mt-6">
            {/* <div className="details_title">
              <p className="drop-shadow-md text-darkBlue text-left text-sm font-semibold">
                Your Details
              </p>
            </div> */}
            <div className="customer_form_container mt-4">
              <CustomerDetailsForm
                customerName={customerName}
                setCustomerName={setCustomerName}
                customerAddress={customerAddress}
                setCustomerAddress={setCustomerAddress}
                onValidationChange={setIsFormValid}
              />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          {/* <div className="flex flex-col md:flex-row md:flex-wrap py-4 px-2 rounded-md bg-blue-400 bg-opacity-20 space-y-2 md:space-y-0">
            {selectedIndividualList.map((test, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 text-sm font-semibold text-darkBlue md:py-2"
              >
                {test}
              </div>
            ))}
          </div> */}
        </div>
        <div className="promocode_container mt-6">
          <div className="promocode_title">
            <p className="drop-shadow-md text-darkBlue text-left text-sm font-semibold">
              Promocode
            </p>
          </div>
          <div className="mt-4 flex space-x-4">
            <input
              type="text"
              value={promocode}
              onChange={(e) => setPromocode(e.target.value)}
              className="border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2 w-full"
              placeholder="Enter promocode"
            />
            <button
              onClick={applyPromocode}
              className="px-4 py-2 bg-darkBlue text-white rounded-md"
            >
              Apply
            </button>
          </div>
        </div>
        <div className="total_container mt-6">
        <div className="flex justify-start">
            <p className="text-darkBlue text-sm font-semibold">{selectedMedicalTests}</p>
          </div>
          <div className="total_title">
            <p className="drop-shadow-md text-darkBlue text-left text-sm font-semibold">
              Total Amount ₹ {discount > 0 && <span className="line-through">{selectedMedicalTestsPackageCost}</span>}
              <span className={discount > 0 ? "ml-4" : ""}>₹
                {discount > 0 ? totalAfterDiscount : selectedMedicalTestsPackageCost}
              </span>
            </p>
          </div>
          {/* <div className="mt-4 flex justify-between items-center">
            <p className="text-darkBlue text-md font-bold">
              <span className="line-through">{total}</span>
              <span className="ml-2">{totalAfterDiscount}</span>
            </p>
          </div> */}
          {/* <div className="mt-4 flex justify-between items-center">
            <p className="text-darkBlue text-md font-bold">
              {discount > 0 && <span className="line-through">{selectedMedicalTestsPackageCost}</span>}
              <span className={discount > 0 ? "ml-2" : ""}>
                {discount > 0 ? totalAfterDiscount : selectedMedicalTestsPackageCost}
              </span>
            </p>
          </div> */}
        </div>
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        {loading && <Loading />}
        <div className="relative my-4 py-4 flex flex-row w-11/12 pt-4 text-center justify-center bottom-2 items-center space-x-2">
          {/* <button
            className="flex-1 bg-darkGray text-white py-2 rounded-lg"
            onClick={() => {
              // Mark as COD
              setPaymentStatus("COD");
              navigateToThankyouPage();
            }}
          >
            <p className="font-light text-white text-center">Pay Later</p>
          </button> */}
          <button
            className="flex-1 bg-darkGray text-white py-2 rounded-lg"
            onClick={loadRazorpay}
          >
            <p className="font-light text-white text-center">Pay Now</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Registration;
