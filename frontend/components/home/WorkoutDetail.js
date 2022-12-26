import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetail = ({ workout }) => {

    const handleClick = async(e) => {
        let data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/workout/${workout._id}`,{
            method: "DELETE"
        })

        let json = await data.json()

        if(!data.ok){
            console.log(json)
        }else{
            console.log(json)
        }
    }

    return ( 
        <>
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Number of reps: </strong>{workout.qua}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p> 
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
        </>
     );
}
 
export default WorkoutDetail;