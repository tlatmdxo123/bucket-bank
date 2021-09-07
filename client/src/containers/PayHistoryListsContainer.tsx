import React, { useEffect } from 'react';
import { useState } from "react"
import { useSelector } from "react-redux"
import PayHistoryLists from '../components/PayHistoryLists';
import { RootState } from '../reducers';
import { PayListTypes } from "../types/payTypes"
import { getCurrentDate, isSameDate } from "../utils/date"

function PayHistoryListsContainer({date,user_id}:{date:string,user_id:string}) {
    const {payHistory,loading} = useSelector((state:RootState) => ({
        payHistory:state.setHistory.data,
        loading:state.setHistory.loading
    }))
    const [currentPaymentLists,setCurrentPaymentLists] = useState<Array<PayListTypes>>([])
    const currentDate = getCurrentDate()
    const isCurrent = date === currentDate
    
    useEffect(() => {
        const currentPayments = payHistory ? payHistory.filter(pay => isSameDate(pay.payment_date,date)) : []
        setCurrentPaymentLists(currentPayments)
    },[payHistory,date])

    
    return (
        <>
            {loading ? <div>loading...</div> : <PayHistoryLists paymentLists={currentPaymentLists} isCurrent={isCurrent} user_id={user_id}/>}
            
        </>
    );
}

export default PayHistoryListsContainer;