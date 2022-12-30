import { failure, request, success } from "./workoutType"

const initialState = {
    loading: true,
    workouts: [],
    error: ''
}

const workoutReducer = (state = initialState, action ) => {
    switch(action.type){
        case request: 
            return {
                ...state,
                loading : false
            }

        case success: 
            return {
                loading: false,
                workouts: action.payload,
                error: ''
            }

        case failure:
            return {
                loading: false,
                workouts: [],
                error: action.payload
            }
        
        default: return state
    }
}
 
export default workoutReducer