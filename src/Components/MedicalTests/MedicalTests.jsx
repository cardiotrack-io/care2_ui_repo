import TestPlus from "../../assets/test_plus.svg";
import FullBody from "../../assets/MedicalPackages/CRA.svg";
import Heart from "../../assets/MedicalPackages/Heart.svg";
import Lungs from "../../assets/MedicalPackages/Lungs.svg";
import Ovary from "../../assets/MedicalPackages/Ovary.svg";
import StandingMedicalLady from "../../assets/MedicalLadyStanding.svg";
import axios from "axios";
import TestAndDcApiEndPoints from "../../Constants/MedicalTestEndPoints";
import AuthorizationKey from "../../Constants/AuthorizationKey";
import { useEffect, useState } from "react";
import DisplayTestList from "../Utility/TestList";
const MedicalPackageIcons = [Lungs, Ovary, Heart, FullBody];
const MedicalTests = ({
  allMedicalTests,
  setAllMedicalTests,
  selectedMedicalTests,
  setSelectedMedicalTests,
  setLoading,
  loading,
  setRegistrationState,
  setMedicalTestState,
}) => {
  //Function is used for handling only the main 4 packages which are there.
  const [localTestSelect, setLocalTestSelect] = useState(null);
  const [indiviualTestList, setIndiviualTestList] = useState(null);
  const [popupState, setPopupState] = useState(true);
  const handleMainPackageSelect = (packageName) => {
    allMedicalTests.map((ele) => {
      if (ele.Insurer_Package_Name == packageName) {
        console.log("Found it => ", ele.Package_Details);
        setIndiviualTestList(ele.Package_Details);
      }
    });
    setLocalTestSelect(packageName);
  };
  const fetchTestBundle = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: TestAndDcApiEndPoints.get_test_bundle,
      headers: {
        Authorization: AuthorizationKey.key,
      },
    };
    await axios
      .request(config)
      .then((response) => {
        console.log(response.data.data);
        let temp = response.data.data;
        temp.map((ele, index) => {
          ele.Insurer_Package_Name;
        });
        setAllMedicalTests(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Please check your internet connection");
      });
  };
  const handleAddtest = () => {
    if (localTestSelect != true) {
      setPopupState(true);
    }
  };
  useEffect(() => {
    setLoading(true);

    fetchTestBundle();
  }, []);
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
              Select your Health Package
            </p>
          </div>
        </div>
        {allMedicalTests && (
          <>
            <div className="package_container flex flex-col space-y-1 mt-4">
              <div className="row_1 flex space-x-1">
                {allMedicalTests.map((packageName, index) => {
                  if (index < 2) {
                    return (
                      <div
                        className={`${
                          localTestSelect == packageName.Insurer_Package_Name
                            ? "border-2 border-mediumBlue bg-lightBlue text-mediumBlue"
                            : "package_1  bg-mediumBlue"
                        } ${
                          loading == false && "swing-in-top-fwd"
                        } w-40 h-16 flex items-center p-4 justify-around  rounded-lg transition-all`}
                        onClick={(e) => {
                          handleMainPackageSelect(
                            packageName.Insurer_Package_Name
                          );
                        }}
                      >
                        <img src={MedicalPackageIcons[index]} />
                        <p className="font-semibold text-xs">
                          {packageName.Insurer_Package_Name}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="row_2 flex space-x-1">
                {allMedicalTests.map((packageName, index) => {
                  if (index > 1) {
                    return (
                      <div
                        className={`${
                          localTestSelect == packageName.Insurer_Package_Name
                            ? "border-2 border-mediumBlue bg-lightBlue text-mediumBlue"
                            : "package_1  bg-mediumBlue"
                        } ${
                          loading == false && "swing-in-top-fwd"
                        } w-40 h-16 flex items-center p-4 justify-around  rounded-lg transition-all `}
                        onClick={(e) => {
                          handleMainPackageSelect(
                            packageName.Insurer_Package_Name
                          );
                        }}
                      >
                        <img src={MedicalPackageIcons[index]} />
                        <p className="font-semibold text-xs">
                          {packageName.Insurer_Package_Name}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </>
        )}
        {indiviualTestList == null && (
          <div className="absolute bottom-40 stading_medical_lady flex flex-col items-center">
            <img src={StandingMedicalLady} />
            <p className=" font-bold text-mediumBlue">No Packages Selected</p>
            <p className=" underline text-mediumBlue text-sm ">
              Please Select to Proceed
            </p>
          </div>
        )}
        {indiviualTestList && (
          <div className="test_container">
            <DisplayTestList indiviualTestList= {indiviualTestList} />
          </div>
        )}
        <div className="absolute flex   w-11/12 pb-4 text-center justify-center bottom-2 items-center space-x-2">
          <button
            className="w-full starting_button bg-darkGray lg:w-1/4"
            onClick={(e) => {
              setMedicalTestState(false);
              setRegistrationState(true);
            }}
          >
            <p className="font-light text-white">Proceed</p>
          </button>
        </div>
      </div>
    </>
  );
};
export default MedicalTests;
