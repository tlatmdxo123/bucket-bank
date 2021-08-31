import React from 'react';
import { UserInfoType } from '../types/setUserTypes';
import AvatarSetter from './AvatarSetter';
import Title from './common/Title';
import UserInfoForm from './UserInfoForm';

type UserFormProps = {
    changeUserAvatar:(avatar:string) => void,
    avatarType:string,
    name:string,
    changeUserName:(name:string) => void,
    pay:string,
    changeUserPay:(pay:string) => void,
    date:string,
    changeUserDate:(date:string) => void,
    submitUserInfo:(e:React.FormEvent<HTMLFormElement>,info:UserInfoType)=>void,
    
}

export const UserForm = ({changeUserAvatar,avatarType,changeUserName,name,changeUserPay,pay,changeUserDate,date,submitUserInfo}:UserFormProps) => {
    
    return (
        <>
            <AvatarSetter changeUserAvatar={changeUserAvatar} avatarType={avatarType}/>
            <Title content='정보 설정하기'/>
            <UserInfoForm changeUserName={changeUserName} name={name} changeUserPay={changeUserPay} pay={pay} changeUserDate={changeUserDate} date={date} avatarType={avatarType} submitUserInfo={submitUserInfo}/>
        </>
        
    )
}
