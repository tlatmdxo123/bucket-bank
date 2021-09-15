import {SetUserAction,FETCH_USER_SUCCESS, UserInfoType} from '../types/setUserTypes'

const initialState = {
    _id:'',
    created_at:'',
    name:'',
    pay:'',
    date:'',
    avatarType:'',
    current_pay:'',
    total_save:0,
}


export default function setUser(
    state:UserInfoType = initialState,
    action:SetUserAction
) {
    switch(action.type){
        case FETCH_USER_SUCCESS:
            return {...action.payload}
        default:
            return state
    }
}
