export const CHANGE_AVATAR = 'CHANGE_AVATAR' as const;
export const SET_USER_NAME = 'SET_USER_NAME' as const;
export const SET_USER_PAY = 'SET_USER_PAY' as const;
export const SET_USER_DATE = 'SET_USER_DATE' as const;
export const SET_USER_ID = 'SET_USER_ID' as const;

export type SetUserType = {
    type:string,
    payload:string
}

export type SetUserState = {
    avatarType:string,
    name:string,
    pay:string,
    date:string,
    error:string,
    id:string,
}

export type userInfoType = {
    name:string,
    pay:string,
    date:string,
    avatarType:string,
    current_pay:string,
    total_save:number,
}


export type SetUserAction = 
    | SetUserType

