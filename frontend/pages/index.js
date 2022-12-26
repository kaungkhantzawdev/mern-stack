import { useEffect, useState } from "react"
import WorkoutDetail from "../components/home/WorkoutDetail"
import WorkoutForm from "../components/home/WorkoutForm"
import DefaultLayout from "../components/layouts/DefaultLayout"

export default function Home() {

  const [ workouts, setWorkouts ] = useState('')
  const base = process.env.NEXT_PUBLIC_APP_URL
  useEffect(() => {
    fetch(`${base}/api/workout`)
        .then(res => res.json())
        .then(data => setWorkouts(data))
  }, [])

  return (
    <>
    <div className="home">
          <div className="workouts">
            {workouts && workouts.data.map(workout => (
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