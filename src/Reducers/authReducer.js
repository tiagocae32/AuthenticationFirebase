import { types } from "../Types/types";


const initialState = {
    uid: null,
    name: null,
    isAuthenticated: false,
    loading: false
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.LOGINEXITOSO:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName,
                isAuthenticated: true
            }
        case types.LOGOUT:
            return {
                isAuthenticated: false
            }
        case types.STARTLOADING:
            return{
                ...state,
                loading: true
            }
        case types.FINISHLOADING:
            return{
                ...state,
                loading: false
            }
    
        default:
            return state
    }



}