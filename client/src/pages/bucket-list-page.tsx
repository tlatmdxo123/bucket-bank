import React from 'react';
import BucketListsContainer from '../containers/BucketListsContainer';
import MenuContainer from '../containers/MenuContainer';

function BucketListPage() {
    return (
        <>
            <MenuContainer/>
            <BucketListsContainer/>
        </>
    );
}

export default BucketListPage;