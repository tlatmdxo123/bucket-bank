import React from 'react';

type UserPayInfoPropsTypes = {
    pay_date:string,
    pay:string,
}
function UserPayInfo({pay_date,pay}:UserPayInfoPropsTypes) {
    return (
        <div>
            <div>
                <span>매월</span>
                <span>{pay_date}일</span>
            </div>
            <div>
                <span>월급</span>
                <span>{pay}원</span>
            </div>
            
        </div>
    );
}

export default UserPayInfo;