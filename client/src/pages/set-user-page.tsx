import React from 'react';
import { useHistory } from 'react-router-dom';
import UserFormContainer from '../containers/UserFormContainer'

const SetUserPage = () => {
    // const history = useHistory()
    return (
        <div className='Container'>
            <UserFormContainer/>
        </div>
    )
}

export default SetUserPage;