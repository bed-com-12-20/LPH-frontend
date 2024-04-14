'use client'
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import './Styles/find.css'

export default function FindDoctorSection(){

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
    return(<> {/* find doctor */}
      <div  ref={ref} style={{ position: "relative", overflow: "hidden" }}>
        <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
             <section id="find-doctor">
      <h1 className="doctor">Find A Doctor</h1>

      <p className="contact">
        We have experts specializing in a wide range of medical practices.{" "}
        <br />
        Our experts at Liwonde Private hospital are here to provide you with{" "}
        <br />
        care you need
      </p>

      <a href="#">
        <button className="contact-doctor">
          Contact Doctor<span className="arrow">&#8594;</span>
        </button>
      </a>
    </section></motion.div></div>
   </>)
}
