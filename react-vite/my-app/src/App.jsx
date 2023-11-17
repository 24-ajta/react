
import { useState } from 'react'
import {BrowserRouter as Router, Link, Routes , Route} from 'react-router-dom';


import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import UncontrolledInput from './components/Uncontrolledinput'
import ControlledInput from './components/Controlledinput'
import Basic from './components/Basic'
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/useContext/UseComponent';
import MainComponent from './components/useContext/MainComponent';
import UseReduceCounter from './components/usereducer/UseReducerComponent';
import UseCallbackComponent from './components/usecallback/UseCallbackComponent';
import UseMemoComponent from './components/useMemu/UseMemuComponent';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/Blessy">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>

      </ul>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about/:name' element={<About/>}/>
      <Route path='/dashboard/*' element={<Dashboard/>}/>
    </Routes>

    </Router> */}
    {/* <Controlledinput/> */}
    {/* <UncontrolledInput/> */}
     {/* <Basic/> */}
     {/* data */}
     {/* Some changes */}
      {/* Some more changes... */}
      {/* <UseEffectComponent/> */}
      {/* <UseContextComponent/> */}
      {/* <MainComponent/> */}
      {/* <UseReduceCounter/> */}
      {/* <UseCallbackComponent/> */}
      <UseMemoComponent/>
    </>
  )
}

export default App;