import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import "../style/Main.scss"
import Tab from '../router/Tab'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header';
import {GoGear} from 'react-icons/go'
import protrait from '../data/portrait.json'
import { AuthService } from '../fbase';
import {  onAuthStateChanged,deleteUser   } from "firebase/auth";

function Main({profile}) {
   const [logOut, setLogOut] = useState(true);
   const [error, setError] = useState("");
    const navigate = useNavigate();

   onAuthStateChanged(AuthService, (user) => {
    if (user) {
        setLogOut(false);
    } else {
        setLogOut(true);
    }
  });
  const onLogOut = () => {
    const user = AuthService.currentUser;

deleteUser(user).then(() => {
//  // User deleted.
    navigate("/");
}).catch((error) => {
    setError(error.message)
});
  }
  return (
    <>
    <Header  title={'Firend 1'} text={"Manage"} icon={logOut ? <GoGear /> : <span onClick={onLogOut}>로그아웃</span>} />
    <main>
        <form className="search_box">
            <fieldset className="search_inner">
                <legend className="blind">검색창</legend>
                <FaSearch />
                <input type="search" name="search" id="search" placeholder="Find firends, chats, Plus Friends" />
            </fieldset>
        </form>
        <section className="main_section1">
           <h2><span>My Profile</span></h2> 
            <ul>
                <li>
                {profile.map((info,index)=> 
                info.id == 1 ? 
                    <Link to={`/Proflie/${info.id}`}  state={{info,index,protrait}} key={info.id}>
                        <span className="profile_img empty"><img src={protrait[0].image[index]} /></span>
                        <span className="profile_name">{info.id == 1 ? info.name : null}</span>
                    </Link>
                    : null
                    )}
                </li>

            </ul>
        </section>
        <section className="main_section1">
            <h2><span>Friends</span></h2>
            <ul>
                {profile.map((info,index)=>(
                    info.id != 1  ? 
                    <li key={info.id}>
                    <Link to={`/Proflie/${info.id}`} state={{info,index,protrait}}>
                        <span className="profile_img empty"><img src={protrait[0].image[index]} /></span>
                        <span className="profile_name">{info.name}</span>
                        <span className="profile_messages">{info.email}</span>
                    </Link>
                </li> : null
                ))}
            </ul>
        </section>
    </main>
    <Tab />
</>
  )
}

export default Main;
