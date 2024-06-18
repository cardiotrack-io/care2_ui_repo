import TestPlus from "../../assets/test_plus.svg";
import FullBody from "../../assets/MedicalPackages/CRA.svg";
import Heart from "../../assets/MedicalPackages/Heart.svg";
import Lungs from "../../assets/MedicalPackages/Lungs.svg";
import Ovary from "../../assets/MedicalPackages/Ovary.svg";
import StandingMedicalLady from "../../assets/MedicalLadyStanding.svg";
import axios from "axios";
import MedicalTestApiEndPoints from "../../Constants/MedicalTestEndPoints";
import AuthorizationKey from "../../Constants/AuthorizationKey";
import { useEffect, useState } from "react";
import DisplayTestList from "./TestList";
const MedicalPackageIcons = [Lungs, Ovary, Heart, FullBody];
const MedicalTests = ({
  allMedicalTests,
  setAllMedicalTests,
  allIndividualTests,
  setAllIndividualTests,
  setLoading,
  loading,
  selectedMedicalTests,
  setSelectedMedicalTests,
  selectedMedicalTestsPackageCost,
  setSelectedMedicalTestsPackageCost,
  selectedMedicalTestIndividualList,
  setSelectedMedicalTestIndividualList,
  selectedIndividualList,
  setSelectedIndividualList,
  selectedIndividualListCost,
  setSelectedIndividualListCost,
  setMedicalTestsPickerState,
  setMedicalTestState,
}) => {
  //Function is used for handling only the main 4 packages which are there.
  const [localTestSelect, setLocalTestSelect] = useState(null);
  const [individualTestList, setIndividualTestList] = useState(null);
  const [packageCost, setPackageCost] = useState(null);
  const [popupState, setPopupState] = useState(true);
  const handleMainPackageSelect = (packageName) => {
    allMedicalTests.map((ele) => {
      if (ele.Insurer_Package_Name == packageName) {
        console.log("Found it => ", ele.Package_Details);
        setIndividualTestList(ele.Package_Details);
        setPackageCost(ele.Core_Package_Rate_Negotiated);
        setSelectedMedicalTests(packageName)
        setSelectedMedicalTestIndividualList(ele.Package_Details)
        setSelectedMedicalTestsPackageCost(ele.Core_Package_Rate_Negotiated)
        var individualTestList = []
        var individualTestListCost = {}
        for (let index = 0; index < ele.Package_Details.length; index++) {
          const element = ele.Package_Details[index];
          name2 = element.display_value
          individualTestList.push(name2)
          individualTestListCost[name2] = allIndividualTests[name2]
        }
        setSelectedIndividualList(individualTestList)
        setSelectedIndividualListCost(individualTestListCost)
        console.log("====individualTestList===")
        console.log(individualTestList)
        console.log("====individualTestListCost===")
        console.log(individualTestListCost)

      }
    });
    setLocalTestSelect(packageName);
  };
  const fetchTestBundle = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: MedicalTestApiEndPoints.get_medical_tests,
      headers: {
        Authorization: AuthorizationKey.key,
      },
    };
    await axios
      .request(config)
      .then((response) => {
        console.log("Endpoint data---" + MedicalTestApiEndPoints.get_medical_tests);
        console.log(response.data.data);
        let temp = response.data.data.Packages;
        temp.map((ele, index) => {
          ele.Insurer_Package_Name;
        });
        setAllMedicalTests(response.data.data.Packages);
        setAllIndividualTests(response.data.data.Test_Prices)
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
    setLoading(false);

    fetchTestBundle();
  }, []);
  return (
    <>
      <div className="relative flex flex-col w-full h-screen px-6 items-center">
        <div className="container mt-11">
          <div className="header_container flex justify-center items-center">
            <div className="flex flex-col -space-y-4 slide-in-left">
              <div className="cardiotrack">
                <p className="font-bold text-black ">
                  Cardiotrack
                </p>
              </div>
              <div className="flex justify-center space-x-1 care-medical-test">
                <div className="care ">
                  <p className="tracking-tighter text-black">Care</p>
                </div>
                <div className="flex items-center justify-center medical-test ">
                  <p className="px-4 tracking-tighter rounded-lg text-navyBlue bg-paleBlue">
                    Medical Home Visit
                  </p>
                </div>
              </div>
            </div>

            <div className="plus_container">
              <img src={TestPlus} />
            </div>
          </div>
          <div className="flex justify-center py-3">
            <p className="text-darkBlue text-sm font-semibold ">
              Select your Health Package
            </p>
          </div>
        </div>
        {allMedicalTests && (
          <>
            <div className="package_container flex flex-col space-y-1 mt-4">
              <div className="row_1 flex space-x-1">
                {allMedicalTests.map((pkgName, index) => {
                  if (index < 2) {
                    return (
                      <div
                        className={`${localTestSelect == pkgName.Insurer_Package_Name
                          ? "border-2 border-mediumBlue bg-lightBlue text-mediumBlue"
                          : "package_1  bg-mediumBlue"
                          } ${loading == false && "swing-in-top-fwd"
                          } w-40 h-16 flex items-center p-4 justify-around  rounded-lg transition-all`}
                        onClick={(e) => {
                          handleMainPackageSelect(
                            pkgName.Insurer_Package_Name
                          );
                        }}
                      >
                        <img src={MedicalPackageIcons[index]} />
                        <p className="font-semibold text-xs">
                          {pkgName.Insurer_Package_Name}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="row_2 flex space-x-1">
                {allMedicalTests.map((pkgName, index) => {
                  if (index > 1) {
                    return (
                      <div
                        className={`${localTestSelect == pkgName.Insurer_Package_Name
                          ? "border-2 border-mediumBlue bg-lightBlue text-mediumBlue"
                          : "package_1  bg-mediumBlue"
                          } ${loading == false && "swing-in-top-fwd"
                          } w-40 h-16 flex items-center p-4 justify-around  rounded-lg transition-all `}
                        onClick={(e) => {
                          handleMainPackageSelect(
                            pkgName.Insurer_Package_Name
                          );
                        }}
                      >
                        <img src={MedicalPackageIcons[index]} />
                        <p className="font-semibold text-xs">
                          {pkgName.Insurer_Package_Name}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </>
        )}
        {individualTestList == null && (
          <div className="absolute bottom-40 stading_medical_lady flex flex-col items-center">
            <img src={StandingMedicalLady} />
            <p className=" font-bold text-mediumBlue">No Packages Selected</p>
            <p className=" underline text-mediumBlue text-sm ">
              Please Select to Proceed
            </p>
          </div>
        )}
        {individualTestList && (
          <div className="test_container py-10">
            <DisplayTestList individualTestList={individualTestList} packageCost={packageCost} />
          </div>
        )}
        <div className="absolute flex   w-11/12 pb-4 text-center justify-center bottom-2 items-center space-x-2">
          <button
            className="w-full starting_button bg-darkGray lg:w-1/4"
            onClick={(e) => {
              setMedicalTestState(true);
              setMedicalTestsPickerState(true);
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
