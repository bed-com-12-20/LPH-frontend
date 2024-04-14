'use client'

import React, {useState} from "react";
import './style.css'
import icon from '../../images/icon.png'
import Image from "next/image";
import search from '../images/search.png'
import { Search } from "react-bootstrap-icons";


export default function Sale(){
    
    return(
        <div>
           
            <div id="table">
          <div>
          <Image
                    src={icon}
                    alt="alt"
                    width={100}
                    height={100}
                    />
          </div>
            <div id="searchbar">
                <input type="text"  id="searchbar" placeholder="search for drugs..."
            />
             <Search/>

            </div>
            <div className="button-container">
                <div>
                    <button className="button">View Table</button>
                </div>
                <div>
                    <a href="Record">
                    <button className="button2">New Stock</button>
                    </a>
                  
                </div>
            </div>  
            </div>
        </div>
    )
    

}