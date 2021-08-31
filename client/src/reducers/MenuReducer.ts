import {MenuStateTypes,MenuActionTypes,CURRENT_MENU} from '../types/menuTypes'

const initialState = {
    currentMenu:'pay-history'
}

export default function setMenu(
    state:MenuStateTypes = initialState,
    action:MenuActionTypes
):MenuStateTypes{
    switch(action.type){
        case CURRENT_MENU:
            return {
                ...state,
                currentMenu:action.payload
            }
        default:
            return state
    }
}