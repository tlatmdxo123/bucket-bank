import React from 'react';
import Avatar from './Avatar';

type UserFormProps = {
    changeUserAvatar:(avatar:string) => void,
    avatarType:string,
}

export const UserForm = ({changeUserAvatar,avatarType}:UserFormProps) => {
    return (
        <>
            <Avatar changeUserAvatar={changeUserAvatar} avatarType={avatarType}/>
        </>
        
    )
}
