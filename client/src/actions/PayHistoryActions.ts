import { AddPaymentType, ADD_PAY_DATA, DELETE_PAY_DATA, FETCH_PAY_DATA, UpdatePaymentType, UPDATE_PAY_DATA } from "../types/payTypes"

export const fetchPayData = (userId:string) => {
    return {
        type:FETCH_PAY_DATA,
        payload:userId
    }
}

export const addPayData = (data:AddPaymentType) => {
    return {
        type:ADD_PAY_DATA,
        payload:data
    }
}

export const updatePayData = (data:UpdatePaymentType) => {
    return {
        type:UPDATE_PAY_DATA,
        payload:data
    }
}

export const deletePayData = (id:string) => {
    return {
        type:DELETE_PAY_DATA,
        payload:id
    }
}