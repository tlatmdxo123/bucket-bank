import { ADD_PAY_DATA_ERROR, ADD_PAY_DATA_SUCCESS, DELETE_PAY_DATA_ERROR, DELETE_PAY_DATA_SUCCESS, FETCH_PAY_DATA, FETCH_PAY_DATA_ERROR, FETCH_PAY_DATA_SUCCESS,PayActionType,PayAddSuccessActionType,PayDeleteActionType,PayErrorActionType,PayFetchActionType,PayListTypes,PayStateType, PayUpdateActionType, UPDATE_PAY_DATA_ERROR, UPDATE_PAY_DATA_SUCCESS } from "../types/payTypes";

const initialState:PayStateType = {
    data:[],
    loading:false,
    error:''
}
export default function setHistory(
    state:PayStateType = initialState,
    action:PayActionType
):PayStateType {
    switch(action.type){
      case FETCH_PAY_DATA:
          return {...state,loading:true}
      case FETCH_PAY_DATA_SUCCESS:
          return {...state,loading:false,data:(action as PayFetchActionType).payload}
      case FETCH_PAY_DATA_ERROR:
          return {...state,loading:false,data:(action as PayFetchActionType).payload}
      case ADD_PAY_DATA_SUCCESS:
          return {...state,data:[...state.data,(action as PayAddSuccessActionType).payload]}
      case ADD_PAY_DATA_ERROR:
          return {...state,error:(action as PayErrorActionType).payload}
      case UPDATE_PAY_DATA_SUCCESS:
          return {...state,data:state.data.map(pay => {
              return pay._id === (action as PayUpdateActionType).payload.id
                ? {...pay,...(action as PayUpdateActionType).payload}
                : pay
          })}
      case UPDATE_PAY_DATA_ERROR:
          return {...state,error:(action as PayErrorActionType).payload}
      case DELETE_PAY_DATA_SUCCESS:
          return {...state,data:state.data.filter(pay => pay._id !== (action as PayDeleteActionType).payload)}
      case DELETE_PAY_DATA_ERROR:
          return {...state,error:(action as PayErrorActionType).payload}
      default:
          return state
    }
}