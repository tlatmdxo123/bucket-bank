import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setUserInfoAction} from '../actions/SetUserActions'
import {RootState} from '../reducers'
import {getUser} from '../api/database'
import { UserInfoType } from '../types/setUserTypes';

export const useUserInfo = ():UserInfoType => {
    let userInfo:UserInfoType = useSelector((state:RootState) => state.setUser)
    const dispatch = useDispatch();
    const fetchUserData = async () => {
        const id = localStorage.getItem('user_id')
        const info = await getUser(id)
        dispatch(setUserInfoAction(info))
    }
    useEffect(() => {
      fetchUserData()
    },[])

    return userInfo

}