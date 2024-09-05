import React from "react";
import Image from "next/image";
import CardOnline from "./CardOnline";

const CourseOnline = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 pt-24">
        <div className="flex items-center space-x-4 w-full pb-12">
          <Image src="/icon01.png" width={50} height={50} alt="icon" />
          <p className="text-black pt-1 font-bold text-[24px] flex-grow">
            คอร์สออนไลน์
          </p>
          <div className="ml-auto">
            <button
              type="button"
              className="py-2 px-6 text-[18px] font-medium text-[#A8AD00] bg-transparent border border-[#A8AD00] rounded-3xl hover:opacity-70"
            >
              ดูทั้งหมด
            </button>
          </div>
        </div>

        <CardOnline />
      </div>
    </div>
  );
};

export default CourseOnline;
