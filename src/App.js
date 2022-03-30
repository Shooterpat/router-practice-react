import './App.css';
import Home from "./pages/Home"
import Classes from "./pages/Classes"
import About from "./pages/About"
import Error from "./pages/Error"
import Classsheet from './components/Classsheet';
import Protected from './components/Protected';
import Navbar from './components/Navbar';
import NestedRouteTwo from './components/NestedRouteTwo';
import NestedRouteOne from './components/NestedRouteOne';
import ProtectedRoutes from './ProtectedRoutes';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom' //importing the browser router and routes from react router dom. Routes is replacing switch from old Routes


function App() {
  //create user
  const [user, setUser] = useState({admin: false})
  const [buttonTxt, setButtonTxt] = useState('Sign In')
  console.log(user, 'user')
  const {admin} = user
  // let buttonTxt = 'Toggle sign ins'
  
  const handleSituation = () =>{
    let value = admin
    if(value === true){
      setButtonTxt('Sign In')
    }
    if(value === false){
      setButtonTxt('Sign Out')
    }
    setUser({admin:(!value)})
  }
  

  return (
    
    <Router>
      <Navbar />
      <button onClick={handleSituation}>{buttonTxt}</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Classes/:classname" element={<Classsheet />} />
        <Route path="/About" element={<About />} />
        <Route path = "/conditionallyProtected" element = {admin ? <Protected/> : <Navigate replace to="/Home" />} />
        <Route element={<ProtectedRoutes user={user}/>}>
          <Route path='/Protected1' element={<NestedRouteOne />}/>
          <Route path='/Protected2' element={<NestedRouteTwo />}/>
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
    
  );
}

export default App;
