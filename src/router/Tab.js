import {FaUser,FaComment,FaSearch,FaEllipsisH} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import '../style/tab.scss'

function Tab() {


  return (
    <nav className="tab_bar">
    <ul>
        <li><NavLink end to="/Home" className={ ( { isActive } ) => "nav" + (isActive ? "active" : "") }><FaUser/>Friends</NavLink></li>
       <li><NavLink to="/Chat" className={ ( { isActive } ) => "nav" + (isActive ? "active" : "") }><FaComment/>Chats</NavLink></li>
        <li><NavLink to="/Find" className={ ( { isActive } ) => "nav" + (isActive ? "active" : "") }><FaSearch/>Find</NavLink></li>
        <li><NavLink to="/More" className={ ( { isActive } ) => "nav" + (isActive ? "active" : "") }><FaEllipsisH/>More</NavLink></li>
    </ul>
    </nav>
  )
}

export default Tab;
