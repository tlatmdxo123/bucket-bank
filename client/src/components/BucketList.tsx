import React from 'react';
import { bucketListType } from '../types/bucketType';
import {MdMoreVert} from 'react-icons/md'

function BucketList({bucketInfo}:{bucketInfo:bucketListType}) {
    const {id,content,target,current,date} = bucketInfo
    const rate = ((current/target)*100).toFixed()
    return (
        <li className='BucketList'>
            <div className="bucket-info">
                <div className='main-info'>
                    <div className='content-info'>
                        <p className='content'>{content}</p>
                        <span className='date'>{date}</span>
                    </div>
                    <p className='current'>
                        {current}원
                    </p>
                </div>
                <div className="status-info">
                    <div className="status">
                        <span className='target'>
                        목표달성 금액:{target}
                        </span>
                        <span className='rate'>
                            {rate}%
                        </span>
                    </div>
                    <div className="status-bar">
                        <div className="current-bar" style={{width:`${rate}%`}}>
                            <div className='end-point'></div>
                            <button className='complete-button' type='button'></button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className="buttons">
                <button className='deposit' type='button'>입금</button>
                <button className='withdraw' type='button'>출금</button>
            </div>

            <div className='dropmenu'>
                <MdMoreVert/>
            </div>

        </li>
    );
}

export default BucketList;