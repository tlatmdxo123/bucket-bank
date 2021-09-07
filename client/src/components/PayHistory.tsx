import React from 'react';
import PayHistoryListsContainer from '../containers/PayHistoryListsContainer';
import { formatDate } from '../utils/date';
import DateSelector from './DateSelector';
import RemainPay from './RemainPay';
import UserPayInfo from './UserPayInfo';

type PayHistoryPropsTypes = {
        userId:string,
        date:string,
        dateLists:Array<string>,
        pay_date:string,
        pay:string,
        setDate:React.Dispatch<React.SetStateAction<string>>,
        remain:number
    }

function PayHistory({userId,date,dateLists,pay_date,pay,setDate,remain}:PayHistoryPropsTypes) {
    const formatedDateLists = dateLists.map(date => formatDate(date))
    return (
        <div className='PayHistory'>
            <DateSelector date={date} dateLists={formatedDateLists} setDate={setDate}/>
            <UserPayInfo pay_date={pay_date} pay={pay}/>
            <PayHistoryListsContainer date={date} user_id={userId}/>
            <RemainPay remain={remain}/>
        </div>
    );
}

export default PayHistory;