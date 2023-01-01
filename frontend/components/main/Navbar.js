import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter()
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  },[])
  const handleClick = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }
  return (
    <header>
    <div className="container">
      <Link href="/">
        <h1>Workout Buddy</h1>
      </Link>
      <nav>
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!user && (
          <div>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </div>
        )}
      </nav>
    </div>
  </header>
  )
}

export default Navbar