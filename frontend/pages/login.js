import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import Cookie from 'js-cookie'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const config = {
        headers: { 'Content-Type': 'application/json' }
    };
    const data = JSON.stringify({ email, password })
    axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/login/`, data , config)
    .then(res => {
      setIsLoading(true)
      console.log( 'success',res)
      localStorage.setItem('user', JSON.stringify(res.data))
      Cookie.set('token', res.data.token)
      if(res.status === 200){
          router.push('/')
      }
    })
    .catch(err => {
      setIsLoading(true)
      console.log( 'error',err.response.data.msg)
      setError(err.response.data.msg)
    });
    
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login
