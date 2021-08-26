import {CHANGE_AVATAR} from '../types/setUserTypes'
import {ChangeAvatarType} from '../types/setUserTypes'

export const changeAvatar = (avatarType:string):ChangeAvatarType => {
    return {
        type:CHANGE_AVATAR,
        payload:avatarType
    }
}
