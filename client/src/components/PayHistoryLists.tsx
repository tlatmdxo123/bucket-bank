import React, { useState } from 'react';
import { PayListTypes, updatePaymentType } from '../types/payTypes';
import PayHistoryIndex from './PayHistoryIndex';
import PayHistoryList from './PayHistoryList';
import {MdAdd} from 'react-icons/md'
import { getCurrentDate } from '../utils/date';
import PayHistoryModal from './PayHistoryModal';
import { addPayment, getPaymentList } from '../api/database';

type PayHistoryListsPropsTypes = {
    userId:string
    paymentLists:Array<PayListTypes>,
    setPaymentLists:React.Dispatch<React.SetStateAction<PayListTypes[]>>,
    date:string,
}
function PayHistoryLists({userId,paymentLists,setPaymentLists,date}:PayHistoryListsPropsTypes) {
    const [active,setActive] = useState(false)

    const isEmptyList = paymentLists.length===0
    const currentDate = getCurrentDate()
    const isCurrent = date === currentDate

    const addPaymentList = async (content:string,payment:string) => {
        try {
            await addPayment<updatePaymentType>({id:userId,content,payment})
            const newLists = await getPaymentList(userId,currentDate)
            setPaymentLists(newLists)
        } catch (error) {
            throw error
        }
    }


     
    return (
        <div className='PayHistoryLists'>
            <PayHistoryIndex/>
            <ul>
                {isEmptyList && <p>소비내역이 없습니다</p>}
                {paymentLists?.map(payInfo => {
                    return <PayHistoryList key={payInfo.id} payInfo={payInfo} userId={userId} setPaymentLists={setPaymentLists}/>
                })}
            </ul>
            {isCurrent && <button className='button' type='button' onClick={() => setActive(true)}>
                <MdAdd/>
            </button>}
            {active && 
            <PayHistoryModal title='지출내역 추가하기' submitPayHistory={addPaymentList} setIsModalActive={setActive}/>}
            
       
        </div>
    );
}

export default PayHistoryLists;