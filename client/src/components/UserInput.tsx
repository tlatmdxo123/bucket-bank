import React,{ChangeEvent,useState} from 'react';


type UserInput = {
    type:string,
    inputChecker:(input:string) => boolean,
    errorMsg:string,
    placeholder:string,
    tag:string,
    value:string,
    setValue:(input:string) => void,
}

function UserInput({type,inputChecker,errorMsg,placeholder,tag,value,setValue}:UserInput) {
    const [error,setError] = useState<string>('')
    const inputEl = document.querySelector(`.${type}`)

    const onChangeHadler = (input:string):void => {
        setValue(input)
        input.length===0 && resetInputState()
        if(input.length>0){
            activeInput()
            !inputChecker(input) && errorCheck()
            inputChecker(input) && resetError()
        }
        
    }

    const errorCheck = ():void => {
        resetInputState()
        inputEl.classList.add('error')
        setError(errorMsg)
    }

    const resetInputState = () => {
        inputEl.classList.remove('active')
        resetError()
    }
    const resetError = () => {
        inputEl.classList.remove('error')
        setError('')
    }

    const activeInput = () => {
        inputEl.classList.add('active')
    }

    return (
        <div className='input-wrap'>
            <div className={`input-box ${type}`} data-test-id={type}>
                <span className='tag'>{tag}</span>
                <input value={value} onChange={(e:ChangeEvent<HTMLInputElement>) => onChangeHadler(e.target.value)} placeholder={placeholder}/>
            </div>
            <p className='error' data-test-id='error'>{error}</p>
        </div>
    );
}

export default UserInput;