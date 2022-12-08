import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from './components/Main';
import Chat from './components/Chat';
import Find from './components/Find';
import More from './components/More';
import './style/common.scss';
import Proflie from './components/Proflie';
import Chatting from './components/Chatting';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Auth from './components/Auth';
import SignUp from './components/SignUp';
import { authService } from './fbase';


function App() {
  window.resizeTo(500,800)
  
  const [profile,setProfile] = useState([]);
  const getProfiles = async () =>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    setProfile(data);
  }
  useEffect(()=>{
    getProfiles();
  },[])
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path='/' element={<Auth />}></Route>
        <Route path='/Home' element={<Main profile={profile} />}></Route>
        <Route path='/Chat' element={<Chat profile={profile} />}></Route>
        <Route  path='/Find' element={<Find />}></Route>
        <Route  path='/More' element={<More />}></Route>
        <Route  path='/Proflie/:id' element={<Proflie />}></Route>
        <Route  path='/Chatting/:id' element={<Chatting />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
