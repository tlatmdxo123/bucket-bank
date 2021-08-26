import React from 'react';
import IconButton from './common/IconButton'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import {AVATAR_TYPES} from '../constants/avatar'


type AvatarProps = {
    changeUserAvatar:(avatar:string) => void;
    avatarType:string,
}

enum Direction {
    NEXT = 'next',
    PREV = 'prev'
}
function Avatar({changeUserAvatar,avatarType}:AvatarProps) {

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
        <div className='Avatar'>
            <div className='container'>
                <img src={`/images/${avatarType}.png`}></img>
            </div>
            <IconButton icon={<MdChevronLeft/>} size='small' onClick={() => setPrevAvatar()} type='prev'/>
            <IconButton icon={<MdChevronRight/>} size='small' onClick={() => setNextAvatar()} type='next'/>
        </div>
        
    );
}



export default Avatar;