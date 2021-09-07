export const FETCH_PAY_DATA = 'FETCH_PAY_DATA'
export const FETCH_PAY_DATA_SUCCESS = 'FETCH_PAY_DATA_SUCCESS'
export const FETCH_PAY_DATA_ERROR = 'FETCH_PAY_DATA_ERROR'

export const ADD_PAY_DATA = 'ADD_PAY_DATA'
export const ADD_PAY_DATA_SUCCESS = 'ADD_PAY_DATA_SUCCESS'
export const ADD_PAY_DATA_ERROR = 'ADD_PAY_DATA_ERROR'

export const UPDATE_PAY_DATA = 'UPDATE_PAY_DATA'
export const UPDATE_PAY_DATA_SUCCESS = 'UPDATE_PAY_DATA_SUCCESS'
export const UPDATE_PAY_DATA_ERROR = 'UPDATE_PAY_DATA_ERROR'

export const DELETE_PAY_DATA = 'DELETE_PAY_DATA'
export const DELETE_PAY_DATA_SUCCESS = 'DELETE_PAY_DATA_SUCCESS'
export const DELETE_PAY_DATA_ERROR = 'DELETE_PAY_DATA_ERROR'

export type PayListTypes = {
    _id:string,
    content:string,
    payment_amount:string,
    payment_date:string,
    user_id:string
}

export type UpdatePaymentType = {
    id:string,
    content:string,
    payment_amount:string
}

export type AddPaymentType = {
    content:string,
    payment_amount:string,
    user_id:string
}

export type PayFetchActionType = {
    type:string,
    payload:PayListTypes[]
}
export type PayAddActionType = {
    type:string,
    payload:AddPaymentType
}
export type PayAddSuccessActionType = {
    type:string,
    payload:PayListTypes,
}
export type PayUpdateActionType = {
    type:string,
    payload:UpdatePaymentType
}
export type PayDeleteActionType = {
    type:string,
    payload:string
}
export type PayErrorActionType = {
    type:string,
    payload:string,
}


export type PayActionType = PayFetchActionType | PayAddActionType | PayUpdateActionType | PayDeleteActionType

export type PayStateType = {
    data:PayListTypes[],
    loading:boolean,
    error:string
}