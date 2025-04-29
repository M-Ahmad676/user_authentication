import React, {useState} from 'react'
import {UserContext} from './UserContext'

export default function UserProvider({children}) {

    const [status, setStatus] = useState('Logout')

    const toggleStatus = () => {
        setStatus((prev) => (prev == 'Logout' ? 'Login' : 'Logout'))
    }

  return (
    <UserContext.Provider value={{status, toggleStatus}}>
      {children}
    </UserContext.Provider>
  )
}
