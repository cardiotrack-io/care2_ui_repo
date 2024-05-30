import TestPlus from "../../assets/test_plus.svg";
import FullBody from "../../assets/MedicalPackages/CRA.svg";
import Heart from "../../assets/MedicalPackages/Heart.svg";
import Lungs from "../../assets/MedicalPackages/Lungs.svg";
import Ovary from "../../assets/MedicalPackages/Ovary.svg";
import StandingMedicalLady from "../../assets/MedicalLadyStanding.svg";
const MedicalTests = () => {
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
            <p className="text-darkBlue text-sm font-semibold shadow-md ">
              Select your Health Package
            </p>
          </div>
        </div>
        <div className="package_container flex flex-col space-y-1 ">
          <div className="row_1 flex space-x-1">
            <div className="package_1 w-40 h-16 flex items-center p-4 justify-around  rounded-lg bg-mediumBlue">
              <img src={FullBody} />
              <p className="font-semibold">Full Body</p>
            </div>
            <div className="package_2 w-40 h-16 flex items-center p-4 justify-around  rounded-lg bg-mediumBlue">
              <img src={Ovary} />
              <p className="font-semibold">Go Women!</p>
            </div>
          </div>
          <div className="row_2 flex space-x-1">
            <div className="package_3 w-40 h-16 flex items-center p-4 justify-around  rounded-lg bg-mediumBlue">
              <img src={Heart} />
              <p className="font-semibold">CRA</p>
            </div>
            <div className="package_4 w-40 h-16 flex items-center p-4 justify-around  rounded-lg bg-mediumBlue">
              <img src={Lungs} />
              <p className="font-semibold">TMT</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-40 stading_medical_lady flex flex-col items-center">
          <img src={StandingMedicalLady} />
          <p className=" font-bold text-mediumBlue">No Tests Selected</p>
          <p className=" underline text-mediumBlue text-sm ">Click to Add Test</p>
        </div>
        <div className="absolute flex   w-11/12 pb-4 text-center justify-between bottom-2 items-center space-x-2">
          <button className="w-1/2 starting_button bg-darkGray lg:w-1/4">
            <p className="font-light text-white">Add Test</p>
          </button>
          <button className="w-1/2 starting_button bg-darkGray lg:w-1/4">
            <p className="font-light text-white">Proceed</p>
          </button>
        </div>
      </div>
    </>
  );
};
export default MedicalTests;
