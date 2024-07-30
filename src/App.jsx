import { useState } from "react";
import "./App.css";
import LandingPage from "./Components/Landing/LandingPage";
import LoginPage from "./Components/Login/LoginPage";
import MedicalTests from "./Components/MedicalTests/MedicalTests";
import MedicalTestsPicker from "./Components/MedicalTestsPicker/MedicalTestsPicker";
import Loading from "./Components/Utility/Loading";
import Registration from "./Components/CustomerRegistration/Registration";
import ThankYouPage from "./Components/CustomerRegistration/ThankYou";

// Globally declaring size of OTP
const OTP_SIZE = 6;

function App() {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState("landing");

  // Customer Details
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [customerPhone, setCustomerPhone] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");

  // Appointment Details
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  // Medical Details
  const [allMedicalTests, setAllMedicalTests] = useState(null);
  const [allIndividualTests, setAllIndividualTests] = useState(null);
  const [selectedMedicalTestIndividualList, setSelectedMedicalTestIndividualList] = useState(null);
  const [selectedIndividualList, setSelectedIndividualList] = useState(null);
  const [selectedIndividualListCost, setSelectedIndividualListCost] = useState(null);
  const [selectedMedicalTests, setSelectedMedicalTests] = useState(null);
  const [selectedMedicalTestsPackageCost, setSelectedMedicalTestsPackageCost] = useState(null);
  const [selectedPackageName, setSelectedPackageName] = useState('');

  const [otp, setOtp] = useState(new Array(OTP_SIZE).fill(""));
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return (
          <LandingPage
            setCurrentPage={setCurrentPage}
          />
        );
      case "login":
        return (
          <LoginPage
            customerPhone={customerPhone}
            setCustomerPhone={setCustomerPhone}
            otp={otp}
            setOtp={setOtp}
            setCurrentPage={setCurrentPage}
            setLoading={setLoading}
          />
        );
      case "medicalTest":
        return (
          <MedicalTests
            allMedicalTests={allMedicalTests}
            setAllMedicalTests={setAllMedicalTests}
            allIndividualTests={allIndividualTests}
            setAllIndividualTests={setAllIndividualTests}
            selectedMedicalTests={selectedMedicalTests}
            setSelectedMedicalTests={setSelectedMedicalTests}
            selectedMedicalTestsPackageCost={selectedMedicalTestsPackageCost}
            setSelectedMedicalTestsPackageCost={setSelectedMedicalTestsPackageCost}
            setSelectedIndividualList={setSelectedIndividualList}
            selectedIndividualListCost={selectedIndividualListCost}
            setSelectedIndividualListCost={setSelectedIndividualListCost}
            selectedMedicalTestIndividualList={selectedMedicalTestIndividualList}
            setSelectedMedicalTestIndividualList={setSelectedMedicalTestIndividualList}
            setLoading={setLoading}
            loading={loading}
            setCurrentPage={setCurrentPage}
            selectedPackageName = {selectedPackageName}
            setSelectedPackageName = {setSelectedPackageName}
          />
        );
      case "medicalTestsPicker":
        return (
          <MedicalTestsPicker
          selectedMedicalTests={selectedMedicalTests}
          setSelectedMedicalTests={setSelectedMedicalTests}
          selectedMedicalTestsPackageCost={selectedMedicalTestsPackageCost}
          setSelectedMedicalTestsPackageCost={setSelectedMedicalTestsPackageCost}
          total={total}
          setTotal={setTotal}
          allIndividualTests={allIndividualTests}
          setAllIndividualTests={setAllIndividualTests}
          selectedIndividualList={selectedIndividualList}
          setSelectedIndividualList={setSelectedIndividualList}
          selectedIndividualListCost={selectedIndividualListCost}
          setSelectedIndividualListCost={setSelectedIndividualListCost}
          selectedMedicalTestIndividualList={selectedMedicalTestIndividualList}
          setSelectedMedicalTestIndividualList={setSelectedMedicalTestIndividualList}
          setCurrentPage={setCurrentPage}
          />
        );
      case "registration":
        return (
          <Registration
            selectedIndividualList={selectedIndividualList}
            selectedMedicalTestsPackageCost={selectedMedicalTestsPackageCost}
            total={total}
            setTotal={setTotal}
            customerName={customerName}
            setCustomerName={setCustomerName}
            customerPhone={customerPhone}
            customerAddress={customerAddress}
            setCustomerAddress={setCustomerAddress}
            appointmentDate={appointmentDate}
            setAppointmentDate={setAppointmentDate}
            appointmentTime={appointmentTime}
            setAppointmentTime={setAppointmentTime}
            setCurrentPage={setCurrentPage}
            selectedPackageName = {selectedPackageName}
            selectedMedicalTests = {selectedMedicalTests}
            paymentStatus={paymentStatus}
            setPaymentStatus={setPaymentStatus}
          />
        );
        case "thankYou":
        return (
        <ThankYouPage
        // customerName={customerName}
        // customerAddress={customerAddress}
        // appointmentDate={appointmentDate}
        // appointmentTime={appointmentTime}
        // total={total}
        selectedMedicalTests={selectedMedicalTests}
        // selectedIndividualListCost={selectedIndividualListCost}
        // setSelectedIndividualListCost={setSelectedIndividualListCost}
      />
      );
      default:
        return null;
    }
  };

  return (
    <div className="">
      {loading && (
        <div className="loading_container absolute bg-slate-900">
          <Loading />
        </div>
      )}
      {renderPage()}
    </div>
  );
}

export default App;
