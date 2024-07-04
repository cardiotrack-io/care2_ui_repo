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
  setCurrentPage,
}) => {
  const [localTestSelect, setLocalTestSelect] = useState(null);
  const [individualTestList, setIndividualTestList] = useState(null);
  const [packageCost, setPackageCost] = useState(null);


  const handleMainPackageSelect = (packageName) => {
    const selectedPackage = allMedicalTests.find(ele => ele.Insurer_Package_Name === packageName);
    if (selectedPackage) {
      setIndividualTestList(selectedPackage.Package_Details);
      console.log(selectedPackage) // all package details
      setPackageCost(selectedPackage.Core_Package_Rate_Negotiated);
      setSelectedMedicalTests(packageName);
      setSelectedMedicalTestIndividualList(selectedPackage.Package_Details);
      setSelectedMedicalTestsPackageCost(selectedPackage.Core_Package_Rate_Negotiated);

      const individualTestList = selectedPackage.Package_Details.map(element => element.display_value);
      const individualTestListCost = Object.fromEntries(individualTestList.map(name => [name, allIndividualTests[name]]));
      console.log(individualTestListCost)
      setSelectedIndividualList(individualTestList);
      setSelectedIndividualListCost(individualTestListCost);
      setLocalTestSelect(packageName);
    }
  };

  const fetchTestBundle = async () => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: MedicalTestApiEndPoints.get_medical_tests,
      headers: {
        Authorization: AuthorizationKey.key,
      },
    };

    try {
      const response = await axios.request(config);
      const { Packages, Test_Prices } = response.data.data;
      setAllMedicalTests(Packages);
      setAllIndividualTests(Test_Prices);
      setLoading(false);
    } catch (error) {
      console.log("Please check your internet connection");
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchTestBundle();
  }, []);

  const renderPackages = (start, end) => (
    allMedicalTests.slice(start, end).map((pkg, index) => (
      <div
        key={pkg.Insurer_Package_Name}
        className={`${
          localTestSelect === pkg.Insurer_Package_Name
            ? "border-2 border-mediumBlue bg-lightBlue text-mediumBlue"
            : "package_1  bg-mediumBlue"
        } ${!loading && "swing-in-top-fwd"} w-40 h-16 flex items-center p-4 justify-around rounded-lg transition-all`}
        onClick={() => handleMainPackageSelect(pkg.Insurer_Package_Name)}
      >
        <img src={MedicalPackageIcons[start + index]} alt={pkg.Insurer_Package_Name} />
        <p className="font-semibold text-xs">{pkg.Insurer_Package_Name}</p>
      </div>
    ))
  );

  return (
    <div className="relative flex flex-col w-full h-screen px-6 items-center">
      <div className="container mt-11">
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
        <div className="flex justify-center py-3">
          <p className="text-darkBlue text-sm font-semibold">Select your Health Package</p>
        </div>
      </div>
      {allMedicalTests && (
        <>
          <div className="package_container flex flex-col space-y-1 mt-4">
            <div className="row_1 flex space-x-1">
              {renderPackages(0, 2)}
            </div>
            <div className="row_2 flex space-x-1">
              {renderPackages(2, 4)}
            </div>
          </div>
        </>
      )}
      {!individualTestList && (
        <div className="relative space-y-2 stading_medical_lady flex flex-col items-center mt-5">
          <img src={StandingMedicalLady} alt="Medical Lady Standing" />
          <p className="font-bold text-mediumBlue">No Packages Selected</p>
          <p className="underline text-mediumBlue text-sm">Please Select to Proceed</p>
        </div>
      )}
      {individualTestList && (
        <div className="test_container py-10">
          <DisplayTestList individualTestList={individualTestList} packageCost={packageCost} />
        </div>
      )}
      <div className="relative mt-5 flex w-11/12 pb-4 text-center justify-center items-center space-x-2">
        <button
          className="w-full starting_button bg-darkGray lg:w-1/4"
          onClick={() => {
            setCurrentPage("medicalTestsPicker");
          }}
        >
          <p className="font-light text-white">Proceed</p>
        </button>
      </div>
    </div>
  );
};

export default MedicalTests;
