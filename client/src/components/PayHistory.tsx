import React from 'react';
import { getPaymentList } from '../api/database';
import { PayListTypes } from '../types/payTypes';
import { formatDate, unformatDate } from '../utils/date';
import DateSelector from './DateSelector';
import UserPayInfo from './UserPayInfo';

type PayHistoryPropsTypes = {
        userId:string,
        date:string,
        dateLists:Array<string>,
        changeDate:(arg:React.MouseEvent<HTMLElement>) => void,
        paymentLists:Array<PayListTypes>,
        setPaymentLists:React.Dispatch<React.SetStateAction<PayListTypes[]>>,

    }

function PayHistory({userId,date,dateLists,changeDate,paymentLists,setPaymentLists}:PayHistoryPropsTypes) {
    const formatedDateLists = dateLists.map(date => formatDate(date))
    return (
        <div>
            <DateSelector date={date} dateLists={formatedDateLists} changeDate={changeDate}/>
            {/* <UserPayInfo/> */}
            {/* <PayHistoryLists/>
            <RemainPay/> */}
        </div>
    );
}

export default PayHistory;