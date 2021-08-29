import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { UserForm } from '../components/UserForm'
import {changeAvatar, setUserName,setUserPay,setUserDate} from '../actions/SetUserActions'
import {RootState} from '../reducers'

const UserFormContainer = () =>{
    
    const {avatarType,name,pay,date} = useSelector((state:RootState )=> ({
        avatarType:state.setUser.avatarType,
        name:state.setUser.name,
        pay:state.setUser.pay,
        date:state.setUser.date,
    })) 
    const dispatch = useDispatch()
    const changeUserAvatar = (avatarType:string):void => {
        dispatch(changeAvatar(avatarType))
    }

    const changeUserName = (name:string):void => {
        dispatch(setUserName(name))
    }

    const changeUserPay = (pay:string):void => {
        dispatch(setUserPay(pay))
    }

    const changeUserDate = (date:string):void => {
        dispatch(setUserDate(date))
    }
    


    const userFormProps = {
        changeUserAvatar,
        avatarType,
        changeUserName,
        name,
        changeUserPay,
        pay,
        changeUserDate,
        date,

    }
    return <UserForm {...userFormProps}/>
}

export default UserFormContainer