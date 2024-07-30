import React from "react";
import TestPlus from "../../assets/test_plus.svg";
import Header from "../Utility/Header";

const ThankYouPage = ({
  selectedMedicalTests,
}) => {
  return (
    <div className="container mt-11 px-6">
      <Header />
      <div className="header_container flex justify-center items-center">
        <div className="flex flex-col -space-y-4 slide-in-left">
          <div className="cardiotrack">
            <p className="font-bold text-black">Cardiotrack</p>
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
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-darkBlue slide-in-left">Congratulations.</h2>
        <p className="text-md text-darkBlue mt-2">
          Your appointment for {selectedMedicalTests} is confirmed.
        </p>
        <p className="text-sm text-darkBlue mt-4">
          You will get updates in WhatsApp. Our team will contact you shortly.
        </p>
        {/* <div className="mt-6">
          <h3 className="text-xl font-semibold text-darkBlue">
            Appointment Details
          </h3>
          <p className="text-md text-darkBlue mt-2">
            <strong>Name:</strong> {customerName}
          </p>
          <p className="text-md text-darkBlue mt-2">
            <strong>Address:</strong> {customerAddress.addressLine1},{" "}
            {customerAddress.district}, {customerAddress.state},{" "}
            {customerAddress.pincode}
          </p>
          <p className="text-md text-darkBlue mt-2">
            <strong>Date:</strong>{" "}
            {appointmentDate ? format(appointmentDate, "dd-MM-yy") : ""}
          </p>
          <p className="text-md text-darkBlue mt-2">
            <strong>Time:</strong>{" "}
            {appointmentTime
              ? dayjs(appointmentTime, "HH:mm").format("hh:mm A")
              : ""}
          </p>
          <p className="text-md text-darkBlue mt-2">
            <strong>Total Amount:</strong> {total}
          </p>
          <p className="text-md text-darkBlue mt-2">
            <strong>Payment Status:</strong> {paymentStatus}
          </p>
        </div> */}
        {/* <div className="mt-6">
          <button
            className="px-4 py-2 bg-darkGray text-white rounded-lg"
            onClick={() => window.location.href = '/'} // Redirect to homepage or any other page
          >
            Go to Homepage
          </button>
        </div> */}
        {/* <div className="container mt-5">
          <div className="flex justify-center text-2xl">
            <p className="text-darkBlue text-md font-bold">{selectedMedicalTests}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ThankYouPage;
