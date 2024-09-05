import React from "react";
import Image from "next/image";

const Blogs = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 pt-24">
        <div className="flex items-center space-x-4 w-full pb-4">
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
              <div className="flex flex-wrap gap-4 py-1 px-10">
                {/* Card 1 */}
                <div className="w-full">
                  <div className="w-full">
                    <a
                      href="#"
                      className="flex flex-col items-center w-full bg-white border border-gray-200  rounded-3xl shadow md:flex-row"
                    >
                      <div className="relative w-full h-[24rem] rounded-tl-3xl rounded-bl-3xl overflow-hidden bg-transparent">
                        <Image
                          src="/c1.png" // Path to your card image
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
                        <div className="relative z-10 flex flex-col h-full justify-between px-6 pt-6">
                          <div>
                            <h5 className="mb-10 text-[26px] font-bold text-white uppercase">
                              profit / loss of stocks in the portfolio
                            </h5>
                          </div>
                          <div className="pt-2 text-[16px] text-white">
                            <div className="flex items-center">
                              <Image
                                src="/hand.png"
                                width={100}
                                height={100}
                                alt="Profile"
                                className=" w-40 h-40"
                              />
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between p-4 leading-normal bg-white">
                        <div className="pb-5">
                          <button
                            type="button"
                            className="py-1 px-6 text-[16px] font-medium text-[#00665E] bg-transparent border border-[#00665E] rounded-3xl hover:opacity-70"
                          >
                            Business
                          </button>
                        </div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          กำไร/ขาดทุนของหุ้นในพอร์ต ต้องดูอย่างไร?
                        </h5>
                        <p className="mb-3 font-normal text-gray-700">
                          เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ
                          การติดตามดูข้อมูลของหุ้น
                          ในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือ ขาดทุนมากน้อยเท่าใด?
                        </p>
                        <div className="pt-10 bg-transparent text-[16px] text-white rounded-xl">
                          <div className="flex items-center">
                            <Image
                              src="/clock.png"
                              width={20}
                              height={20}
                              alt="Profile"
                              className="w-6 h-6 rounded-full mr-3"
                            />
                            <div>
                              <p className="text-left text-gray">
                                29 กรกฎาคม 2023
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Image
                              src="/eye.png"
                              width={20}
                              height={20}
                              alt="Profile"
                              className="w-6 h-6 rounded-full mr-3"
                            />
                            <div>
                              <p className="text-left text-gray">
                                เข้าชม 240 ครั้ง
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full">
                  <div className="w-full">
                    <a
                      href="#"
                      className="flex flex-col items-center w-full bg-white border border-gray-200  rounded-3xl shadow md:flex-row"
                    >
                      {/* ส่วนที่เป็นรูปภาพ */}
                      <div className="relative w-[43%] h-[24rem] rounded-tl-3xl rounded-bl-3xl overflow-hidden bg-transparent">
                        <Image
                          src="/c2.png" // Path to your card image
                          width={100}
                          height={100}
                          alt="Card Image"
                          className="absolute inset-0 object-cover w-full h-full"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundColor: "#002E3DE5", // New semi-transparent overlay color
                            zIndex: 1, // Ensure overlay is above the image
                          }}
                        />
                        <div className="relative z-10 flex flex-col h-full justify-between px-6 pt-6">
                          <div>
                            <h5 className="mb-10 text-[26px] font-bold text-white uppercase">
                              What is a Data Engineer
                            </h5>
                          </div>
                          <div className="pt-2 text-[16px] text-white">
                            <div className="flex items-center">
                              <Image
                                src="/lb.png"
                                width={100}
                                height={100}
                                alt="Profile"
                                className=" w-40 h-40"
                              />
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ส่วนที่เป็นเนื้อหา */}
                      <div className="flex flex-col justify-between w-1/2 p-8 leading-normal bg-white">
                        <div className="pb-5">
                          <button
                            type="button"
                            className="py-1 px-6 text-[16px] font-medium text-[#00665E] bg-transparent border border-[#00665E] rounded-3xl hover:opacity-70"
                          >
                            Data
                          </button>
                        </div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Data Engineer คืออะไร?
                        </h5>
                        <p className="mb-3 font-normal text-gray-700">
                          Data Engineer
                          คือคนที่ทำงานกับหลากหลายเครื่องมือเพื่อรวบรวมข้อมูล
                          จัดการข้อมูล
                          และเปลี่ยนข้อมูลดิบให้พร้อมใช้งานสำหรับทั้ง Data
                          Scientist และ Data Analyst
                        </p>
                        <div className="pt-10 bg-transparent text-[16px] text-white rounded-xl">
                          <div className="flex items-center">
                            <Image
                              src="/clock.png"
                              width={20}
                              height={20}
                              alt="Profile"
                              className="w-6 h-6 rounded-full mr-3"
                            />
                            <div>
                              <p className="text-left text-gray">
                                29 กรกฎาคม 2023
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Image
                              src="/eye.png"
                              width={20}
                              height={20}
                              alt="Profile"
                              className="w-6 h-6 rounded-full mr-3"
                            />
                            <div>
                              <p className="text-left text-gray">
                                เข้าชม 240 ครั้ง
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-1/2">
              <div className="flex flex-wrap gap-4">
                {/* Card 1 */}
                <div className="w-full h-[270px]">
                  <div className="w-full h-full">
                    <a
                      href="#"
                      className="flex flex-col items-center w-full h-full bg-white border border-gray-200 rounded-3xl shadow md:flex-row"
                    >
                      <div className="relative w-[100%] h-full rounded-tl-3xl rounded-bl-3xl overflow-hidden bg-transparent">
                        <Image
                          src="/c3.png" // Path to your card image
                          width={100}
                          height={100}
                          alt="Card Image"
                          className="absolute inset-0 object-cover w-full h-full"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundColor: "#0D2E6DCC", // New semi-transparent overlay color
                            zIndex: 1, // Ensure overlay is above the image
                          }}
                        />
                        <div className="relative z-10 flex items-center justify-center h-full px-6 pt-6">
                          <h5 className="mb-10 text-[22px] font-bold text-white uppercase text-center">
                            สารแทนน้ำตาล ไม่อันตราย
                          </h5>
                        </div>
                      </div>

                      <div className="flex flex-col h-full p-2 leading-normal bg-white">
                        <button
                          type="button"
                          className="py-5 px-3 text-[12px] text-left font-medium text-[#00665E] bg-transparent  rounded-3xl hover:opacity-70"
                        >
                          Science
                        </button>
                        <div>
                          <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900">
                            สารแทนน้ำตาลไม่อันตราย
                          </h5>
                          <p className="mb-1 font-normal text-gray-700 text-[16px]">
                            สาเหตุที่องค์การอนามัยโลกให้คำแนะนำดังกล่าวมาจากผลการวิจัยล่าสุดที่ชี้ว่าสารแทนน้ำตาลไม่มีประโยชน์ต่อการช่วยลดน้ำหนักหรือลดระดับน้ำตาล
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full h-[270px]">
                  <div className="w-full h-full">
                    <a
                      href="#"
                      className="flex flex-col items-center w-full h-full bg-white border border-gray-200  rounded-3xl shadow md:flex-row"
                    >
                      <div className="relative w-[90%] h-full rounded-tl-3xl rounded-bl-3xl overflow-hidden bg-transparent">
                        <Image
                          src="/c4.png" // Path to your card image
                          width={100}
                          height={100}
                          alt="Card Image"
                          className="absolute inset-0 object-cover w-full h-full"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundColor: "#151C59CC", // New semi-transparent overlay color
                            zIndex: 1, // Ensure overlay is above the image
                          }}
                        />
                        <div className="relative z-10 flex items-center justify-center h-full px-6 pt-6">
                          <h5 className="mb-10 text-[22px] font-bold text-white uppercase text-center">
                            Data Pipelines with Airflow
                          </h5>
                        </div>
                      </div>

                      <div className="flex flex-col h-full p-2 leading-normal bg-white">
                        <button
                          type="button"
                          className="py-5 px-3 text-[12px] text-left font-medium text-[#00665E] bg-transparent  rounded-3xl hover:opacity-70"
                        >
                          Tech
                        </button>
                        <div>
                          <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900">
                            Data Pipelines with Airflow
                          </h5>
                          <p className="mb-1 font-normal text-gray-700 text-[16px]">
                            เรียนรู้การสร้าง End-to-End Data Pipelines โดยใช้
                            Apache Airflow ตั้งแต่อ่านข้อมูล ทำความสะอาด
                            ปรับให้อยู่ในรูปแบบที่เหมาะสม
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="w-full h-[270px]">
                  <div className="w-full h-full">
                    <a
                      href="#"
                      className="flex flex-col items-center w-full h-full bg-white border border-gray-200  rounded-3xl shadow md:flex-row"
                    >
                      <div className="relative w-[90%] h-full rounded-tl-3xl rounded-bl-3xl overflow-hidden bg-transparent">
                        <Image
                          src="/c5.png" // Path to your card image
                          width={100}
                          height={100}
                          alt="Card Image"
                          className="absolute inset-0 object-cover w-full h-full"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundColor: "#0D2E6DCC", // New semi-transparent overlay color
                            zIndex: 1, // Ensure overlay is above the image
                          }}
                        />
                        <div className="relative z-10 flex items-center justify-center h-full px-6 pt-6">
                          <h5 className="mb-10 text-[22px] font-bold text-white uppercase text-center">
                            ร่างกายสามารถ ย้อนวัย “อายุชีวภาพ”
                          </h5>
                        </div>
                      </div>

                      <div className="flex flex-col h-full p-2 leading-normal bg-white">
                        <button
                          type="button"
                          className="py-5 px-3 text-[12px] text-left font-medium text-[#00665E] bg-transparent  rounded-3xl hover:opacity-70"
                        >
                          Science
                        </button>
                        <div>
                          <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900">
                            ร่างกายสามารถย้อนวัย “อายุชีวภาพ”
                          </h5>
                          <p className="mb-1 font-normal text-gray-700 text-[16px]">
                            ความอ่อนเยาว์หรือแก่ชราของเซลล์และอวัยวะมนุษย์นั้น
                            วัดกันด้วย “อายุชีวภาพ” (biological age)
                            ซึ่งอาจจะแตกต่างจากอายุจริง
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
