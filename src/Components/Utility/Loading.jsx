import React from "react";

const Loading = () => {
  return (
    <>
      <div className=" fixed inset-0 bg-slate-700 bg-opacity-40 flex items-center justify-center z-50 space-x-1">
        <div className="animate-bounce200 rounded-full bg-darkBlue w-10 h-10 opacity-75"></div>
        <div className="animate-bounce400 rounded-full bg-mediumBlue w-10 h-10 opacity-75"></div>
        <div className="animate-bounce600 rounded-full bg-lightBlue w-10 h-10 opacity-75"></div>
      </div>
    </>
  );
};

export default Loading;
