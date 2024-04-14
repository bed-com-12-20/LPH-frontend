'use client'

import Image from "next/image";
import { useState, useEffect } from 'react';
import { faNoteSticky, faUserFriends, faLocation, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../app/images/icon.png";
import './footer.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
    
    // Update the current year every time the year changes
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60); // Update every hour, assuming the component might stay mounted for a long time

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-coloumn">
              <Image
                className="icon1"
                src={icon}
                alt="icon"
                width={150}
                height={150}
                style={{ marginRight: "10px" }}
              />
            </div>
            <div className="footer-column">
              <h4>Important Links</h4>
              <ul>
                <li>
                  <a href="Appontment" id="footer-link">
                   <FontAwesomeIcon icon={faNoteSticky} className="my-icon1"/>Book Appointment
                  </a>
                </li>
                <li>
                  <a href="/Team" id="footer-link">
                  <FontAwesomeIcon icon={faUserFriends} className="my-icon1"/>Team of Developers
                  </a>
                </li>
                <li>
                  <a href="/Map" id="footer-link">
                  <FontAwesomeIcon icon={faLocation} className="my-icon1"/> Location
                  </a>
                </li>
                <li>
                  <a href="#" id="footer-link">
                  <FontAwesomeIcon icon={faInfoCircle} className="my-icon1"/> About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <p id="footer-list">Call: 0888597087</p>
                </li>
                <li>
                  <p id="footer-list">Email:liwondeclinic@yahoo.com</p>
                </li>
                <li>
                  <p id="footer-list">Physical Address</p>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Map of the Hospital</h4>
              <iframe
                title="Google Map"
                width="300"
                height="200"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.6455704410355!2d35.2220114746039!3d-15.067707805480786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d927b9f6d2f0dd%3A0x90ebf7bc5f36d7bb!2sLiwonde%20Private%20Hospital!5e0!3m2!1sen!2smw!4v1706522849156!5m2!1sen!2smw"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <p id="private">@Liwonde Private Hospital {currentYear}</p>
        </div>
      </div>
    </>
  );
}
