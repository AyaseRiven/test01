"use client";
import React, { useState } from "react";
import Card from "./Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      imageSrc: "/cardc01.png",
      title: "Generative AI and ChatGPT: Design Thinking Edition",
      description: "Generative AI and ChatGPT: Design Thinking Edition",
      progress: 0,
      bgColor: "bg-blue-500",
    },
    {
      imageSrc: "/cardc02.png",
      title: "Future of AI in Education",
      description: "Exploring how AI is transforming education.",
      progress: 70,
      bgColor: "bg-[#2A005FCC]",
    },
    {
      imageSrc: "/cardc03.png",
      title: "AI for Healthcare Innovation",
      description: "AI applications in modern healthcare systems.",
      progress: 60,
      bgColor: "bg-[#00123FCC]",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-screen-2xl mx-auto relative flex justify-center">
      {/* Carousel Container */}
      <div className="max-w-screen-2xl relative flex items-center">
        <div className="relative flex overflow-x-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              whiteSpace: "nowrap", // Ensure cards are displayed in a single line
            }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                progress={card.progress}
                bgColor={card.bgColor}
              />
            ))}
          </div>
        </div>

        {/* Previous Arrow */}
        <button
          className="absolute top-1/2 -left-10 transform -translate-y-1/2 p-2 bg-transparent border border-gray-500 text-gray-500 rounded-full z-20"
          onClick={handlePrevClick}
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Next Arrow */}
        <button
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 p-2 bg-transparent border border-gray-500 text-gray-500 rounded-full z-20"
          onClick={handleNextClick}
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
