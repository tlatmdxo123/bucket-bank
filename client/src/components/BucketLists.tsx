import React from 'react';
import BucketList from './BucketList';

function BucketLists() {
    const lists = [
    {
        "id": "60b0bb831c19321f98b09393",
        "content": "test4",
        "target": 400000,
        "current": 400000,
        "date": "2021-05-10"
    },
    {
        "id": "60b0bbb91c19321f98b09394",
        "content": "미국 여행",
        "target": 400000,
        "current": 400000,
        "date": "2021-05-10"
    },
    {
        "id": "60b463b6d87567af794379fc",
        "content": "노트북 구입",
        "target": 700000,
        "current": 700000,
        "date": "2021-05-31"
    },
    {
        "id": "60b9d4d675750aa7c3a82d02",
        "content": "스위스 스키 여행",
        "target": 400000,
        "current": 400000,
        "date": "2021-05-10"
    },
    {
        "id": "60c6ff3164d736651b4c79cb",
        "content": "test6",
        "target": 10000,
        "current": 10000,
        "date": "2021-06-14"
    },
    {
        "id": "60c7373964d736651b4c79cc",
        "content": "test4",
        "target": 2000000,
        "current": 2000000,
        "date": "2021-06-14"
    },
    {
        "id": "60c94ddf275088076df054c8",
        "content": "프랑스 여행",
        "target": 10000000,
        "current": 10000000,
        "date": "2021-06-16"
    },
    {
        "id": "60c9717aa4c8e40c58d753ec",
        "content": "test7",
        "target": 1000000,
        "current": 1000000,
        "date": "2021-06-16"
    },
    {
        "id": "60ca9fd6bd61c65e69650eb7",
        "content": "test6",
        "target": 1000000,
        "current": 1000000,
        "date": "2021-06-17"
    },
    {
        "id": "60d07eb714df7c124ab640c4",
        "content": "test7",
        "target": 1000000,
        "current": 1000000,
        "date": "2021-06-21"
    }
]
    return (
        <ul className='BucketLists'>
            {lists.map(list => <BucketList bucketInfo={list}/>)}
        </ul>
    );
}

export default BucketLists;