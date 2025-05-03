import React from 'react'
import { FaTrashCan } from "react-icons/fa6";

export default function NotificationBox() {
  return (
    <div className='w-[17rem] min-h-[20rem] shadow-md shadow-gray-30 rounded-xl absolute top-12  right-28'>
        <div className='flex items-center justify-between p-5 bg-amber-300 rounded-t-xl'>
        <h3 className='font-medium'>Notifications</h3>
        <FaTrashCan className='text-[1.1rem] cursor-pointer hover:text-white transition-all duration-300'/>
        </div>
    </div>
  )
}
