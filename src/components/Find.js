import React from 'react'
import {FaQrcode,FaAddressBook,FaMobileAlt,FaEnvelope} from 'react-icons/fa'
import {GoGear} from 'react-icons/go'
import '../style/Find.scss'
import Tab from '../router/Tab'
import Header from './Header';

function Find() {

  return (
  <>
    <Header title={'Find'} text={"Edit"} icon={<GoGear />} />
    <main>
        <ul className="find_method">
            <li><a href="#"><FaAddressBook />Find</a></li>
            <li><a href="#"><FaQrcode/>QR Code</a></li>
            <li><a href="#"><FaMobileAlt />Shake</a></li>
            <li><a href="#"><FaEnvelope />Invite via SNS</a></li>
        </ul>
        <section className="recommend_section">
        <h2><span>Recommended Friends</span></h2>
            <ul>
                <li>
                    You Have no recommended friends.
                </li>
            </ul>
        </section>
    </main>
    <Tab />
        </>
  )
}


export default Find;
