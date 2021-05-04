import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import Profile from "./Components/Profile/Profile";
import UserList from "./Components/UserList/UserList";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const toggleIsLogin = () => {
        setIsLogin(!isLogin);
    };
    return (
        <Router>
            <MyNavbar isLogin={isLogin} toggleIsLogin={toggleIsLogin} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile/:userId">
                    <Profile isLogin={isLogin} />
                </Route>
                <Route path="/UserList">
                    <UserList isLogin={isLogin} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
