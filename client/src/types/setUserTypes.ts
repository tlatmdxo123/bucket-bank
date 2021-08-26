export const CHANGE_AVATAR = 'CHANGE_AVATAR' as const;

export type ChangeAvatarType = {
    type:string,
    payload:string
}

export type SetUserState = {
    avatarType:string,
    name:string,
    pay:number,
    date:number,
}

export type SetUserAction = 
    | ChangeAvatarType
