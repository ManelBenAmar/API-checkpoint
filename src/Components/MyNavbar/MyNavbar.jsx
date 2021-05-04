import React from "react";
import { Link } from "react-router-dom";

import "./MyNavbar.css";

function MyNavbar({ isLogin, toggleIsLogin }) {
    return (
        <div id="navbar">
            <h4>
                <Link to="/">Home</Link>
            </h4>
            <h4>
                <Link to="/UserList">Users List</Link>
            </h4>

            {isLogin ? (
                <button onClick={() => toggleIsLogin()}>Logout</button>
            ) : (
                <button onClick={() => toggleIsLogin()}>Login</button>
            )}
        </div>
    );
}

export default MyNavbar;
