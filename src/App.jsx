import './App.css'
import Home from './assets/Home'
import About from './assets/About'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function App() {
  

  return (
    <>
   
    <BrowserRouter>
    <nav>
        <Link to='/' id='logo'>#VANLIFE</Link>
        <div>
        <Link to='/About'>About</Link>
        <Link to='/Vans'>Vans</Link>
          </div>
    </nav>
    <Routes>
      <Route path= '/' element = {<Home/>}/>
      <Route path= '/About' element = {<About/>}/>
      <Route path= '/Vans' />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
