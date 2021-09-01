import React from 'react';
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'
import { formatDate } from '../utils/date';
type DatePropsTypes = {
    date:string,
    isSelect:boolean,
}

function Date({date,isSelect}:DatePropsTypes) {
    const formatedDate = formatDate(date)
    return (
        <div className='Date'>
            <span>{formatedDate}</span>
            <div>
                {isSelect ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
            </div>

        </div>
    );
}

export default Date;