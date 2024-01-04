// import logo from './logo.svg';
import {Route,Routes} from "react-router-dom";
import './App.css';
// import Dashboard from './pages/Dashboard';
import Landing from './Components/Landing';
// import Footer from './Components/Footer';
import Loging from './pages/Loging';


import Dashboardx from "./pages/Dashboard";
import Layout from "./pages/Layout";


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Landing/>}></Route>

        {/* <Route path="/" element={<Dashboardx/>}></Route> */}
        <Route path="/login" element={<Loging/>}></Route>
        <Route path="/dash" element={<Dashboardx/>}></Route>
      

     </Routes>
     {/* <Dashboard/> */}
     
    </div>
  );
}

export default App;
