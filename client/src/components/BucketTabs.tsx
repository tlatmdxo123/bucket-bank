import React from 'react';

function BucketTabs({onClickTab}:{onClickTab:React.Dispatch<React.SetStateAction<boolean>>}) {
    const changeTab = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const tab = e.target as HTMLElement
        const completed = tab.textContent === '버킷리스트' ? false : true
        onClickTab(completed)
        clearTab()
        tab.classList.add('current')
    }
    const clearTab = () => {
        const tabs = document.querySelectorAll('.tab')
        tabs.forEach(tab => tab.classList.remove('current'))
    }
    return (
        <div className='BucketTabs' onClick={(e) => changeTab(e)}>
            <button className="tab current">버킷리스트</button>
            <button className="tab">완료목록</button>
        </div>
    );
}

export default BucketTabs;