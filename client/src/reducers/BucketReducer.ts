import { bucketActionType, GET_BUCKETS, GET_BUCKETS_ERROR, GET_BUCKETS_SUCCESS } from "../actions/BucketActions"
import { bucketListType } from "../types/bucketType"

const initialState:{
    loading:boolean,
    error:string,
    data:bucketListType[]
} = {
    loading:false,
    error:'',
    data:[]
}

export default function setBucket(
    state=initialState,
    action:bucketActionType
){
    switch(action.type){
        case GET_BUCKETS:
            return {...state,loading:true}
        case GET_BUCKETS_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case GET_BUCKETS_ERROR:
            return {...state,error:action.payload}
        default:
            return state
    }
}