import React, { useState } from 'react';
import { unformatDate } from '../utils/date';
import DropMenu from './common/DropMenu';
import Date from './Date';

type DateSelectorPropsTypes = {
    date:string,
    dateLists:Array<string>,
    changeDate:(arg:React.MouseEvent<HTMLElement>) => void,
}


function DateSelector({date,dateLists,changeDate}:DateSelectorPropsTypes) {
    const [isSelect,setIsSelect] = useState(false)
    return (
        <div onClick={() => setIsSelect(!isSelect)}>
            <Date date={date} isSelect={isSelect} />
            {isSelect && <DropMenu lists={dateLists} onSelect={changeDate}/>}
        </div>
    );
}

export default DateSelector;