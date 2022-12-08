import React from 'react'
import {FaPlane,FaWifi,FaMoon,FaBluetooth,FaBatteryFull} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Header({title,text,icon}) {

 
  return (
   <>
        <header>
        <div className="status_bar">
            <div className="left_item">
                <FaPlane />
                <FaWifi />
            </div>
            <div className="center_item">
                <span>15</span>:<span>33</span>
            </div>
            <div className="right_item">
                <FaMoon />
                <FaBluetooth />
                <span>100%</span>
               <FaBatteryFull />
            </div>
        </div>
        <div className="title_bar">
        <h1>{title}</h1>
        <div className="left_item"><a href="#" className='main_txt'>{text}</a></div>
        <div className="right_item"><Link to="/">{icon}</Link></div>
        </div>
    </header>
    </>
  )
}

export default Header;
