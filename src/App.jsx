import './App.css'
import Home from './assets/Home'
import About from './assets/About'
import Vans from './assets/Vans'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function App() {
  

  return (
    <BrowserRouter>
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
