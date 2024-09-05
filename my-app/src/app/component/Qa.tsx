import React from "react";
import Image from "next/image";

const Qa: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 pt-36 pb-20">
      <div className="flex items-center space-x-4 pb-10">
        <Image src="/icon01.png" width={50} height={50} alt="icon" />
        <p className="text-black pt-1 font-bold text-[24px]">ตั้งกระทู้คำถาม</p>
      </div>
      <form className="max-w-screen mx-auto border rounded-3xl p-20 shadow-xl">
        <div className="mb-5">
          <label
            htmlFor="post"
            className="block mb-2 text-[20px] font-bold text-black "
          >
            หัวข้อกระทู้
          </label>
          <input
            type="post"
            id="post"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
            placeholder="หัวข้อกระทู้"
            required
          />
        </div>
        <div className="mb-5 pt-4">
          <label
            htmlFor="content"
            className="block mb-2 text-[20px] font-bold text-black"
          >
            เนื้อหา
          </label>
          <textarea
            id="content"
            className="bg-gray-50 min-h-[7rem] border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 resize-none"
            required
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="text-white bg-[#A8AD00] hover:opacity-80 focus:ring-4 focus:outline-none font-medium rounded-xl text-[24px] px-16 py-2"
          >
            ส่ง
          </button>
        </div>
      </form>
    </div>
  );
};

export default Qa;
