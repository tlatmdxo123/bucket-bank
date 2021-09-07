import React, { useState } from 'react';
import { unformatDate } from '../utils/date';
import DropMenu from './common/DropMenu';
import Date from './Date';

type DateSelectorPropsTypes = {
    date:string,
    dateLists:Array<string>,
    setDate:React.Dispatch<React.SetStateAction<string>>,
}


function DateSelector({date,dateLists,setDate}:DateSelectorPropsTypes) {
    const [isSelect,setIsSelect] = useState(false)
    const changeDate = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        const date = (e.target as HTMLElement).innerText
        setDate(unformatDate(date))
    }
    return (
        <div className='DateSelector' onClick={() => setIsSelect(!isSelect)}>
            <Date date={date} isSelect={isSelect} />
            {isSelect && <DropMenu lists={dateLists} onSelect={(e) => changeDate(e)}/>}
        </div>
    );
}

export default DateSelector;