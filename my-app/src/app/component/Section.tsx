import React from "react";
import Image from "next/image";

const Section = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 pt-36">
      <div className="flex items-center space-x-4">
        <Image src="/icon01.png" width={50} height={50} alt="icon" />
        <p className="text-black pt-1 font-bold text-[24px]">
          เลือกเรียนตามหัวข้อที่สนใจ
        </p>
      </div>
      <div className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="max-w-sm max-h-64 pt-10 pb-2 pl-10 pr-5 bg-white border border-gray-200 rounded-3xl shadow">
            <div className="flex items-center space-x-4">
              <Image src="/data.png" width={30} height={30} alt="icon" />
              <p className="text-black pt-1 font-bold text-[22px]">Data</p>
            </div>
            <p className="pt-6 pr-8 mb-3 font-normal text-gray text-[18px]">
              เรียนรู้และฝึกฝนกระบวนการคิด สร้างมูลค่าให้ธุรกิจด้วยข้อมูล
            </p>
            <div className="flex justify-end pt-6  items-end">
              <a
                href="#"
                className="inline-flex items-end px-3 py-2 text-sm font-medium"
              >
                <Image
                  src="/arrow-right.png"
                  width={40}
                  height={40}
                  alt="icon"
                />
              </a>
            </div>
          </div>

          <div className="max-w-sm max-h-64 pt-10 pb-2 pl-10 pr-5 bg-white border border-gray-200 rounded-3xl shadow">
            <div className="flex items-center space-x-4">
              <Image src="/glass.png" width={30} height={30} alt="icon" />
              <p className="text-black pt-1 font-bold text-[22px]">Science</p>
            </div>
            <p className="pt-6 pr-8 mb-3 font-normal text-gray text-[18px]">
              เรียนรู้และฝึกฝนกระบวนการคิด ด้วยกระบวนการทางวิทยาศาสตร์
            </p>
            <div className="flex justify-end pt-6  items-end">
              <a
                href="#"
                className="inline-flex items-end px-3 py-2 text-sm font-medium"
              >
                <Image
                  src="/arrow-right.png"
                  width={40}
                  height={40}
                  alt="icon"
                />
              </a>
            </div>
          </div>

          <div className="max-w-sm max-h-64 pt-10 pb-2 pl-10 pr-5 bg-white border border-gray-200 rounded-3xl shadow">
            <div className="flex items-center space-x-4">
              <Image src="/tree.png" width={30} height={30} alt="icon" />
              <p className="text-black pt-1 font-bold text-[22px]">Tech</p>
            </div>
            <p className="pt-6 pr-8 mb-3 font-normal text-gray text-[18px]">
              พร้อมเป็นที่ต้องการของตลาด แรงงานด้วยทักษะการเขียน โปรแกรม
            </p>
            <div className="flex justify-end  items-end">
              <a
                href="#"
                className="inline-flex items-end px-3 py-2 text-sm font-medium"
              >
                <Image
                  src="/arrow-right.png"
                  width={40}
                  height={40}
                  alt="icon"
                />
              </a>
            </div>
          </div>

          <div className="max-w-sm max-h-64 pt-10 pb-2 pl-10 pr-5 bg-white border border-gray-200 rounded-3xl shadow">
            <div className="flex items-center space-x-4">
              <Image src="/note.png" width={30} height={30} alt="icon" />
              <p className="text-black pt-1 font-bold text-[22px]">Business </p>
            </div>
            <p className="pt-6 pr-8 mb-3 font-normal text-gray text-[18px]">
              พลิกโฉมธุรกิจในยุคดิจิทัลด้วย การเข้าถึงลูกค้าในช่องทาง
              และเวลาที่เหมาะ
            </p>
            <div className="flex justify-end  items-end">
              <a
                href="#"
                className="inline-flex items-end px-3 py-2 text-sm font-medium"
              >
                <Image
                  src="/arrow-right.png"
                  width={40}
                  height={40}
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
