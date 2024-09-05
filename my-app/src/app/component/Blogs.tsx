import React from "react";
import Image from "next/image";

const Blogs = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 pt-24">
        <div className="flex items-center space-x-4 w-full pb-12">
          <Image src="/icon01.png" width={50} height={50} alt="icon" />
          <p className="text-black pt-1 font-bold text-[24px] flex-grow">
            บทความและข่าวสารล่าสุด
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
        <div className="px-4">
          <div className="flex flex-row">
            <div className="basis-1/2">
              <div className="flex flex-wrap gap-4 p-4">
                {/* Card 1 */}
                <div className="w-full">
                  <div className="w-full">
                    <a
                      href="#"
                      className="flex flex-col items-center w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <Image
                        className="object-cover w-full  h-96 md:h-auto md:w-48 "
                        src="/c1.png"
                        alt="Noteworthy technology acquisitions"
                        width={192}
                        height={192}
                      />
                      <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Noteworthy technology acquisitions ssss
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          Here are the biggest enterprise technology
                          acquisitions of 2021 so far, in reverse chronological
                          order.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full bg-blue-700 p-4">
                  <p className="text-white">Blog 2</p>
                </div>
              </div>
            </div>

            <div className="basis-1/2">
              {" "}
              <div className="flex flex-wrap gap-4">
                <div className="w-full md:w-1/2 bg-red-500 p-4">Blog 1</div>
                <div className="w-full md:w-1/2 bg-blue-700 p-4">Blog 2</div>
                <div className="w-full md:w-1/2 bg-blue-700 p-4">Blog 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
