  import React, {useContext} from 'react'
  import { UserContext } from '../Components/Context/UserContext'

  export default function Home() {

    const {status} = useContext(UserContext)

    return (
      <div className='my-20 px-20'>
        
        <h1 className='text-[2.2rem] font-semibold'>{status == 'Logout' ? 'Please Login' : "Welcome"}</h1>

      </div>
    )
  }
