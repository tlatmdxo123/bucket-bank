import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postUser } from '../api/database'
import { UserForm } from '../components/UserForm'
import { UserInfoType } from '../types/setUserTypes'


const UserFormContainer = () =>{
    const [avatarType,setAvatarType] = useState('bear')
    const [name,setName] = useState('')
    const [pay,setPay] = useState('')
    const [date,setDate] = useState('')

    const changeUserAvatar = (avatarType:string):void => {
        setAvatarType(avatarType)
    }

    const changeUserName = (name:string):void => {
        setName(name)
    }

    const changeUserPay = (pay:string):void => {
        setPay(pay)
    }

    const changeUserDate = (date:string):void => {
        setDate(date)
    }

    const history = useHistory();
    
    const submitUserInfo = async (e:React.FormEvent<HTMLFormElement>,userInfo:UserInfoType) => {
        e.preventDefault();
        try {
            const res = await postUser<UserInfoType>(userInfo)
            if(res.status === 200){
                localStorage.setItem('user_id',res.data.id)
                
                history.push('/')
            }else{
                throw '요청에 실패했습니다.'
            }
        } catch (error) {
            throw error
        }
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
        submitUserInfo

    }
    return <UserForm {...userFormProps}/>
}

export default UserFormContainer