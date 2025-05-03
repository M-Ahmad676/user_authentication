import React, {useContext, useState} from 'react'
import { TiThMenu } from "react-icons/ti";
import { GiClawSlashes } from "react-icons/gi";
import {UserContext} from '../Context/UserContext'
import { FaBell } from "react-icons/fa6";
import NotificationBox from '../NotificationBox/NotificationBox';

export default function Navbar() {

  const [notification, setNotification] = useState(false)

  const toggleNotification = () => {
    setNotification(!notification)
  }
   
  const {status, toggleStatus} = useContext(UserContext)

  return (
    <div className='flex justify-between w-[90vw] mx-auto rounded-lg items-center px-10 h-[4rem] my-5 bg-[#a3b9ba]'>

        <TiThMenu className='text-[1.8rem] cursor-pointer text-white hover:text-gray-700'/>
         
        <div>
          <GiClawSlashes className='text-[2.5rem] cursor-pointer hover:text-gray-700'/>         
        </div>

        <div className='flex items-center gap-x-5 relative'>
          <FaBell className={` ${status === 'Logout' ? 'hidden' : 'block'} text-[1.5rem] text-white cursor-pointer hover:text-amber-300`}/>
          <NotificationBox/>
          <button className='py-2 bg-amber-300 px-6 rounded-lg font-medium hover:bg-amber-400 cursor-pointer'
          onClick={toggleStatus}>
           {status === 'Logout' ? 'Login' : 'Logout'}
          </button>

        </div>
    
    </div>
  )
}
