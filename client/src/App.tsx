import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './pages/main'
import SetUserPage from './pages/set-user-page'
import Page404 from './pages/404'

const App = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Main/>} />
          <Route path='/set-user' render={() => <SetUserPage/>}/>
          <Route render={() => <Page404/>}/>
        </Switch>
      </Router>
    );
}

export default App