import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { login } from '../utils/login'

const Index = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      {currentUser ? (
        <button
          onClick={() => {
            // call logout
            setCurrentUser(null)
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login()
            setCurrentUser(user)
          }}
        >
          login
        </button>
      )}
    </div>
  )
}

export default Index
