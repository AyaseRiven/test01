import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

const Card = ({ imageSrc, title, description, progress, bgColor }) => {
  return (
    <div className="flex-shrink-0 max-w-sm bg-white border border-gray-200 rounded-3xl shadow mx-4 overflow-hidden">
      <div className="relative">
        {/* Image */}
        <Image
          className="rounded-t-3xl"
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 ${bgColor} opacity-70 rounded-t-3xl`}
        ></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-start p-4">
          <div className="text-[18px] font-medium text-white text-left overflow-hidden overflow-ellipsis whitespace-nowrap">
            {title}
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="mb-3 font-normal text-black overflow-hidden text-ellipsis">
          {description}
        </p>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default Card;
