import TestPlus from "../../assets/test_plus.svg";

const Registration = () => {
    console.log("This is working !")
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
        </div>
      </div>
    </>
  );
};

export default Registration;
