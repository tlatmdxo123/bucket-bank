import React, { useState } from 'react';
import { AddPaymentType, PayListTypes } from '../types/payTypes';
import PayHistoryIndex from './PayHistoryIndex';
import PayHistoryList from './PayHistoryList';
import PayHistoryModal from './PayHistoryModal';
import { addPayData } from '../actions/PayHistoryActions';
import { useDispatch } from 'react-redux';
import AddButton from './common/AddButton';

type PayHistoryListsPropsTypes = {
    paymentLists:Array<PayListTypes>,
    user_id :string,
    isCurrent:boolean,
}
function PayHistoryLists({paymentLists,user_id,isCurrent}:PayHistoryListsPropsTypes) {
    const dispatch = useDispatch()
    const [active,setActive] = useState(false)
    const isEmptyList = paymentLists.length===0

    const addPaymentList = async (content:string,payment:string) => {
        const data:AddPaymentType = {content,payment_amount:payment,user_id}
        dispatch(addPayData(data))
        setActive(false);
    }
    return (
        <div className='PayHistoryLists'>
            <PayHistoryIndex/>
            <ul>
                {isEmptyList && <p>소비내역이 없습니다</p>}
                {paymentLists?.map(payInfo => {
                    return <PayHistoryList key={payInfo._id} payInfo={payInfo}/>
                })}
            </ul>
            {isCurrent && <AddButton onClickHandler={() => setActive(true)} size='medium'/>}
            {active && 
            <PayHistoryModal title='지출내역 추가하기' submitPayHistory={addPaymentList} setModalActive={setActive}/>}
            
        </div>
    );
}

export default PayHistoryLists;