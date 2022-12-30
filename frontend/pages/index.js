import { useEffect, useState } from "react"
import WorkoutDetail from "../components/home/WorkoutDetail"
import WorkoutForm from "../components/home/WorkoutForm"
import DefaultLayout from "../components/layouts/DefaultLayout"
import { useDispatch, useSelector } from "react-redux"
import { fetchWorkouts } from "../redux"

export default function Home() {

  const workouts = useSelector( state => state.workouts.workouts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWorkouts())
  }, [])
  
  return (
    <>
    { workouts && console.log('workout index',workouts)}
    <div className="home">
          <div className="workouts">
            {workouts.data && workouts.data.map(workout => (
              // console.log(workout),
              <WorkoutDetail workout={workout} key={workout._id} />
            ))}
          </div>
          <WorkoutForm />
    </div>
    </>
  )
}

Home.getLayout = function getLayout(page){
  return <DefaultLayout>{page}</DefaultLayout>
}