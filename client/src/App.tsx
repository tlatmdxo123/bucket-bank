import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './pages/Routes'


const App = () => {
    return (
      <Router>
        <Routes/> 
      </Router>
    );
}

export default App