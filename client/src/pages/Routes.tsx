import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'
import Main from './main'
import SetUserPage from './set-user-page'
import Page404 from './404'

function Routes() {
    const isAuth = typeof localStorage.getItem('user_id') === 'string'
    return (
        <div className='Container'>
          {isAuth ? <Redirect to={{pathname:'/'}}/> : <Redirect to={{pathname:'/set-user'}}/>}
          <Switch>
            <Route path='/' exact render={() => <Main/>}/>
            <Route path='/set-user' render={() => <SetUserPage/>}/>
            <Route render={() => <Page404/>}/>
          </Switch>
        </div>
    );
}

export default Routes;