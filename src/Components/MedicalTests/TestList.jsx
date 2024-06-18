
const DisplayTestList = ({ individualTestList, packageCost }) => {
  var items = []
  console.log("Display test----------");
  console.log(individualTestList);
  for (let i = 0; i < individualTestList.length; i++) {
    items.push(<div className="text-left text-mediumBlue text-sm"> {individualTestList[i]["display_value"]}</div>)
  }

  return (
    <>
      <p className="font-bold text-mediumBlue">Your Tests</p>
      <div class="h-full py-2">
        <div class="grid grid-cols-2 py-2">
          {items}
        </div>
        <div class="w-full border-b border-2 border-mediumBlue"></div>
        <div class="grid grid-cols-2 py-2">
          <p class="font-bold text-mediumBlue text-left">Total</p>
          <p class="font-bold text-mediumBlue text-right">{packageCost}</p>
        </div >
      </div >
    </>
  );
};
export default DisplayTestList;
