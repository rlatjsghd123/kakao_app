import React from 'react'
import {FaComment,FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import protrait from '../data/portrait.json'
import "../style/chat.scss"
import Tab from '../router/Tab'
import Header from './Header';
import {GoGear} from 'react-icons/go'
function Chat({profile}) {
  return (
    <>
  <Header  title={'Chats 1'} text={"Edit"} icon={<GoGear />} />
    <main>
        <form className="search_box">
            <fieldset className="search_inner">
                <legend className="blind">검색창</legend>
                <FaSearch />
                <input type="search" name="search" id="search" placeholder="Find firends, chats, Plus Friends" />
            </fieldset>
        </form>
        <section className="main_section">
            <header className="blind"><h2>Friends</h2></header>
            <ul>
              {profile.map((info,index)=>(
                    info.id != 1 ? 
                  <li key={info.id}>
                  <Link to={`/chatting/${info.id}`} state={{info,index,protrait}}>
                        <span className="chats_img empty"><img src={protrait[0].image[index]} /></span>
                      <span className="chats_cont">
                          <span className="chats_name">{info.name}</span>
                          <span className="chats_latest">{info.company.catchPhrase}</span>
                      </span>
                      <span className="chats_time">15:33</span>
                  </Link>
                  </li> : null
              ))}
            </ul>
        </section>
        <div className="chat_fa_btn">
            <a href="#">
            <FaComment/>
            </a>
        </div>
    </main>
      <Tab />
    </>
  )
}

export default Chat;
