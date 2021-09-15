import axios from 'axios'
import { PayListTypes } from '../types/payTypes'
import {UserInfoType} from '../types/setUserTypes'

const db = axios.create({
    baseURL:'http://localhost:8000/api/v1/'
})

export const postUser = <T>(info:T) => {
    return db.post('/users',info)
}

export const getUser = async (id:string):Promise<UserInfoType> => {
    return  (await db.get(`/users?id=${id}`)).data
}

export const getPaymentList = async (userId:string):Promise<Array<PayListTypes>> => {
    return  (await db.get(`/payments?id=${userId}`)).data
}

export const updatePayment = async <T>(info:T) => {
    return await db.put(`/payments`,info)
}

export const addPayment = async <T>(info:T) => {
    return await db.post(`/payments`,info)
}

export const deletePayment = async (id:string) => {
    return await db.delete(`/payments?id=${id}`)
}

export const getBuckets = async (id:string) => {
    return (await db.get(`/buckets?id=${id}`)).data
}