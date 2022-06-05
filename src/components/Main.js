
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes
  } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Header from "./navBar";

const Main = (props) => {
    return (
        <div>   
           <Header />
           <Routes>
                <Route exact path='/Dashboard' element={<Dashboard />} />
           </Routes>
        </div>
    )
}


export default Main;