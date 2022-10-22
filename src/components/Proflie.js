
import React from 'react'
import {FaComment,FaPencilAlt,FaChevronLeft,FaUser} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import '../style/Proflie.scss'
import Header from './Header'

function Proflie() {
    const location = useLocation();
    console.log(location)
    const {info,index,protrait} = location.state;
    return(
    <>
    <Header text={<Link to='/'><FaChevronLeft /></Link>} icon={<FaUser />}  />
    <main>
        <section className="background"><h2 className="blind">My Profile background image</h2></section>
        <section className="profile">
            <h2 className="blind">My profile info</h2>
            <div className="profile_img empty"><img src={protrait[0].image[index]} /></div>
            <div className="profile_cont">
                <span className="profile_name">{info.name}</span>
                <input type="mail" className="profile_email" placeholder={info.email} />
                <ul className="profile_menu">
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaComment />
                            </span>
                            My Chatroom
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                               <FaPencilAlt />
                            </span>
                           Edit Profile
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    </>
  )
}

export default Proflie;