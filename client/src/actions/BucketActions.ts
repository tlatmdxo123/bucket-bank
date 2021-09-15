import { bucketListType } from "../types/bucketType";

export const ADD_BUCKET_ITEM = 'ADD_BUCKET_ITEM' as const;
export const GET_BUCKETS = 'GET_BUCKET' as const;
export const GET_BUCKETS_SUCCESS = 'GET_BUCKET_SUCCESS' as const;
export const GET_BUCKETS_ERROR = 'GET_BUCKETS_ERROR' as const;

export const getBuckets = (id:string) => ({
    type:GET_BUCKETS,
    payload:id
})

type getBucketsSuccess = {
    type:string,
    payload:bucketListType[]
}

export const addBucketItem = (item:bucketListType) => ({
    type:ADD_BUCKET_ITEM,
    payload:item
})






export type bucketActionType = 
    | ReturnType<typeof addBucketItem> 
    | getBucketsSuccess
    | ReturnType<typeof getBuckets> 