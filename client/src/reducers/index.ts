import {combineReducers} from 'redux'
import setUser from './SetUserReducer'
import setMenu from './MenuReducer'

const rootReducer = combineReducers({
    setUser,
    setMenu
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;