"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Style.css';
import Header from "@/componets/navbar";
import Card from "react-bootstrap/Card";


const ProductImages = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
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
    <>
    <Header/>
    <div id="service-sector">
    </div>
    <div className="images-body">
      <div className="inside-images">
        <div className="headings in-images">
          <p className="text-4xl text-lg font-bold text-center">
            Our Key Services
          </p>
          <p className="text-2xl mt-3 text-yellow-300 text-center">
            Explore our comprehensive range of medical services designed to meet
            your healthcare needs.
          </p>
        </div>

        <Slider {...settings}>
          <div id="service-card">
            <Card
              style={{
                width: "18rem",
                height: "22rem",
                backgroundColor: "green",
              }}
            >
              <Card.Img variant="top" src="https://i.pinimg.com/564x/bd/bc/0b/bdbc0bda70405b998e163ad879a429f1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Explore Pharmacy
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="">
            <Card
              style={{
                width: "18rem",
                height: "22rem",
                backgroundColor: "green",
              }}
            >
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/bd/bc/0b/bdbc0bda70405b998e163ad879a429f1.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ marginTop: "" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Explore Reception
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="service-card">
            <Card
              style={{
                width: "18rem",
                height: "22rem",
                backgroundColor: "green",
              }}
            >
              <Card.Img variant="top" src="https://i.pinimg.com/564x/6c/cf/af/6ccfaf23baf3f421e4a667c4b8c78d56.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Explore X-ray
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="service-card">
            <Card
              style={{
                width: "18rem",
                height: "22rem",
                backgroundColor: "green",
              }}
            >
              <Card.Img variant="top" src="https://i.pinimg.com/564x/39/b9/8c/39b98c8df7f434509e0b9bfa23be2182.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Explore Laboratory
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="service-card">
            <Card
              style={{
                width: "18rem",
                height: "22rem",
                backgroundColor: "green",
              }}
            >
              <Card.Img variant="top" src="https://i.pinimg.com/564x/bd/bc/0b/bdbc0bda70405b998e163ad879a429f1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Explore Martenity
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="service-card">
            <Card
              style={{
                width: "18rem",
                height: "22rem",
                backgroundColor: "green",
              }}
            >
              <Card.Img variant="top" src="https://i.pinimg.com/564x/bd/bc/0b/bdbc0bda70405b998e163ad879a429f1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Explore ART
                </a>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
    </>
     
  );
};

export default ProductImages;
