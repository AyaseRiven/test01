import React from "react";
import Image from "next/image";

const CardOnline = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* 1 */}
      <div className="relative w-full h-[36rem] rounded-3xl overflow-hidden bg-transparent">
        <Image
          src="/co1.png" // Path to your card image
          width={100}
          height={100}
          alt="Card Image"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#FCFF8BE5", // New semi-transparent overlay color
            zIndex: 1, // Ensure overlay is above the image
          }}
        />
        <div className="relative z-10 flex flex-col h-full justify-between p-6">
          <div>
            <div className="pb-5">
              <button
                type="button"
                className="py-1 px-6 text-[16px] font-medium text-[#7B7B7B] bg-transparent border border-[#7B7B7B] rounded-3xl hover:opacity-70"
              >
                Business
              </button>
            </div>
            <h5 className="mb-10 text-[24px] font-bold text-black">
              ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัย พื้นฐาน
            </h5>
            <p className="mb-4 text-[20px] text-black">
              รู้และเข้าใจปัจจัยที่ส่งผล กระทบต่อราคาหุ้น
            </p>
          </div>
          <div className="py-2 text-[16px] text-black rounded-xl">
            <div className="flex items-center">
              <Image
                src="/h1.png"
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
      {/* 1 */}
      {/* 2 */}
      <div className="relative w-full h-[36rem] rounded-3xl overflow-hidden bg-transparent">
        <Image
          src="/co2.png" // Path to your card image
          width={100}
          height={100}
          alt="Card Image"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#000D2EE5", // New semi-transparent overlay color
            zIndex: 1, // Ensure overlay is above the image
          }}
        />
        <div className="relative z-10 flex flex-col h-full justify-between p-6">
          <div>
            <div className="pb-5">
              <button
                type="button"
                className="py-1 px-6 text-[16px] font-medium text-[#7B7B7B] bg-transparent border border-[#7B7B7B] rounded-3xl hover:opacity-70"
              >
                Data
              </button>
            </div>
            <h5 className="mb-10 text-[24px] font-bold text-white">
              Progressive Web Application
            </h5>
            <p className="mb-4 text-[20px] text-white">
              การพัฒนา Application ด้วยคอนเซ็ปท์ Progressive Web
              Application(PWA)
            </p>
          </div>
          <div className="py-2 text-[16px] text-white rounded-xl">
            <div className="flex items-center">
              <Image
                src="/h2.png"
                width={100}
                height={100}
                alt="Profile"
                className="w-14 h-14 rounded-full mr-3"
              />
              <div>
                <p className="text-left">ปัญจมพงศ์ เสริมสวัสดิ์ศรี</p>
                <p className="text-left">Google Developers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      {/* 3 */}
      <div className="relative w-full h-[36rem] rounded-3xl overflow-hidden bg-transparent">
        <Image
          src="/co3.png" // Path to your card image
          width={100}
          height={100}
          alt="Card Image"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#95FFE5E5", // New semi-transparent overlay color
            zIndex: 1, // Ensure overlay is above the image
          }}
        />
        <div className="relative z-10 flex flex-col h-full justify-between p-6">
          <div>
            <div className="pb-5">
              <button
                type="button"
                className="py-1 px-6 text-[16px] font-medium text-[#7B7B7B] bg-transparent border border-[#7B7B7B] rounded-3xl hover:opacity-70"
              >
                Science
              </button>
            </div>
            <h5 className="mb-10 text-[24px] font-bold text-black">
              React Hooks in Action
            </h5>
            <p className="mb-4 text-[20px] text-black">
              เรียนรู้การเขียน React Hooks แบบ Best Practice
            </p>
          </div>
          <div className="py-2 text-[16px] text-black rounded-xl">
            <div className="flex items-center">
              <Image
                src="/h3.png"
                width={100}
                height={100}
                alt="Profile"
                className="w-14 h-14 rounded-full mr-3"
              />
              <div>
                <p className="text-left">วรัทธน์ วงศ์มณีกิจ</p>
                <p className="text-left">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      {/* 4 */}
      <div className="relative w-full h-[36rem] rounded-3xl overflow-hidden bg-transparent">
        <Image
          src="/co4.png" // Path to your card image
          width={100}
          height={100}
          alt="Card Image"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#06002EB0", // New semi-transparent overlay color
            zIndex: 1, // Ensure overlay is above the image
          }}
        />
        <div className="relative z-10 flex flex-col h-full justify-between p-6">
          <div>
            <div className="pb-5">
              <button
                type="button"
                className="py-1 px-6 text-[16px] font-medium text-[#7B7B7B] bg-transparent border border-[#7B7B7B] rounded-3xl hover:opacity-70"
              >
                Tech
              </button>
            </div>
            <h5 className="mb-10 text-[24px] font-bold text-white">
              Generative AI and ChatGPT: Design Thinking Edition
            </h5>
            <p className="mb-4 text-[20px] text-white">
              ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI
            </p>
          </div>
          <div className="py-2 text-[16px] text-white rounded-xl">
            <div className="flex items-center">
              <Image
                src="/h4.png"
                width={100}
                height={100}
                alt="Profile"
                className="w-14 h-14 rounded-full mr-3"
              />
              <div>
                <p className="text-left">ทัศน์พล รัชตะสัมฤทธิ์</p>
                <p className="text-left">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4 */}
    </div>
  );
};

export default CardOnline;
