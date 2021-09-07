import React, { useState } from 'react';
import { PayListTypes, UpdatePaymentType } from '../types/payTypes';
import {MdMoreVert} from 'react-icons/md'
import PayHistoryModal from './PayHistoryModal';
import { useDispatch } from 'react-redux';
import { deletePayData, updatePayData } from '../actions/PayHistoryActions';

type PayHistoryListPropsTypes = {
    payInfo:PayListTypes,
}

function PayHistoryList({payInfo}:PayHistoryListPropsTypes) {
    const dispatch = useDispatch()
    const [isMenuActive,setIsMenuActive] = useState(false)
    const [isModalActive,setIsModalActive] = useState(false)
    const {content,payment_date,payment_amount,_id,user_id} = payInfo

    const month = payment_date.slice(4,6)
    const day = payment_date.slice(6)

    const modalActive = () => {
        setIsMenuActive(false)
        setIsModalActive(true)
    }

    const deletePayHistory = () => {
        setIsModalActive(false)
        dispatch(deletePayData(_id))
    }

    const editPayHistory = (content:string,payment_amount:string) => {
        const info:UpdatePaymentType = {
            content,
            payment_amount,
            id:_id    
        }
        dispatch(updatePayData(info))
    }


    return (
        <li className='PayHistoryList'>
            <div className='content'>{content}</div>
            <div className='date'>{`${month}.${day}`}</div>
            <div className='payment'>-{payment_amount}원</div>
            <div className='edit' onClick={() => setIsMenuActive(true)}>
                <MdMoreVert/>
            </div>
            {isMenuActive && 
                <ul className='DropMenu'>
                    <li className='dropMenuList' onClick={modalActive}>
                        지출내역 수정하기
                    </li>
                    <li className='dropMenuList' onClick={deletePayHistory}>
                        지출내역 삭제하기
                    </li>
                </ul>
            }
            {isModalActive && 
            <PayHistoryModal title='지출내역 수정하기' submitPayHistory={editPayHistory} setModalActive={setIsModalActive}/>}
        </li>
    );
}

export default PayHistoryList;