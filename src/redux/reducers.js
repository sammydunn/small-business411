//reducers 1 import combineReduxers from redux
import { combineReducers } from 'redux'

//create a variable that stores your state
//user state
const user = (state = null) => state

//business state
const businesses = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const businesses = [...state]
            businesses.splice(action.value, 1)
            return businesses
        case 'FETCH_LIST':
            return action.value
        default:
            return state
    }
}

//export all variable in a combineReduers method
export default combineReducers({ user, businesses })

//create actions.js