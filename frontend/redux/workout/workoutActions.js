import { request, success, failure } from "./workoutType";
import axios from "axios";

export const workoutRequest = () => {
    return {
        type: request
    };
}
 
export const workoutSuccess = ( workouts ) => {
    return {
        type: success,
        payload: workouts
    }
}

export const workoutFail = ( error ) => {
    return {
        type: failure,
        payload: error
    }
}

export const fetchWorkouts = () => {

    if(localStorage.getItem('user')){
    axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;

    }
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    return (dispatch) => {
        dispatch(workoutRequest())
        const base = process.env.NEXT_PUBLIC_APP_URL
        axios.get(`${base}/api/workout`)
            .then(data => {
                console.log('workouts', data.data)
                dispatch(workoutSuccess(data.data))
            })
            .catch(err => {
                console.log('workouts error', err)
                dispatch(workoutFail(err.message))
            })
    }
}