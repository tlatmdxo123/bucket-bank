import React from 'react';
import { getPaymentList } from '../api/database';
import { PayListTypes } from '../types/payTypes';
import { formatDate, unformatDate } from '../utils/date';
import DateSelector from './DateSelector';
import PayHistoryLists from './PayHistoryLists';
import UserPayInfo from './UserPayInfo';

type PayHistoryPropsTypes = {
        userId:string,
        date:string,
        dateLists:Array<string>,
        changeDate:(arg:React.MouseEvent<HTMLElement>) => void,
        paymentLists:Array<PayListTypes>,
        setPaymentLists:React.Dispatch<React.SetStateAction<PayListTypes[]>>,
        editPaymentList:(list:PayListTypes) => void,
        pay_date:string,
        pay:string,
        current_pay:string,
    }

function PayHistory({userId,date,dateLists,changeDate,paymentLists,setPaymentLists,pay_date,pay,current_pay}:PayHistoryPropsTypes) {
    const formatedDateLists = dateLists.map(date => formatDate(date))
    return (
        <div className='PayHistory'>
            <DateSelector date={date} dateLists={formatedDateLists} changeDate={changeDate}/>
            <UserPayInfo pay_date={pay_date} pay={pay}/>
            <PayHistoryLists userId={userId} paymentLists={paymentLists} setPaymentLists={setPaymentLists} date={date}/>
            {/* <RemainPay/> */}
        </div>
    );
}

export default PayHistory;