import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 mt-12">
      <div className="flex flex-row">
        <div className="basis-1/2">
          <p className="text-green font-medium">
            Lorem Ipsum is simply dummy .
          </p>
          <div className="pt-2">
            <h1 className="text-[52px] font-semibold">learn anytime,</h1>
            <h1 className="text-[52px] font-semibold">anywhere</h1>
            <h1 className="text-[52px] font-semibold">
              with
              <span className="text-green pl-6">Lorem</span>
            </h1>
            <div className="relative">
              <Image
                src="/line01.png"
                width={200}
                height={200}
                alt="Decorative Line"
                className="pl-28 pr-32 w-[70%] h-6"
              />
            </div>
          </div>
          <form className="max-w-7xl mx-auto pt-16 pr-10">
            <div className="relative w-full">
              <Image
                src="/search-normal.png"
                width={20}
                height={20}
                alt="search"
                className="absolute top-1/2 left-6 transform -translate-y-1/2"
              />
              <input
                type="search"
                id="location-search"
                className="block pl-14 p-2 w-full text-[24px] text-gray-900 rounded-xl border leading-3"
                placeholder="ค้นหาหลักสูตร"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 h-full px-10 text-[24px] font-medium text-white bg-[#A8AD00] rounded-r-xl border border-transparent"
              >
                <span>ค้นหา</span>
              </button>
            </div>
          </form>
        </div>
        <div className="basis-1/3 px-2">
          <div className="block bg-black w-full h-[36rem] rounded-3xl overflow-hidden">
            <div
              className="relative h-full bg-white py-10 pl-12 pr-24 shadow-xl rounded-3xl"
              style={{
                backgroundImage: "url('/com.png')",
                backgroundColor: "rgba(0, 46, 42, 0.95)",
                backgroundBlendMode: "overlay",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h5 className="mb-2 text-[32px] font-bold text-white">
                    Generative AI and ChatGPT: Design Thinking Edition
                  </h5>
                  <p className="mb-4 text-[24px] text-white">
                    ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI
                  </p>
                </div>
                <div className="py-2 bg-transparent text-[16px] text-white rounded-xl">
                  <div className="flex items-center">
                    <Image
                      src="/h02.png"
                      width={100}
                      height={100}
                      alt="Profile"
                      className="w-14 h-14 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-left">ณัฐกานต์ สิทธิชัยอนันต์</p>
                      <p className="text-left">CEO Y.I.M Corporation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[14%] px-2">
          <div className="rounded-3xl">
            <Image
              src="/card1.png"
              width={100}
              height={100}
              alt="search"
              className=" w-full h-[36rem] "
            />
          </div>
        </div>
        {/* <div className="basis-[14%] px-2">
          <div className="block w-full h-[36rem] rounded-3xl overflow-hidden">
            <div className="w-full h-[36rem] relative overflow-hidden z-10 bg-[url('/com04.png')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-[#95FFE5E5] before:opacity-75 before:z-[-5] flex flex-col justify-between pt-20">
              <h1 className="w-auto px-1 py-10 text-black font-bold text-[26px] -rotate-90">
                Generative ChatGPT: UX Design Edition
              </h1>

              <div className="py-10 px-5 bg-transparent text-[16px] text-white rounded-xl flex items-center justify-center text-center">
                <div className="flex items-center justify-center -ml-6">
                  <Image
                    src="/h03.png"
                    width={100}
                    height={100}
                    alt="Profile"
                    className="w-14 h-14 rounded-full"
                  />
                </div>
              </div>
            </div>
            Ï
          </div>
        </div> */}
        <div className="basis-[14%] px-2">
          <div className="rounded-3xl">
            <Image
              src="/card2.png"
              width={100}
              height={100}
              alt="search"
              className=" w-full h-[36rem] "
            />
          </div>
        </div>
        {/* <div className="basis-[14%] px-2">
          <div className="block w-full h-[36rem] rounded-3xl overflow-hidden">
            <div className="w-full h-[36rem] relative overflow-hidden z-10 bg-[url('/com3.png')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-[#FCFF8BE5] before:opacity-75 before:z-[-5] flex flex-col justify-between pt-20">
              <h1 className="w-auto px-1 py-16 text-black font-bold text-[26px] -rotate-90">
                UX Accelerator Bundle
              </h1>

              <div className="py-10 px-5 bg-transparent text-[16px] text-white rounded-xl flex items-center justify-center text-center">
                <div className="flex items-center justify-center -ml-6">
                  <Image
                    src="/h02.png"
                    width={100}
                    height={100}
                    alt="Profile"
                    className="w-14 h-14 rounded-full"
                  />
                </div>
              </div>
            </div>
            Ï
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
