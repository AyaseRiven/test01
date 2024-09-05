import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="relative pt-8">
      <div className="flex mb-2 items-center justify-between">
        <div className="text-[16px] font-semibold inline-block py-1 px-2 ">
          เรียนไปแล้ว {progress}%
        </div>
      </div>
      <div className="flex">
        <div
          className="relative flex-col h-2 text-xs flex-grow bg-[#EEEEEE] rounded-full"
          style={{ width: `${progress}%` }}
        >
          <span
            className="absolute h-2 text-xs flex-grow bg-[#A8AD00] rounded-full"
            style={{ width: `${progress}%` }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
