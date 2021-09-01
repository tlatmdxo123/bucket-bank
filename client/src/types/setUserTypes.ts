export const SET_USER_DATA = 'SET_USER_DATA' as const


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


