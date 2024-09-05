"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-8">
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-green">
                <span className="font-semibold text-[34px]">LOGO</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-12 text-[20px]">
              <Link
                href="/"
                className="py-5 px-3 text-gray hover:text-gray-900"
              >
                รายวิชา
              </Link>
              <Link
                href="/about"
                className="py-5 px-3 text-gray hover:text-gray-900"
              >
                ถ่ายทอดสด
              </Link>
              <Link
                href="/contact"
                className="py-5 px-3 text-gray hover:text-gray-900"
              >
                กระทู้คำถาม
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/"
              className="py-2 px-5 font-normal text-[16px] bg-[#EFEFEF] rounded-xl"
            >
              ออกจากระบบ
            </Link>
            <div className="relative">
              <button
                className="flex items-center py-2 px-5 bg-[#1C1C29] text-[16px] text-white rounded-xl"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <Image
                  src="/h01.png"
                  width={50}
                  height={50}
                  alt="Profile"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="mr-2">Siriwat Rachanon</span>
                <Image
                  src="/arrow-down.png"
                  width={20}
                  height={20}
                  alt="Dropdown Arrow"
                  className={`transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Settings
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          รายวิชา
        </Link>
        <Link
          href="/about"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          ถ่ายทอดสด
        </Link>
        <Link
          href="/contact"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          กระทู้คำถาม
        </Link>
        <div className="relative w-full">
          <button
            className="flex w-full items-center py-2 px-5 bg-[#1C1C29] text-[16px] text-white justify-between"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex items-center">
              <Image
                src="/h01.png"
                width={50}
                height={50}
                alt="Profile"
                className="w-6 h-6 rounded-full mr-2"
              />
              <span>Siriwat Rachanon</span>
            </div>
            <Image
              src="/arrow-down.png"
              width={20}
              height={20}
              alt="Dropdown Arrow"
              className={`transition-transform ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className=" relative right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-full">
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Settings
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/signup"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          ออกจากระบบ
        </Link>
      </div>
    </nav>
  );
}
