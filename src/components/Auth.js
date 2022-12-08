import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../style/auth.scss'
import {FaGithub,FaGoogle} from 'react-icons/fa'
import {RiKakaoTalkFill} from 'react-icons/ri'
import { AuthService } from '../fbase';
import {  signInWithEmailAndPassword,GoogleAuthProvider,GithubAuthProvider,signInWithPopup   } from "firebase/auth";



function Auth() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const navigate = useNavigate();


    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        console.log(name);
        if(name == "email"){
            setEmail(value);
        } else if(name == "password"){
            setPassword(value);
        }
    }

    const onLogin = async(e) =>{
        e.preventDefault();
        try{
       await signInWithEmailAndPassword(AuthService, email, password);
       navigate("/Home"); 
        }catch(error){
            setError("아이디, 비밀번호를 확인해주세요.");
        }   
    }

    const onClick = (e) =>{
        const name = e.target.name;
        let provider;
        if(name == "Google"){
        provider = new GoogleAuthProvider();
        } else if(name == "GitHub"){
        provider = new GithubAuthProvider();
        }
        signInWithPopup(AuthService, provider);
        navigate("/Home"); 
    }
    
  return (
    <>
    <main className='auth_main'>
        <h1><RiKakaoTalkFill /></h1>
        <form className='auth_form' onSubmit={onLogin}>
            <fieldset>
            <legend className='blind'>로그인</legend>
            <input type="email" onChange={onChange} value={email} name="email" placeholder='아이디를 입력해주세요' required />
            <input type="password"  onChange={onChange} password={password}  name="password" placeholder='비밀번호를 입력해주세요' required />
            <input type="submit" value="로그인" />
            </fieldset>
        </form>
        <span>{error}</span>
        <div className='sign_up'>
            <Link to="/SignUp"  onChange={onChange} email={email} password={password} >회원가입</Link>
        </div>
        <div className='brand_btn'> 
            <button onClick={onClick} name="GitHub"><FaGithub />GitHub로 로그인</button>
            <button onClick={onClick} name="Google"><FaGoogle />Google로 로그인</button>
        </div>
    </main>
    </>
  )
}


export default Auth;
