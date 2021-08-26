import {combineReducers} from 'redux'
import setUser from './SetUserReducer'

const rootReducer = combineReducers({
    setUser
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;