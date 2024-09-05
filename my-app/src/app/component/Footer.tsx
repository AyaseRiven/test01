// components/Footer.tsx

import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center  lg:text-left bg-[#00665E] ">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center border-b-2 border-[#C1C7CD] pt-6 lg:justify-between">
          <div className="me-12 hidden lg:block">
            <Link href="/" className="flex items-center py-1 px-2 text-white">
              <span className="font-semibold text-[64px]">LOGO</span>
            </Link>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className=" text-white ">
              <h6 className="mb-4 text-[20px] flex justify-center font-semibold uppercase md:justify-start">
                คอร์สของเรา
              </h6>
              <p className="mb-4">
                <a href="#!">Data</a>
              </p>
              <p className="mb-4">
                <a href="#!">Science </a>
              </p>
              <p className="mb-4">Tech </p>
              <p>
                <a href="#!">Business</a>
              </p>
            </div>
            <div className=" text-white ">
              <h6 className="mb-4 text-[20px] flex justify-center font-semibold uppercase md:justify-start">
                เกี่ยวกับเรา
              </h6>
              <p className="mb-4">
                <a href="#!">สอนกับเรา</a>
              </p>
              <p className="mb-4">
                <a href="#!">ติดต่อสอบถามเพิ่มเติม </a>
              </p>
              <p className="mb-4">แจ้งปัญหาเกี่ยวกับระบบ </p>
              <p>
                <a href="#!">ช่องทางการร้องเรียน</a>
              </p>
            </div>
            <div className=" text-white ">
              <h6 className="mb-4 text-[20px] flex justify-center font-semibold uppercase md:justify-start">
                ความปลอดภัย
              </h6>
              <p className="mb-4">
                <a href="#!">Privacy Policy</a>
              </p>
              <p className="mb-4">
                <a href="#!">Terms and Conditions </a>
              </p>
              <p className="mb-4">Data Protection Policy Six </p>
              <p>
                <a href="#!">Cookie Policy</a>
              </p>
            </div>
            <div className="flex flex-col h-full text-white">
              <div className="flex-grow">
                <h6 className="mb-4 font-semibold uppercase text-center md:text-left">
                  Lorem Ipsum is simply dummy text of the printing.
                </h6>
                <p className="text-sm font-normal mb-2">
                  199 ม.6 ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230
                </p>
              </div>
              <p className="text-lg font-bold mt-auto text-center md:text-left">
                ติดต่อเรา
              </p>
              <div className="flex pt-5 justify-start space-x-4">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/twitter.png" alt="Twitter" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/instagram.png"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t-2 border-[#C1C7CD] p-8 ">
          <div className="text-white">
            <span>Y.I.M Corporation @ 2023. All rights reserved.</span>
          </div>
          <div className="text-white text-right">
            <span>0-3835-4580-4 , 0-3835-2611-6</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
