import TestPlus from "../../assets/test_plus.svg";
const MedicalTests = () => {
  return (
    <>
      <div className="relative flex flex-col w-full h-screen px-6 ">
        <div className="container mt-11">
          <div className="header_container flex justify-between items-center">
            <div className="flex flex-row ">
              <p className="font-bold text-black slide-in-blurred-top text-base">
                Cardiotrack{" "}
              </p>
              <p className=" text-black slide-in-blurred-top text-base">
                &nbsp;Care{" "}
              </p>
            </div>
            <div className="plus_container">
              <img src={TestPlus} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MedicalTests;
