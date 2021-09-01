import React, { useEffect, useState } from 'react';
import { getPaymentList } from '../api/database';
import {useUserInfo} from '../hooks/user'
import { getDateFromCreatedToCurrent, unformatDate } from '../utils/date';
import {PayListTypes} from '../types/payTypes'
import PayHistory from '../components/PayHistory';
function PayHistoryContainer() {
    const {_id:userId,created_at,date:pay_date,pay,current_pay} = useUserInfo();
    const [date,setDate] = useState('')
    const [dateLists,setDateLists] = useState<Array<string>>()
    const [paymentLists,setPaymentLists] = useState<Array<PayListTypes>>()
    useEffect(() => {
         if(userId){
            const currentDate = new Date()
            let dates = getDateFromCreatedToCurrent(created_at,currentDate)
            setDateLists(dates)
            const lastDate = dates[dates.length-1]
            setDate(lastDate)
            getUserPaymentList(lastDate)
        }
    },[userId])

    const getUserPaymentList = async (date:string) => {
        const lists = await getPaymentList(userId,date)
        setPaymentLists(lists)
    }

    const changeDate= async (e:React.MouseEvent<HTMLElement>) => {
        const selectedDate = unformatDate((e.target as HTMLElement).textContent)
        setDate(selectedDate)
        const lists = await getPaymentList(userId,selectedDate)
        setPaymentLists(lists)
    }

    const props = {
        userId,
        date,
        dateLists,
        changeDate,
        paymentLists,
        setPaymentLists,
        pay_date,
        pay,
        current_pay
    }

    
    return (
        <>
            {dateLists && <PayHistory {...props}/>}
        </>
        
    );
}

export default PayHistoryContainer;