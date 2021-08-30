import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './pages/main'
import SetUserPage from './pages/set-user-page'
import Page404 from './pages/404'

const App = () => {
    return (
      <Router>
        <div className='Container'>
          <Switch>
            <Route path="/" exact render={() => <SetUserPage/>} />
            <Route path="/main" exact render={() => <Main/>} />
            {/* <Route path='/set-user' render={() => <SetUserPage/>}/> */}
            <Route render={() => <Page404/>}/>
          </Switch>
        </div>
        
      </Router>
    );
}

export default App