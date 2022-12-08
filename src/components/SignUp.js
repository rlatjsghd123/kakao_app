import React, { useState } from 'react'
import { AuthService } from '../fbase';
import {  createUserWithEmailAndPassword  } from "firebase/auth";
import { async } from '@firebase/util';
import '../style/SignUp.scss'
import Tab from '../router/Tab'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function SignUp() {
   const navigate = useNavigate();
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");

  const onChange = (e) =>{
    const {target:{name,value}} = e;
    if(name === "email"){
      setEmail(value);
    } else if(name === "password"){
      setPassword(value);
    }
  }

  const onAccount = async(e) =>{
    e.preventDefault();
    try{
  await createUserWithEmailAndPassword(AuthService, email, password);
  navigate("/");
    }catch(error){
      console.log(error)
    }
  }

  return (
   <>
   <Header />
      <form className='sign_form' onSubmit={onAccount}>
            <fieldset>
            <legend className='blind'>회원가입</legend>
            <input type="email" onChange={onChange} value={email} name="email" placeholder='아이디를 입력해주세요' required />
            <input type="password"  onChange={onChange} value={password}  name="password" placeholder='비밀번호를 입력해주세요' required />
            <input type="submit" value="회원가입" />
            </fieldset>
        </form>
        <Tab />
        </>
  )
}

export default SignUp;
