import {CURRENT_MENU,MenuType} from '../types/menuTypes'

export const setCurrentMenu = (menu:string):MenuType => {
    return {
        type:CURRENT_MENU,
        payload:menu
    }
}