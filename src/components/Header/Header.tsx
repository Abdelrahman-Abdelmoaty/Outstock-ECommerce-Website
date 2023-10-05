"use client";
import "@src/components/Header/Header.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { useEffect, useRef, useState } from "react";
import slider_1 from "@public/assets/images/slider-1.jpg";
import slider_2 from "@public/assets/images/slider-2.jpg";
export default function Header() {
  const slides = [
    {
      url: slider_1.src,
    },
    {
      url: slider_2.src,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev === 0 ? slides.length - 1 : prev - 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const handleNextBtn = () => {
    setCurrentIndex((prev) => {
      return prev === 0 ? slides.length - 1 : prev - 1;
    });
  };
  const handlePrevBtn = () => {
    setCurrentIndex((prev) => {
      return prev === slides.length - 1 ? 0 : prev + 1;
    });
  };
  return (
    <div key={currentIndex} className="py-[300px] px-[17.5%] text-white group relative" style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
      <div className="progress"></div>
      <ArrowBackIosOutlinedIcon className="arrow left-10" onClick={handleNextBtn} />
      <div className="relative z-10">
        <p className="font-bold text-4xl animate-text">
          Lighting <br /> Creative Furniture
        </p>
        <p className="text-sm mt-4 mb-12 animate-text" style={{ animationDuration: "1.2s" }}>
          From luxury watches and chronographs to wall clocks <br /> and weather stations, Henning Koppel's.
        </p>
        <button className="bg-white text-black py-3 px-10 font-medium text-sm animate-btn">
          <span>DISCOVER NOW</span>
        </button>
      </div>
      <ArrowForwardIosOutlinedIcon className="arrow right-10" onClick={handlePrevBtn} />
    </div>
  );
}
