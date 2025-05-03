import React, {useState ,useCallback} from 'react'
import { NotificationContext } from './NotificationContext'

export default function NotificationProvider({children}) {

    const [notification, setNotification] = useState([])

    const generateID = () => Math.random().toString(36).substring(2,9)

    const addNotification = useCallback((message, type = 'info') => {
        const id = generateID
        const newNotification = {id, message, type}
        setNotification(prev => [...prev, newNotification])

        setTimeout(() => {
        
            removeNotification(id)
            
        },5000)
    },[])

    const removeNotification = useCallback((id) => {
        setNotification(prev => prev.filter(n => n.id !==id))
    },[])

    const clearAll = useCallback(() => {
        setNotification([])
    },[])

  return (
    <NotificationContext.Provider value={{notification, removeNotification, clearAll, addNotification}}>
      {children}
    </NotificationContext.Provider>
  )
}
