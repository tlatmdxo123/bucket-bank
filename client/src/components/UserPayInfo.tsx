import React from 'react';

type UserPayInfoPropsTypes = {
    pay_date:string,
    pay:string,
}
function UserPayInfo({pay_date,pay}:UserPayInfoPropsTypes) {
    return (
        <div className='UserPayInfo'>
            <div className='contentWrap'>
                <span className='label'>매월</span>
                <span className='content'>{pay_date}일</span>
            </div>
            <div className='contentWrap'>
                <span className='label'>월급</span>
                <span className='content'>{pay}원</span>
            </div>
            
        </div>
    );
}

export default UserPayInfo;