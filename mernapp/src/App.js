import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login1 from './screens/Login1';


function App() {
  return (
    <Router>

    <div >
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login1/>}/>


     
    </Routes>
    </div>
     </Router>
  );
}

export default App;
