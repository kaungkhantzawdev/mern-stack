import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWorkouts } from "../../redux";
import axios from "axios";

const WorkoutForm = () => {
    const [ title, setTitle ] = useState('')
    const [ load, setLoad ] = useState('')
    const [ qua, setQua ] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const dispatch = useDispatch()
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      console.log(title, load, qua)
      const workout = { title, load, qua }
      const body = JSON.stringify(workout)
      const config = {
        'Content-Type': 'application/json'
      }
      const data = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/workout`, body, { headers: config })

      console.log(data)
      if(data.status !== 200){
        // console.log(json.emptyFields)
        console.log('error', data.response.data)
        // setError(json.msg)
      }else{
        setTitle('')
        setLoad('')
        setQua('')
        setError('')
        console.log(data)
        dispatch(fetchWorkouts())
      }
      
    }
    return ( 
        <>
             <form className="create" onSubmit={handleSubmit}> 
              <h3>Add a New Workout</h3>

              <label>Excersize Title:</label>
              <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
              />

              <label>Load (in kg):</label>
              <input 
                type="number" 
                onChange={(e) => setLoad(e.target.value)} 
                value={load}
              />

              <label>Number of Reps:</label>
              <input 
                type="number" 
                onChange={(e) => setQua(e.target.value)} 
                value={qua}
              />

              <button>Add Workout</button>
              {error && <div className="error">{error}</div>}
            </form>
        </>
     );
}
 
export default WorkoutForm;