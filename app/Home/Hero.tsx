"use client"
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Slider1 from "./Slider1.jpeg";
import Slider2 from "./Slider2.webp";
import liwonde from "./liwonde.jpeg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import "./Styles/HeroSection.css";
import HeroText from "@/componets/HeroText";
function Hero() {
  const sliderImages = [Slider1, Slider2, liwonde];
  const sliderTitles = [
    "Experience Exceptional Healthcare Today!",
    "Discover Our Specialized Medical Services!",
    "Your Path to Health and Wellness Starts Here!",
  ];
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-green-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-green-600 hover-bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // autoplaySpeed: 5500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="relative">
      <Slider {...settings} className="min-h-screen w-full">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-full bg-cover bg-no-repeat"
            >
              <Image
                src={image}
                alt={`banner-${index + 1}`}
                className="w-full h-full relative"
                priority={index === 0}
              />
             
                {" "}
                <div
                >
                  {" "}
                  <h1 className="hospital-name">
                    <span className="span">|</span>
                    <HeroText title={sliderTitles[index]}/>
                  </h1>
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
export default Hero;
