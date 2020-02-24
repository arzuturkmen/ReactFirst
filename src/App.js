import React from 'react';
import './App.css';
import Users from "./components/Users";
import Navbar from "./layout/Navbar";
import AddUser from "./forms/AddUser";
import NotFound from "./pages/NotFound";
import Contribute from "./pages/Contribute";
import UpdateUser from "./forms/UpdateUser";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//import edildi


function App() {

    const test = 34;
    let isAuth = true;

    const Home = () => {
        return (
            <h3>Home Page</h3>
        )
    }

    const About = () => {
        return (
            <h3>About Page
            </h3>
        )
    }


    return (

        <Router>
            <div className="container">
                <Navbar title="User App"></Navbar>
                <Switch>
                    <Route exact path="/" component={Users}/>
                    <Route exact path="/add" component={AddUser}></Route>
                    <Route exact path="/github" component={Contribute}></Route>
                    <Route exact path="/edit/:id" component={UpdateUser}></Route>
                    <Route component={NotFound}></Route>
                </Switch>

            </div>
        </Router>


    );
}

export default App;
