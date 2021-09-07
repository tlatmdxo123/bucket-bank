import React from 'react';

function RemainPay({remain}:{remain:number}) {
    return (
        <div className='RemainPay'>
            <div className='label'>남은 월급</div>
            <div className='money'>{remain.toString()}원</div>
        </div>
    );
}

export default RemainPay;