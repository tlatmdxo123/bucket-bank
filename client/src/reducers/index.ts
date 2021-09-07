import {combineReducers} from 'redux'
import setUser from './SetUserReducer'
import setMenu from './MenuReducer'
import setHistory from './PayHistoryReducer'

const rootReducer = combineReducers({
    setUser,
    setMenu,
    setHistory
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;