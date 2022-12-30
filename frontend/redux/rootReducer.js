import { combineReducers } from "@reduxjs/toolkit";
import workoutReducer from "./workout/workoutReducer";

const rootReducer = combineReducers({
    workouts: workoutReducer,
})

export default rootReducer