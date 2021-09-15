import {FETCH_USER} from '../types/setUserTypes'

export const fetchUser = (id:string):{type:string,payload:string} => {
    return {
        type:FETCH_USER,
        payload:id,
    }
}