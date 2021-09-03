import React, { useState } from 'react';
import { PayListTypes, updatePaymentType } from '../types/payTypes';
import {MdMoreVert} from 'react-icons/md'
import { deletePayment, getPaymentList, updatePayment } from '../api/database';
import PayHistoryModal from './PayHistoryModal';

type PayHistoryListPropsTypes = {
    payInfo:PayListTypes,
    userId:string,
    setPaymentLists:React.Dispatch<React.SetStateAction<PayListTypes[]>>,
}

function PayHistoryList({payInfo,userId,setPaymentLists}:PayHistoryListPropsTypes) {
    const [isMenuActive,setIsMenuActive] = useState(false)
    const [isModalActive,setIsModalActive] = useState(false)
    const {content,date,payment,id} = payInfo
    const [year,month,day] = date.split('-')

    const editPayHistory = async (content:string,payment:string) => {
        try {
            await updatePayment<updatePaymentType>({id,content,payment})
            const newLists = await getPaymentList(userId,date)
            setPaymentLists(newLists)
        } catch (error) {
            throw error
        }
    }

    const modalActive = () => {
        setIsMenuActive(false)
        setIsModalActive(true)
    }

    const deleteMenu = async () => {
        setIsMenuActive(false)
        deletePayment(id)
        const newLists = await getPaymentList(userId,date)
        setPaymentLists(newLists)
    }
    return (
        <li className='PayHistoryList'>
            <div className='content'>{content}</div>
            <div className='date'>{`${month}.${day}`}</div>
            <div className='payment'>-{payment}원</div>
            <div className='edit' onClick={() => setIsMenuActive(true)}>
                <MdMoreVert/>
            </div>
            {isMenuActive && 
                <ul className='DropMenu'>
                    <li className='dropMenuList' onClick={modalActive}>
                        지출내역 수정하기
                    </li>
                    <li className='dropMenuList' onClick={deleteMenu}>
                        지출내역 삭제하기
                    </li>
                </ul>
            }
            {isModalActive && 
            <PayHistoryModal title='지출내역 수정하기' submitPayHistory={editPayHistory} setIsModalActive={setIsModalActive}/>}
        </li>
    );
}

export default PayHistoryList;