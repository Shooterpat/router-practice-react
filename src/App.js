import './App.css';
import Home from "./pages/Home"
import Classes from "./pages/Classes"
import About from "./pages/About"
import Error from "./pages/Error"
import Classsheet from './components/Classsheet';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //importing the browser router and routes from react router dom. Routes is replacing switch from old Routes


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Classes/:classname" element={<Classsheet />} />
        <Route path="/About" element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
