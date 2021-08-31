export const CURRENT_MENU = 'CURRENT_MENU' as const

export type MenuType = {
    type:string,
    payload:string
}

export type MenuStateTypes = {
    currentMenu:string
}

export type MenuActionTypes = MenuType