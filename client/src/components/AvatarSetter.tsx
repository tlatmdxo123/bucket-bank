import React from 'react';
import IconButton from './common/IconButton'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import {AVATAR_TYPES} from '../constants/avatar'
import Avatar from './common/Avatar';


type AvatarSetterProps = {
    changeUserAvatar:(avatar:string) => void;
    avatarType:string,
}

function AvatarSetter({changeUserAvatar,avatarType}:AvatarSetterProps) {

    const setNextAvatar = () => {
        let currentIdx = AVATAR_TYPES.indexOf(avatarType)+1
        currentIdx > (AVATAR_TYPES.length-1) && (currentIdx=0)
        changeUserAvatar(AVATAR_TYPES[currentIdx])
    }

    const setPrevAvatar = () => {
        let currentIdx = AVATAR_TYPES.indexOf(avatarType)-1
        currentIdx < 0 && (currentIdx=AVATAR_TYPES.length-1)
        changeUserAvatar(AVATAR_TYPES[currentIdx])
    }


    return (
        <div className='AvatarSetter'>
            <Avatar avatarType={avatarType} size='big'/>
            <IconButton icon={<MdChevronLeft/>} size='small' onClick={() => setPrevAvatar()} type='prev' shape='round' background='white'/>
            <IconButton icon={<MdChevronRight/>} size='small' onClick={() => setNextAvatar()} type='next' shape='round' background='white'/>
        </div>
        
    );
}



export default AvatarSetter;