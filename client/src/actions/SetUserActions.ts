import {CHANGE_AVATAR,SET_USER_NAME,SET_USER_PAY,SET_USER_DATE,SET_USER_ID} from '../types/setUserTypes'
import {SetUserType} from '../types/setUserTypes'

export const changeAvatar = (avatarType:string):SetUserType => {
    return {
        type:CHANGE_AVATAR,
        payload:avatarType
    }
}

export const setUserName = (name:string):SetUserType => {
    return {
        type:SET_USER_NAME,
        payload:name
    }
}

export const setUserPay = (pay:string):SetUserType => {
    return {
        type:SET_USER_PAY,
        payload:pay
    }
}

export const setUserDate = (date:string):SetUserType => {
    return {
        type:SET_USER_DATE,
        payload:date
    }
}

export const setUserId = (id:string):SetUserType => {
    return {
        type:SET_USER_ID,
        payload:id
    }
}