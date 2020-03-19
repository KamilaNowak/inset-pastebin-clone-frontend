import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom"


class Navbar extends React.Component{
render(){
    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
            <div className="row mr-3 ml-2">
                <h3>Inset</h3>
            </div>
        </Link>

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    My pastes
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    Account
                </Link>
            </li>
        </ul>
        </div>
       )
    }
}

export default Navbar;