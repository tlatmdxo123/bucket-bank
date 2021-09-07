import {SetUserAction,SET_USER_DATA,UserInfoType} from '../types/setUserTypes'

const initialState:UserInfoType = {
    _id:'',
    created_at:'',
    avatarType:'bear',
    name:'',
    pay:'',
    date:'',
    current_pay:'',
    total_save:0,
}

export default function setUser(
    state:UserInfoType = initialState,
    action:SetUserAction
):UserInfoType {
    switch(action.type){
        case SET_USER_DATA:
            return {...action.payload}
        default:
            return state
    }
}
