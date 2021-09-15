import {combineReducers} from 'redux'
import setUser from './SetUserReducer'
import setMenu from './MenuReducer'
import setHistory from './PayHistoryReducer'
import setBucket  from './BucketReducer'

const rootReducer = combineReducers({
    setUser,
    setMenu,
    setHistory,
    setBucket
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;