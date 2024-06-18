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
  setMedicalTestPickerState,
  setRegistrationState,
}) => {
  var total = selectedMedicalTestsPackageCost
  const handleCheckboxChange = (e) => {
    console.log("cb - " + e.target.checked)
    console.log("cb - " + e.target.value)
    console.log("cb - " + allIndividualTests)

    var test_name = e.target.value
    var test_price = 0
    if (allIndividualTests[test_name] != null) {
      test_price = parseFloat(allIndividualTests[test_name])
    }
    console.log("cb - test_price - " + test_price)
    if (test_price > 0) {
      if (e.target.checked) {
        selectedIndividualList.push(test_name)
        total = total + test_price
      }
      else {
        selectedIndividualList.pop(test_name)
        total = total - test_price
      }
    }
    setSelectedIndividualListCost(total)
    console.log("cb - total - " + total)
  }
  //Function is used for handling only the main 4 packages which are there.
  var items = []
  var cb_checked = "checked"
  if (selectedMedicalTestIndividualList != null) {
    console.log("selectedMedicalTestIndividualList----------");
    console.log(selectedMedicalTestIndividualList);
    for (let i = 0; i < selectedMedicalTestIndividualList.length; i++) {
      items.push(
        <div class="items-center py-2">
          <div class="flex flex-row justify-between h-6 px-6">
            <div className="text-left text-darkBlue text-sm justify-items-start items-center"> {selectedMedicalTestIndividualList[i]["display_value"]}</div>
            <div className="items-center justify-items-end px-10 "><input class="rounded-checkbox" type="checkbox" name="individual_tests_cb" value={selectedMedicalTestIndividualList[i]["display_value"]} defaultChecked={cb_checked} onChange={(event) => handleCheckboxChange(event)} /></div>
          </div>
          <div class="border-b border-1 border-mediumBlue divide-dotted w-3/5"></div>
        </div>
      )
    }
  }

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
        {selectedMedicalTests && (
          <>
            <div class="items-center h-3/5">
              <div class="rounded-xl bg-lightBlueBG overflow-auto">
                <div class="items-center">
                  <div class="rounded-lg bg-darkBlue font-bold">{selectedMedicalTests}</div>
                </div>
                <div class="w-full border-b border-2 border-mediumBlue px-2"></div>
                <div class="grid grid-cols-2 py-2">
                  {items}
                </div>
              </div>
              <div class="w-full border-b border-2 border-mediumBlue"></div>
              <div class="grid grid-cols-2 py-2">
                <p class="font-bold text-mediumBlue items-end">Total</p>
                <p class="font-bold text-mediumBlue items-start">{total}</p>
              </div >
            </div>
          </>
        )}

        <div className="absolute flex   w-11/12 pb-4 text-center justify-center bottom-2 items-center space-x-2">
          <button
            className="w-full starting_button bg-darkGray lg:w-1/4"
            onClick={(e) => {
              setMedicalTestPickerState(false);
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
export default MedicalTestsPicker;
