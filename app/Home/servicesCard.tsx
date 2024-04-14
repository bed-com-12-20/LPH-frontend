"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/service.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe, faKey, faKitMedical} from "@fortawesome/free-solid-svg-icons";

const ProductImages = () => {
  //slideshow

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="images-body">
      <div className="inside-images">
        <div className="headings in-images">
          <p className="text-4xl font-bold text-center"> 
          <FontAwesomeIcon icon={faKey}/>Our Key Services</p>
          <p className="text-2xl mt-3 text-yellow-300 text-center">
            Explore our comprehensive range of medical services designed to meet
            your healthcare needs.
          </p>
        </div>

        <Slider {...settings}>
          <div className="slides">
            <div
              style={{
                width: "18rem",
                height: "22rem",
                backgroundColor: "green",
                borderRadius: "5px",
              }}
            >
              <Image src={''} alt="" />
              <p className="mt-20 text-center text-2xl">Pharmacy Services</p>
              <p className="text-center mt-3 text-1xl text-yellow-300">
                Pharmacy is responsible for storing medicine, selling medicine,
                Provide pharmaceutical support to clients. it is managed by well
                trained pharmacists
              </p>
              <div className="">
                <a
                  style={{
                    marginLeft: "50px",
                  }}
                  href="Buy"
                  className="mt-3 inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700"
                >
                  Explore Pharmacy
                </a>
              </div>
            </div>
          </div>
          <div className="slides">
            <div
              style={{
                width: "18rem",
                height: "22rem",
                backgroundColor: "green",
              }}
            >
              <p className="mt-20 text-center text-2xl">Reception Services</p>
              <p className="text-center mt-2 text-1xl text-yellow-300">
                Reception is the entry point of all the services.The reception
                is managed by team of well trained receptionist who manages our
                clients. The reception links clients to doctor, pharmacist and
                any other staff
              </p>
              <div className="">
                <a
                  style={{
                    marginLeft: "50px",
                  }}
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700"
                >
                  Explore Reception
                </a>
              </div>
            </div>
          </div>
          <div className="slides">
            <div
              style={{
                width: "18rem",
                height: "22rem",
                backgroundColor: "green",
              }}
            >
               <p className="mt-20 text-center text-2xl">OPD Services</p>
              <p className="text-center mt-2 text-1xl text-yellow-300">
                This is the doctors office each and ever client is warmly Welcome
                to this office and every client is helped accordingly. get any
                medical help from this office
              </p>
              <div className="">
                <a
                  style={{
                    marginLeft: "50px",
                  }}
                  href="#"
                  className="mt-3 inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700"
                >
                  Explore OPD
                </a>
              </div>
            </div>
          </div>
          <div className="slides">
            <div
              style={{
                width: "18rem",
                height: "22rem",
                backgroundColor: "green",
              }}
            >
              <p className="mt-20 text-center text-2xl">Maternity Services</p>
              <p className="text-center mt-2 text-1xl text-yellow-300">
                This is the doctors office each and ever client is warmly Welcome
                to this office and every client is helped accordingly. get any
                medical help from this office
              </p>
              <div className="">
                <a
                  style={{
                    marginLeft: "50px",
                  }}
                  href="#"
                  className="mt-3 inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700"
                >
                  Explore Maternity
                </a>
              </div>
            </div>
          </div>
          <div className="slides">
            <div
              style={{
                width: "18rem",
                height: "22rem",
                backgroundColor: "green",
              }}
            >
               <p className="mt-20 text-center text-2xl">Lab Services</p>
              <p className="text-center mt-2 text-1xl text-yellow-300">
                This is the doctors office each and ever client is warmly Welcome
                to this office and every client is helped accordingly. get any
                medical help from this office
              </p>
              <div className="">
                <a
                  style={{
                    marginLeft: "50px",
                  }}
                  href="#"
                  className="mt-3 inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700"
                >
                  Explore Lab
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default ProductImages;
