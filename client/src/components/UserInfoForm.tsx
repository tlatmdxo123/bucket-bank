import React from 'react';
import {isCorrectUserName,isCorrectPay,isCorrectDate} from '../utils/inputCheck'
import UserInput from './UserInput';
import {userInfoType} from '../types/setUserTypes'
import Button from './common/Button';
import { postUser } from '../api/database'
import {useHistory} from 'react-router-dom'

type UserInfoFormProps = {
    changeUserName:(name:string) => void,
    name:string,
    changeUserPay:(pay:string) => void,
    pay:string,
    changeUserDate:(date:string) => void,
    date:string,
    avatarType:string,
}
function UserInfoForm({changeUserName,name,changeUserPay,pay,changeUserDate,date,avatarType}:UserInfoFormProps) {
    
    const submitUserInfo = async (e:React.FormEvent<HTMLFormElement>,userInfo:userInfoType) => {
        e.preventDefault();
        try {
            await postUser<userInfoType>(userInfo)
            // history.push('/main')
        } catch (error) {
            throw error
        }
    }
    const userInfo = {
        name,
        pay,
        date,
        avatarType,
        current_pay:pay,
        total_save:0
    }
    const isDisabled = !(isCorrectUserName(name) && isCorrectPay(pay) && isCorrectDate(date))
    return (
        <form className='UserForm' onSubmit={(e:React.FormEvent<HTMLFormElement>) => submitUserInfo(e,userInfo)}>
            <UserInput type='nameInput' value={name} setValue={changeUserName} inputChecker={isCorrectUserName} errorMsg='문자만 입력 가능합니다' placeholder='강동원' tag='닉네임'/>
            <UserInput type='payInput' value={pay} setValue={changeUserPay} inputChecker={isCorrectPay} errorMsg='숫자만 입력 가능합니다' placeholder='3000000' tag='월급'/>
            <UserInput type='dateInput' value={date} setValue={changeUserDate} inputChecker={isCorrectDate} errorMsg='1~31의 날짜만 입력 가능합니다' placeholder='21' tag='월급일'/>
            <Button type='submit' size='big' disabled={isDisabled} testId='userInfoSubmit'>
                가계부 작성하러 가기
            </Button>
        </form>
    );
}

export default UserInfoForm;