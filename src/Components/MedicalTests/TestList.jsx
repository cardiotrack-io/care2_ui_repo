const DisplayTestList = ({ individualTestList, packageCost }) => {
  return (
    <>
      <p className="font-bold text-mediumBlue">Your Tests</p>
      <div className="py-2">
        <div className="grid grid-cols-2 py-2">
          {individualTestList.map((test, index) => (
            <div key={index} className="text-left text-mediumBlue text-sm">
              {test.display_value}
            </div>
          ))}
        </div>
        <div className="w-full border-b border-2 border-mediumBlue"></div>
        <div className="grid grid-cols-2 py-2">
          <p className="font-bold text-mediumBlue text-left">Total</p>
          <p className="font-bold text-mediumBlue text-right">{packageCost}</p>
        </div>
      </div>
    </>
  );
};

export default DisplayTestList;
