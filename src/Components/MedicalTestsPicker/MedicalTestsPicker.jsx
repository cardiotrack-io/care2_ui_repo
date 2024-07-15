import axios from "axios";
import "./MedicalTestsPicker.css";
import TestPlus from "../../assets/test_plus.svg";
import MedicalTestEndPoints from "../../Constants/MedicalTestEndPoints";
import AuthorizationKey from "../../Constants/AuthorizationKey";
import { useEffect, useState } from "react";

const MedicalTestsPicker = ({
  selectedMedicalTests,
  setSelectedMedicalTests,
  selectedMedicalTestsPackageCost,
  setSelectedMedicalTestsPackageCost,
  allIndividualTests,
  setAllIndividualTests,
  selectedIndividualList,
  setSelectedIndividualList,
  selectedIndividualListCost,
  setSelectedIndividualListCost,
  selectedMedicalTestIndividualList,
  setSelectedMedicalTestIndividualList,
  setCurrentPage,
  total,
  setTotal
}) => {
  useEffect(() => {
    const packageCost = isNaN(Number(selectedMedicalTestsPackageCost)) ? 0 : Number(selectedMedicalTestsPackageCost);
    setTotal(packageCost.toFixed(2));
  }, [selectedMedicalTestsPackageCost]);

  const handleCheckboxChange = (e) => {
    const testName = e.target.value;
    const testPrice = allIndividualTests[testName] ? parseFloat(allIndividualTests[testName]) : 0;
    console.log(allIndividualTests);
    if (testPrice > 0) {
      const updatedList = e.target.checked
        ? [...(selectedIndividualList || []), testName]
        : (selectedIndividualList || []).filter((item) => item !== testName);
      
      const updatedTotal = e.target.checked ? total + testPrice : total - testPrice;
      const finalTotal = Math.max(0, Number(updatedTotal.toFixed(2))); // Ensure total doesn't go negative
      
      const updatedCostList = { ...selectedIndividualListCost };

      if (e.target.checked) {
        updatedCostList[testName] = testPrice;
      } else {
        delete updatedCostList[testName];
      }

      setSelectedIndividualList(updatedList);
      setSelectedIndividualListCost(updatedCostList);
      console.log(finalTotal)
      if(updatedList.length==0) {
        setTotal(0)
      }
      else {
        setTotal(finalTotal);
      }
    }
  };

  const renderItems = () =>
    selectedMedicalTestIndividualList.map((test, index) => (
      <div className="py-2" key={index}>
        <div className="flex flex-row justify-between h-10 md:h-6 px-2">
          <div className="text-left text-darkBlue text-sm">{test.display_value}</div>
          <div className="px-10">
            <input
              className="rounded-checkbox"
              type="checkbox"
              name="individual_tests_cb"
              value={test.display_value}
              defaultChecked
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        <div className="border-b border-1 border-mediumBlue w-5/5 mx-auto"></div>
      </div>
    ));

  return (
    <div className="relative flex flex-col overflow-auto w-full px-6 items-center">
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
      {selectedMedicalTests && (
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto items-center">
          <div className="rounded-xl bg-lightBlueBG overflow-auto">
            <div className="items-center">
              <div className="rounded-lg bg-darkBlue text-white text-center p-2 font-bold">{selectedMedicalTests}</div>
            </div>
            <div className="w-full border-b border-2 border-mediumBlue px-2"></div>
            <div className="grid grid-cols-1 py-2">{renderItems()}</div>
          </div>
          <div className="w-full border-b border-2 border-mediumBlue mt-2"></div>
          <div className="grid grid-cols-2 py-2">
            <p className="font-bold text-mediumBlue">Total</p>
            <p className="font-bold text-mediumBlue">{total}</p>
          </div>
        </div>
      )}
       <div className="relative my-4 py-4 flex flex-row w-11/12 pt-4 text-center justify-center bottom-2 items-center space-x-2">
          {/* <button
            className="flex-1 bg-darkGray text-white py-2 rounded-lg"
            onClick={() => {
              //Add new Test
            }}
          >
            <p className="font-light text-white text-center">Add Test</p>
          </button> */}
          <button
            className="flex-1 bg-darkGray text-white py-2 rounded-lg"
            onClick={() => {
              setCurrentPage("registration")
            }}
          >
            <p className="font-light text-white text-center">Proceed</p>
          </button>
        </div>
    </div>
  );
};

export default MedicalTestsPicker;
