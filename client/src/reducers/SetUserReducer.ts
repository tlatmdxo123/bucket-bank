import {SetUserAction,SetUserState,CHANGE_AVATAR,SET_USER_NAME,SET_USER_PAY,SET_USER_DATE} from '../types/setUserTypes'

const initialState:SetUserState = {
    avatarType:'bear',
    name:'',
    pay:'',
    date:'',
    error:'',
}

export default function setUser(
    state:SetUserState = initialState,
    action:SetUserAction
):SetUserState {
    switch(action.type){
        case CHANGE_AVATAR:
            return {...state,avatarType:action.payload}
        case SET_USER_NAME:
            return {...state,name:action.payload}
        case SET_USER_PAY:
            return {...state,pay:action.payload}
        case SET_USER_DATE:
            return {...state,date:action.payload}
        default:
            return state
    }
}
