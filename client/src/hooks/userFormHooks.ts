import React,{useState} from 'react';
import {AVATAR_TYPES} from '../constants/avatar'


export const useAvatarTypes = ():[string,() => void,() => void]=> {
    const [typeIndex,setTypeIndex] = useState<number>(1)
    

    const setNextAvatar = ():void => {
        typeIndex >= (AVATAR_TYPES.length-1) ? setTypeIndex(0) : setTypeIndex(typeIndex+1)
    }

    const setPrevAvatar = ():void => {
        typeIndex <= 0 ? setTypeIndex(4) : setTypeIndex(typeIndex-1)
    }

    return [AVATAR_TYPES[typeIndex],setNextAvatar,setPrevAvatar]

}