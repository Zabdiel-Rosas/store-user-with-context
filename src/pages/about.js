import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const About = () => {
  const {currentUser} = useContext(UserContext)

  return(
    <div>
      <h2>About</h2>
      <pre>{JSON.stringify(currentUser)}</pre>
    </div>
  )
}

export default About