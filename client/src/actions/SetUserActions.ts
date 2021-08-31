import {SetUserDataType,UserInfoType, SET_USER_DATA} from '../types/setUserTypes'

export const setUserInfoAction = (info:UserInfoType):SetUserDataType => {
    return {
        type:SET_USER_DATA,
        payload:info,
    }
}