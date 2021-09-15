import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import { fetchUser } from './actions/SetUserActions'
import Routes from './pages/Routes'


const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      const id = localStorage.getItem('user_id')
      if(id){
        dispatch(fetchUser(id))
      }
    },[])
    
    
    return (
      <Router>
        <Routes/> 
      </Router>
    );
}

export default App