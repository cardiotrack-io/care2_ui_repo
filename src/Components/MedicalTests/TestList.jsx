const DisplayTestList = ({
  individualTestList,
  packageCost,
  selectedMedicalTests,
  systemCost,
}) => {
  return (
    <>
      <p className="font-bold text-mediumBlue">{selectedMedicalTests}</p>
      <div className="py-2 w-100">
        <ul className="list-disc list-inside md:list-outside md:pl-5">
          <div className="grid grid-cols-1 gap-2 py-2">
            {individualTestList.map((test, index) => (
              <li key={index} className="text-left text-mediumBlue text-sm">
                {test.display_value}
              </li>
            ))}
          </div>
        </ul>
        <div className="w-full border-b border-2 border-mediumBlue"></div>
        <div className="grid grid-cols-3 py-2">
          <p className="font-bold text-mediumBlue text-left">Total</p>
          <div className="text-center">
            <p className="font-bold text-mediumBlue line-through">
              {systemCost}
            </p>
            <p className="text-xs text-yellow-600">30% off</p>
          </div>
          <p className="font-bold text-mediumBlue text-right">{packageCost}</p>
        </div>
      </div>
    </>
  );
};

export default DisplayTestList;
