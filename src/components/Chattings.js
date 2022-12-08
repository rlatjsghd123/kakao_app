import React, { useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import { doc, updateDoc, deleteField, deleteDoc } from "firebase/firestore";
import { dbService } from '../fbase';
import '../style/Chattings.scss'

function Chattings({chatObj,isOwner}) {
    const [del, setDel] = useState(false);
    const onDeleteClick = () =>{
        setDel(prev => !prev);
    }
    const onDeleteChat = async() =>{
        const ok = window.confirm("삭제하시겠습니까?"); //확인 누르면 true 취소는 false
        if(ok){
        await deleteDoc(doc(dbService, "chats", `/${chatObj.id}`));
        }
        setDel(prev => !prev);
    }
  return (
    <>
        <span key={chatObj.id} className='chats' onClick={onDeleteClick}>{chatObj.text}</span>
        {del && <button onClick={onDeleteChat} className="del_btn"><FaTrashAlt /></button>}
        {/* {isOwner &&
        <span onClick={}>
        <FaTrashAlt />
        </span>
        } */}
    </>
    
  )
}

export default Chattings