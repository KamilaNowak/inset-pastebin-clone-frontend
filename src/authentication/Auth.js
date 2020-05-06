import React from 'react';
import ReactDOM from 'react-dom';
import { TOKEN } from "../constants/ConstantVariables";
import {Redirect} from "react-router-dom";
class Auth extends React.Component{
        onLogout=()=>{
        localStorage.setItem(TOKEN,"");
        return <Redirect to="/login"/>
    } 
    render(){  
        return (
            <div></div>
        )
    }
}
export default Auth