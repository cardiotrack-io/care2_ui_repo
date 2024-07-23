import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-50 space-y-4">
      <div className="flex space-x-2">
        <div className="animate-bounce200 rounded-full bg-darkBlue w-10 h-10 opacity-75"></div>
        <div className="animate-bounce400 rounded-full bg-mediumBlue w-10 h-10 opacity-75"></div>
        <div className="animate-bounce600 rounded-full bg-lightBlue w-10 h-10 opacity-75"></div>
      </div>
      {/* <p className="text-darkBlue text-lg font-semibold mt-4">Payment is in process, please do not refresh or go back.</p> */}
    </div>
  );
};

export default Loading;
