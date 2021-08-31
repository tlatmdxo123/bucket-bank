import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'
import SetUserPage from './set-user-page'
import Page404 from './404'
import PayHistoryPage from './pay-history-page';
import BucketListPage from './bucket-list-page';
import PayAnalysisPage from './pay-analysis-page';


function Routes() {
    const isAuth = typeof localStorage.getItem('user_id') === 'string'
    return (
        <div className='Container'>
          {isAuth ? <Redirect to={{pathname:'/'}}/> : <Redirect to={{pathname:'/set-user'}}/>}
          
          <Switch>
            <Route path='/' exact render={() => <PayHistoryPage/>}/>
            <Route path='/set-user' render={() => <SetUserPage/>}/>
            <Route path='/pay-history' render={() => <PayHistoryPage/>}/>
            <Route path='/bucket-list' render={() => <BucketListPage/>}/>
            <Route path='/pay-analysis' render={() => <PayAnalysisPage/>}/>
            <Route render={() => <Page404/>}/>
          </Switch>
        </div>
    );
}

export default Routes;