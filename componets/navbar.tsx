//  "use client";
// import './nav.css'
// import icon from'../app/images/icon.png'
// import phone from '../app/images/phone.png'
// import location from '../app/images/location.png'
// import time from '../app/images/time.png'

// function Navbar() {
//   return (
//     <>
//       {" "}
//        {/* <div className="head">
//         <header className="header-container">
//           <div className="header-content">
//             <Image
//               className="icon"
//               src={icon}
//               alt="icon"
//               width={100}
//               height={100}
//             />
//           </div>
//         </header>
//         <h1 className="head1">Liwonde Private Hospital</h1>
//         <div className="details">
//           <Image
//             className="phone"
//             src={phone}
//             alt="phone"
//             width={20}
//             height={20}
//           />
//           <p className="numbers">Phone Numbers</p>
//           <div>
//             <p className="num">+265889900000</p>
//           </div>
//         </div>
//         <div className="details">
//           <Image
//             className="phone"
//             src={time}
//             alt="phone"
//             width={20}
//             height={20}
//           />
//           <p className="open"> Opening Hours</p>
//           <div>
//             <p className="num">Everyday 7AM-9PM</p>
//           </div>
//         </div>
//         <div className="details">
//           <Image
//             className="phone"
//             src={location}
//             alt="phone"
//             width={20}
//             height={20}
//           />
//           <p className="location">Location</p>
//           <div>
//             <p className="num">
//               Liwonde, Near <br /> Filling Station
//             </p>
//           </div>
//         </div>
//       </div>  */}
//       {/* navigation bar */}
//       <div className="navigation">
//         <nav className="header">
//           <ul className="services">
//             <li className="clicks">
//               <a className="link" href="">
//                 Home
//               </a>
//             </li>
//             <li className="clicks">
//               <a className="link" href="">
//                 Services
//               </a>
//               <div className="dropdown-menu">
//                 <ul className="list">
//                   <li className="ref">
//                     <a className="drop" href="pharmacy">
//                       Reception Services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="pharmacy1">
//                       Pharmarcy Services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Dental Services{" "}
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Ambulance Services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       OPD services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       X-Ray services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Laboratory services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Martenity services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href=""></a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//             <li className="clicks">
//               <a className="link" href="">
//                 Doctors
//               </a>
//             </li>
//             <li className="clicks">
//               <a className="link" href="Staff">
//                 Staff
//               </a>
//             </li>
//             <li className="clicks">
//               <a className="link" href="">
//                 Department
//               </a>
//               <div className="dropdown-menu">
//                 <ul className="list">
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Dental Department
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       X-ray and Scanning Departmen
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Laboratory Department{" "}
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Ambulance Services
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Pharmacy Department
//                     </a>
//                   </li>
//                   <li className="ref">
//                     <a className="drop" href="">
//                       Finance Department
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//           </ul>
//           <div className="button">
//             <a className="bt1" href="Appointment">
//               <button className="button " type="submit">
//                 Book Appointment
//               </button>
//             </a>
//           </div>
//         </nav>
//       </div>

//     </>

//   );
// }
// export default Navbar;

"use client";
import "./nav.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faTools,
  faInfoCircle,
  faShoppingCart,
  faCog,
  faUserDoctor,
  faHospital,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
// import './globals.css';
import icon from "../app/images/icon.png";
import Image from "next/image";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    // Toggle the "change" class on the menu icon and bars
    const menuIcon = document.querySelector(".menu-icon");
    const bars = document.querySelectorAll(".bar");
    //menuIcon.classList.toggle("change");
    // Check if menuIcon is not null before performing operations
    if (menuIcon !== null) {
      menuIcon.classList.toggle("change");
    }
    bars.forEach((bar) => bar.classList.toggle("change"));
  };

  return (
    <div className="header">
      <Image src={icon} width={50} height={50} alt="" />
      <div
        className={`menu-icon ${showLinks ? "change" : ""}`}
        onClick={toggleLinks}
      >
        <span id="menu">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </span>{" "}
        {/* This is the hamburger menu icon */}
      </div>
      {showLinks && (
        <div className="new-links">
          <a className="links" href="/">
            <FontAwesomeIcon icon={faHome} className="my-icon1" /> Home
          </a>
          <a className="links" href="/Service">
            <FontAwesomeIcon icon={faEnvelope} className="my-icon1" />
            Services
          </a>
          <a className="links" href="/serviceSection">
            <FontAwesomeIcon icon={faTools} className="my-icon1" /> Departments
          </a>
          <a className="links" href="/aboutus">
            <FontAwesomeIcon icon={faInfoCircle} className="my-icon1" /> About
            Us
          </a>
          <a className="links" href="/products">
            <FontAwesomeIcon icon={faShoppingCart} className="my-icon1" /> Staff
          </a>
        </div>
      )}
      <div className="nav-links">
        <a className="links" href="../">
          <FontAwesomeIcon icon={faHome} className="my-icon1" />
          Home
        </a>
        <a className="links" href="/notFound">
          {" "}
          <FontAwesomeIcon icon={faUserFriends} className="my-icon1" />
          Patients and Visitors
        </a>
        <a className="links" href="/Staff">
          {" "}
          <FontAwesomeIcon icon={faUserDoctor} className="my-icon1" /> Staff
        </a>
        <a className="links" href="/notFound">
          {" "}
          <FontAwesomeIcon icon={faHospital} className="my-icon1" />
          Departments
        </a>
        <a className="links" href="/notFound">
          {" "}
          <FontAwesomeIcon icon={faInfoCircle} className="my-icon1" /> About Us
        </a>
      </div>
      <div className="button">
        <a href="Appointment">
          <button>Book Appointment</button>
        </a>
      </div>
    </div>
  );
}
