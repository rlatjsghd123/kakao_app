import React, { useState,useEffect } from 'react'
import {FaSmile,FaMicrophone,FaChevronLeft,FaBars,FaSearch,FaPlus} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore"; 
import '../style/Chatting.scss'
import { dbService,AuthService } from '../fbase';
import Header from './Header';
import Chattings from './Chattings';

function Chatting() {
const [chat, setChat] = useState("");
const [chats,setChats] = useState([]);
const [userObj, setUserObj] = useState(null);
const location =  useLocation();
const {info,index,protrait} = location.state;

const onChatChange = (e) =>{
    setChat(e.target.value)
}

const onChatSubmit = async(e) =>{
    e.preventDefault();
    await addDoc(collection(dbService, "chats"), {
    text: chat,
    createAt: Date.now(),
    createId: userObj.uid
    });
    setChat("");
}

useEffect(() => {
    AuthService.onAuthStateChanged((user)=>{
        if(user){
            setUserObj(user);
        }
    })
    const q = query(
        collection(dbService, "chats"),
        orderBy("createAt", "desc")
        );
        onSnapshot(q, (snapshot) => {
        const chatArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        }));
        setChats(chatArr);
        });
}, []);

  return (
    <>
   <Header text={<Link to='/Chat'><FaChevronLeft /></Link>} icon={<><FaBars /><FaSearch /></>}  />
    <main className='datas'>
        <span className="date_info">Monday,October 17, 2022</span>
        <div className="chat_box my">
            {chats.map((chat)=>(<Chattings chatObj={chat}  isOwner={chat.createId === userObj.uid} />))}
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
        </div>
    </main>
    <footer>
        <span className="plus_btn"><a href="#"><FaPlus /></a></span>
        <form onSubmit={onChatSubmit}>
            <fieldset className="text_box">
                <legend className="blind">채팅 입력창</legend>
                <label htmlFor='chatting' className="blind">채팅 입력</label>
                <input type="text" id="chtting" value={chat} onChange={onChatChange} className="text_field" />
                <span className="emoticon_btn"><a href="#"><FaSmile /></a></span>
                <span className="voice_btn"><a href="#"><FaMicrophone /></a></span>
            </fieldset>
        </form>
    </footer>
    </>
  )
}

export default Chatting;
