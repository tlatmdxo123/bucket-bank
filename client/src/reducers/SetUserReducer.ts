import {SetUserAction,SetUserState,CHANGE_AVATAR} from '../types/setUserTypes'

const initialState:SetUserState = {
    avatarType:'bear',
    name:'',
    pay:0,
    date:0
}

export default function setUser(
    state:SetUserState = initialState,
    action:SetUserAction
):SetUserState {
    switch(action.type){
        case CHANGE_AVATAR:
            return {...state,avatarType:action.payload}

        default:
            return state
    }
}
