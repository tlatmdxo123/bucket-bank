import React, { useEffect } from 'react'
import {getUser} from '../api/database'

const Main = () => {
    useEffect(() => {
      const fetchUserData = async () => {
          const id = localStorage.getItem('user_id')
          const userInfo = await getUser(id)
      }
    })
    return (
      <div className='Main'>
        
      </div>
    );
}

export default Main;