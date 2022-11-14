import { useState } from 'react'
// React Router DOM library
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
// Context
import { UserContext } from './context/UserContext'
// Components
import Index from './pages';
import About from './pages/about';

function App() {
  // States
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        <UserContext.Provider
          value={{ currentUser, setCurrentUser }}
        >
          <Routes>
            <Route index element={<Index/>} />
            <Route path='about' element={<About />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
