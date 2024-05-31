import TestPlus from "../../assets/test_plus.svg";
import AppointmentDateIcon from "../../assets/AppointmentIcons/AppointmentDate.svg";
import AppointmentTimeIcon from "../../assets/AppointmentIcons/AppointmentTime.svg";
import CustomerDetailsForm from "./CustomerDetailsForm";
const Registration = ({
  customerName,
  setCustomerName,
  customerAddress,
  setCustomerAddress,
  appointmentDate,
  setAppointmentDate,
  appointmentTime,
  setAppointmentTime,
}) => {
  return (
    <>
      <div className="relative flex flex-col w-full h-screen px-6 items-center">
        <div className="container mt-11">
          <div className="header_container flex justify-between items-center">
            <div className="flex flex-row ">
              <p className="font-bold text-black slide-in-blurred-top text-lg">
                Cardiotrack{" "}
              </p>
              <p className=" text-black slide-in-blurred-top text-lg">
                &nbsp;Care{" "}
              </p>
            </div>
            <div className="plus_container">
              <img src={TestPlus} />
            </div>
          </div>
          <div className="flex justify-start">
            <p className="text-darkBlue text-sm font-semibold ">
              Appointment Details
            </p>
          </div>
          <div className="appointment_details_container flex space-x-4 mt-2">
            <div className="appointment_date relative">
              <img
                src={AppointmentDateIcon}
                alt="appointment_date_icon"
                className="w-full h-full"
              />
              <div className="absolute top-3 left-0 w-full h-full  px-6  flex items-center justify-end">
                <p className="text-darkBlue text-xs font-semibold">12-3-2024</p>
              </div>
            </div>
            <div className="appointment_time relative">
              <img
                src={AppointmentTimeIcon}
                alt="appointment_time_icon"
                className="w-full h-full"
              />
              <div className="absolute top-3 left-0 w-full h-full  px-7  flex items-center justify-end">
                <p className="text-darkBlue text-xs font-semibold">08:00 Am</p>
              </div>
            </div>
          </div>
          <div className="details_container">
            <div className="details_title">
              <p className="drop-shadow-md text-darkBlue text-left text-sm font-semibold ">
                Your Details
              </p>
            </div>
            <div className="cutomer_form_container mt-4">
              <CustomerDetailsForm
                customerName={customerName}
                setCustomerName={setCustomerName}
                customerAddress={customerAddress}
                setCustomerAddress={setCustomerAddress}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
