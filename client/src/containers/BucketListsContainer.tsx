import React from 'react';
import BucketLists from '../components/BucketLists';
import BucketTabs from '../components/BucketTabs';
import AddButton from '../components/common/AddButton';

function BucketListsContainer() {
    const setActive = () => {}
    return (
        <div className='Bucket-container'>
            <BucketTabs/>
            <BucketLists/>
            <AddButton onClickHandler={() => setActive()} size='big'/>
        </div>
        
    );
}

export default BucketListsContainer;