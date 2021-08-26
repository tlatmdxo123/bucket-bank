import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { UserForm } from '../components/UserForm'
import {changeAvatar} from '../actions/SetUserActions'
import {RootState} from '../reducers'


const UserFormContainer = () =>{
    const {avatarType} = useSelector((state:RootState )=> ({
        avatarType:state.setUser.avatarType
    })) 
    const dispatch = useDispatch()
    const changeUserAvatar = (avatarType:string) => {
        dispatch(changeAvatar(avatarType))
    }
    return <UserForm changeUserAvatar={changeUserAvatar} avatarType={avatarType}/>
}

export default UserFormContainer