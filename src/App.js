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
function App() {
  const [profile,setProfile] = useState([]);
  const getProfiles = async () =>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");

    setProfile(data);
  }
  useEffect(()=>{
    getProfiles();
  },[])
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main profile={profile} />}></Route>
        <Route path='/Chat' element={<Chat profile={profile} />}></Route>
        <Route  path='/Find' element={<Find />}></Route>
        <Route  path='/More' element={<More />}></Route>
        <Route  path='/Proflie/:id' element={<Proflie />}></Route>
        <Route  path='/Chatting/:id' element={<Chatting />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
