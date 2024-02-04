"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slider_1 from "@public/assets/images/slider-1.jpg";
import slider_2 from "@public/assets/images/slider-2.jpg";
import "@src/components/Hero/Hero.css";

export default function Hero() {
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
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNextBtn = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handlePrevBtn = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      key={currentIndex}
      className="over group relative w-screen overflow-x-hidden bg-cover bg-center py-[10rem] text-white xl:py-[19rem]"
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    >
      <div className="progress"></div>
      <button
        onClick={handleNextBtn}
        className="flex-center hover: invisible absolute left-10 top-1/2 -translate-y-1/2 rounded-full bg-white p-1 text-[var(--secondary-color)] transition hover:bg-black hover:text-white xl:group-hover:visible"
      >
        <ChevronLeft className="fill-nonex relative h-8 w-8" />
      </button>
      <div className="mx-auto w-[90%] xl:w-[65%]">
        <div className="relative z-10">
          <p className="animate-text text-4xl font-bold">
            Lighting <br /> Creative Furniture
          </p>
          <p
            className="animate-text mb-12 mt-4 text-sm"
            style={{ animationDuration: "1.2s" }}
          >
            From luxury watches and chronographs to wall clocks <br /> and
            weather stations, Henning Koppel's.
          </p>
          <a
            href="/shop"
            className="animate-btn animate-btn-scale bg-white px-10 py-3 text-sm font-medium text-black"
          >
            <span>DISCOVER NOW</span>
          </a>
        </div>
      </div>
      <button
        onClick={handlePrevBtn}
        className="flex-center hover: invisible absolute right-10 top-1/2 -translate-y-1/2  rounded-full bg-white p-1 text-[var(--secondary-color)] transition hover:bg-black hover:text-white xl:group-hover:visible"
      >
        <ChevronRight className="h-8 w-8 fill-none" />
      </button>
    </div>
  );
}
