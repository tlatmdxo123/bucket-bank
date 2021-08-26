import React,{MouseEvent} from 'react';
import IconButton from './common/IconButton'
import {useAvatarTypes} from '../hooks/userFormHooks'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'


type AvatarProps = {
    changeUserAvatar:(avatar:string) => void;
    avatarType:string,
}

enum Direction {
    NEXT = 'next',
    PREV = 'prev'
}
function Avatar({changeUserAvatar,avatarType}:AvatarProps) {
    const [currentAvatar,setNextAvatar,setPrevAvatar] = useAvatarTypes()

    const moveAvatar = (e: MouseEvent<HTMLButtonElement>) => {
        const isNext = e.currentTarget.classList.contains(Direction.NEXT)
        isNext ?  setNextAvatar() : setPrevAvatar()
        changeUserAvatar(currentAvatar)
    }


    return (
        <div className='Avatar'>
            <div className='container'>
                <img src={`/images/${avatarType}.png`}></img>
            </div>
            <IconButton icon={<MdChevronLeft/>} size='small' onClick={(e: MouseEvent<HTMLButtonElement>) => moveAvatar(e)} type='prev'/>
            <IconButton icon={<MdChevronRight/>} size='small' onClick={(e: MouseEvent<HTMLButtonElement>) => moveAvatar(e)} type='next'/>
        </div>
        
    );
}



export default Avatar;