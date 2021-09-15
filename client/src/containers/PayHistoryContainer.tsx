import React, { useEffect, useState } from 'react';
import { getCurrentDate, getDateFromCreatedToCurrent, isSameDate } from '../utils/date';
import PayHistory from '../components/PayHistory';
import { fetchPayData } from '../actions/PayHistoryActions';
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../reducers';
import { PayListTypes } from '../types/payTypes';
import { selectUser } from '../selectors/userSelectors';
function PayHistoryContainer() {
    const dispatch = useDispatch()
    const {_id:userId,created_at,date:pay_date,pay,current_pay} = useSelector(selectUser)
    const [date,setDate] = useState('')
    const [dateLists,setDateLists] = useState<Array<string>>()
    const [remain,setRemain] = useState(0)
    const currentDate = getCurrentDate()

    const {payHistory} = useSelector((state:RootState) => ({
        payHistory:state.setHistory.data,
    }))

    const isCurrentHistory = (pay:PayListTypes) => {
        const paymentYearMonth = pay.payment_date.slice(0,6)
        const paymentDay = pay.payment_date.slice(6)
        const lastMonth = (+currentDate.slice(0,6)-1).toString()
        return paymentYearMonth===lastMonth && (+paymentDay >= +pay_date) || isSameDate(pay.payment_date,currentDate)
    }

    useEffect(() => {
         if(userId){
            dispatch(fetchPayData(userId))
            const currentFullDate = new Date()
            let dates = getDateFromCreatedToCurrent(created_at,currentFullDate)
            setDateLists(dates)
            setDate(dates[dates.length - 1])
        }
    },[userId])

    useEffect(() => {
        const currRemain = +pay-payHistory.filter(isCurrentHistory).reduce((prev,curr) => (prev + +curr.payment_amount),0)
        setRemain(currRemain)
    },[payHistory])



    
    const props = {
        userId,
        date,
        dateLists,
        pay_date,
        pay,
        current_pay,
        setDate,
        remain
    }

    
    return (
        <>
            {dateLists && <PayHistory {...props}/>}
        </>
        
    );
}

export default PayHistoryContainer;