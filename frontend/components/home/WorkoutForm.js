import { useState } from "react";

const WorkoutForm = () => {
    const [ title, setTitle ] = useState('')
    const [ load, setLoad ] = useState('')
    const [ qua, setQua ] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      console.log(title, load, qua)
      const workout = { title, load, qua }

      const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/workout`, {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
              'Content-Type': 'application/json'
            }
          })

      const json = await data.json()

      console.log(data)
      if(!data.ok){
        console.log(json.emptyFields)
        setError(json.msg)
      }else{
        setTitle('')
        setLoad('')
        setQua('')
        setError('')
        console.log(json)
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