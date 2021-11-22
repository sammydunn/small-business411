//create functions for the cases switch in reducers.js file

import { smallbizdata } from "../data/smallbizdata"

//export every function
export const fetchList = () => {
    return (dispatch) => {
        const action = {
            type: "FETCH_LIST",
            value: smallbizdata
        }
        dispatch(action)
    }
}

export const addBusiness = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: business
    }
}

export const removeBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}

//create containers