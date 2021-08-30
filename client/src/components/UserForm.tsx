import React from 'react';
import Avatar from './Avatar';
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
    
}

export const UserForm = ({changeUserAvatar,avatarType,changeUserName,name,changeUserPay,pay,changeUserDate,date}:UserFormProps) => {
    
    return (
        <>
            <Avatar changeUserAvatar={changeUserAvatar} avatarType={avatarType}/>
            <Title content='정보 설정하기'/>
            <UserInfoForm changeUserName={changeUserName} name={name} changeUserPay={changeUserPay} pay={pay} changeUserDate={changeUserDate} date={date} avatarType={avatarType}/>
        </>
        
    )
}
