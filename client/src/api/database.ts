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

export const getPaymentList = async (userId:string,date:string):Promise<Array<PayListTypes>> => {
    return  (await db.get(`/payments?id=${userId}&date=${date}`)).data
}
