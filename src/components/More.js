import React from 'react'
import {FaComment,FaSmile,FaPalette,FaRegHandPeace,FaRegUserCircle,FaUtensils,FaHome,FaPencilAlt,FaInfoCircle,FaGraduationCap,FaBuilding,FaWonSign,FaVideo,FaTv} from 'react-icons/fa'
import '../style/More.scss'
import Tab from '../router/Tab'
import Header from './Header';
import {GoGear} from 'react-icons/go'

function More() {
  return (
    <>
   <Header title={"More"} icon={<GoGear />} />
    <main>
            <section className="user_info">
                <h2 className="blind">사용자 정보</h2>
                <span className="profile_img empty"><img src='imgs/empty.jpg' /></span>
                <span className="profile_info">
                    <span className="profile_name">My Name</span>
                    <span className="profile_email">Uesrud@gmail.com</span>
                </span>
                <span className="chat_img"><a href="#"><FaComment /></a></span>
            </section>
            <section className="user_menu">
                <h2 className="blind">사용자 메뉴</h2>
                <ul>
                    <li><a href="#"><FaSmile />Emoticons</a></li>
                    <li><a href="#"><FaPalette />Themes</a></li>
                    <li><a href="#"><FaRegHandPeace />Plus Friends</a></li>
                    <li><a href="#"><FaRegUserCircle />Account</a></li>
                </ul>
            </section>
            <section className="plus_friends">
                    <h2>Plus Friends
                    <span><FaInfoCircle />Learn More</span>
                    </h2>
                <ul className="plus_list">
                    <li><a href="#"><FaUtensils />Order</a></li>
                    <li><a href="#"><FaHome />Store</a></li>
                    <li><a href="#"><FaTv />TV Channel/Radio</a></li>
                    <li><a href="#"><FaPencilAlt />Creation</a></li>
                    <li><a href="#"><FaGraduationCap />Education</a></li>
                    <li><a href="#"><FaBuilding />Politics/Society</a></li>
                    <li><a href="#"><FaWonSign />Finance</a></li>
                    <li><a href="#"><FaVideo />Movies/Music</a></li>
                </ul>
            </section>
            <section className="more_app">
                <h2 className="blind">앱 더보기</h2>
                <ul>
                    <li><a href="#"><span className="app_icon"><img src='imgs/kakaofriends.png' /></span>Kakao Story</a></li>
                    <li><a href="#"><span className="app_icon"><img src='imgs/path.png' /></span>Path</a></li>
                    <li><a href="#"><span className="app_icon"><img src='imgs/kakaostory.png' /></span>Kakao friends</a></li>
                </ul>
            </section>
        </main>
    <Tab />
    </>
  )
}

export default More;
