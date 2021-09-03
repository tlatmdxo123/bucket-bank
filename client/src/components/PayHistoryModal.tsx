import React, { useState } from 'react';
import { isCorrectPay } from '../utils/inputCheck';
import Modal from './common/Modal';

type PayHistoryModalPropsTypes = {
    title:string,
    submitPayHistory:(content:string,payment:string) => void,
    setIsModalActive:React.Dispatch<React.SetStateAction<boolean>>

}

function PayHistoryModal({title,submitPayHistory,setIsModalActive}:PayHistoryModalPropsTypes) {
    const [payError,setPayError] = useState('')
    const [content,setContent] = useState('')
    const [payment,SetPayment] = useState('')

    const isButtonActive = content.length>0 && payment.length>0 &&isCorrectPay(payment)

    const setPay = (pay:string) => {
        SetPayment(pay)
        isCorrectPay(pay) ? setPayError('') : setPayError('숫자만 입력가능합니다')
    }
    const onKeyPess = (e:React.KeyboardEvent<HTMLFormElement>) => {
        (e.key === 'Enter' && isButtonActive) && submitPayHistory(content,payment)
    }
    return (
        <Modal>
            <form onSubmit={() => submitPayHistory(content,payment)} onKeyPress={(e) => onKeyPess(e)}>
                <h3 className='title'>{title}</h3>
                <div className='input'>
                    <label>지출내용 <div className='dot'>*</div></label>
                    <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
                </div>
                <div className='input'>
                    <label>지출비용 <div className='dot'>*</div></label>
                    <input type="text" value={payment} onChange={(e) => setPay(e.target.value)}/>
                    <p className='error'>{payError}</p>
                </div>
                <div className='buttons'>
                    <button className='cancel' onClick={() => setIsModalActive(false)} disabled={!isButtonActive}>
                        취소
                    </button>
                    <button className='submit' type='submit' disabled={!isButtonActive}>
                        확인
                    </button>
                </div>
            </form>
            
            
        </Modal>
    );
}

export default PayHistoryModal;