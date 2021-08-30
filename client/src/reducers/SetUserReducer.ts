import {SetUserAction,SetUserState,CHANGE_AVATAR,SET_USER_NAME,SET_USER_PAY,SET_USER_DATE,SET_USER_ID} from '../types/setUserTypes'

const initialState:SetUserState = {
    avatarType:'bear',
    name:'',
    pay:'',
    date:'',
    error:'',
    id:''
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
        case SET_USER_ID:
            return {...state,id:action.payload}
        default:
            return state
    }
}
