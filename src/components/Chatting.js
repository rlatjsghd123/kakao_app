import React, { useState } from 'react'
import {FaSmile,FaMicrophone,FaChevronLeft,FaBars,FaSearch,FaPlus} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
import '../style/Chatting.scss'
import { db } from '../fbase';
import Header from './Header';
console.log(db);
function Chatting() {
    const [chat, setChat] = useState("");
    const location =  useLocation();
    const {info,index,protrait} = location.state;

    const onChatSubmit = async() =>{
        await addDoc(collection(db, "chatting"), {
            text: chat,
            createAt: Date.now(),
          });
    }
  return (
    <>
   <Header text={<Link to='/Chat'><FaChevronLeft /></Link>} icon={<><FaBars /><FaSearch /></>}  />
    <main className='datas'>
        <span className="date_info">Monday,October 17, 2022</span>
        <div className="chat_box my">
            <span className="chat">Hello!</span>
            <span className="chat">Hello! This is a test message.</span>
            <span className="chat">This is a test message.</span>
            <span className="chat_time">16:30</span>
        </div>
        <div className="chat_box other"> 
                <div className="other_info" key={info.id}>
                <span className="profile_img empty"><img src={protrait[0].image[index]} /></span>
                <span className="profile_name">{info.name}</span>
                </div>
            <span className="chat">And this is an answer</span>
            <span className="chat">And this is an answer And this is an answer</span>
            <span className="chat">And this is an answer</span>
            <span className="chat_time"><span>17</span>:<span>30</span></span>
            <span>{chat}</span>
        </div>
    </main>
    <footer>
        <span className="plus_btn"><a href="#"><FaPlus /></a></span>
        <form action="/" method="post" onSubmit={onChatSubmit}>
            <fieldset className="text_box">
                <legend className="blind">채팅 입력창</legend>
                <label htmlFor='chatting' className="blind">채팅 입력</label>
                <input type="text" id="chtting" className="text_field" />
                <span className="emoticon_btn"><a href="#"><FaSmile /></a></span>
                <span className="voice_btn"><a href="#"><FaMicrophone /></a></span>
            </fieldset>
        </form>
    </footer>
    </>
  )
}

export default Chatting;
