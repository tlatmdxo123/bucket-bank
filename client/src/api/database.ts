import axios from 'axios'
import {UserInfoType} from '../types/setUserTypes'

const db = axios.create({
    baseURL:'http://localhost:8000/api/v1/'
})

export const postUser = <T>(info:T) => {
    return db.post('/users',info)
}

export const getUser = async (id:string):Promise<UserInfoType> => {
    return await (await db.get(`/users?id=${id}`)).data
}

