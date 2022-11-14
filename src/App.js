import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

// Components
import Index from './pages';
import About from './pages/about';

function App() {
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

        <Routes>
          <Route index element={<Index/>} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
