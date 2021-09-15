export const FETCH_USER = 'FETCH_USER' as const
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS' as const
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR' as const


export type UserInfoType = {
    _id?:string,
    created_at:string,
    name:string,
    pay:string,
    date:string,
    avatarType:string,
    current_pay:string,
    total_save:number,
}

export type SetUserDataType = {
    type:string,
    payload:UserInfoType,
}


export type SetUserAction = 
    | SetUserDataType 


