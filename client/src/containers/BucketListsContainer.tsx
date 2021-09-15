import React,{useState} from 'react';
import BucketLists from '../components/BucketLists';
import BucketTabs from '../components/BucketTabs';
import AddButton from '../components/common/AddButton';

function BucketListsContainer() {
    const [completed,setCompleted] = useState(false)
    const setActive = () => {}
    return (
        <div className='Bucket-container'>
            <BucketTabs onClickTab={setCompleted}/>
            <BucketLists completed={completed}/>
            {!completed && <AddButton onClickHandler={() => setActive()} size='big'/>}
        </div>
        
    );
}

export default BucketListsContainer;