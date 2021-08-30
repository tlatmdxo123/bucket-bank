import axios from 'axios'

const db = axios.create({
    baseURL:'http://localhost:8000/api/v1/'
})

export const postUser = <T>(info:T) => {
    return db.post('/users',info)
}