import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBuckets } from '../actions/BucketActions';
import BucketLists from '../components/BucketLists';
import BucketTabs from '../components/BucketTabs';
import AddButton from '../components/common/AddButton';
import { selectUserId } from '../selectors/userSelectors';

function BucketListsContainer() {
    const dispatch = useDispatch()
    const userId = useSelector(selectUserId)
    const [completed,setCompleted] = useState(false)
    
    const setActive = () => {}
    useEffect(() => {
        dispatch(getBuckets(userId))
    },[])
    return (
        <div className='Bucket-container'>
            <BucketTabs onClickTab={setCompleted}/>
            <BucketLists completed={completed}/>
            {!completed && <AddButton onClickHandler={() => setActive()} size='big'/>}
        </div>
        
    );
}

export default BucketListsContainer;