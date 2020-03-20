import React from 'react';
import ReactDOM from 'react-dom';
import { TOKEN } from "../constants/ConstantVariables";
import {Redirect} from "react-router-dom";
import { withRouter } from 'react-router-dom'

export function onLogout (){
    localStorage.setItem(TOKEN,"");
    return <Redirect to='/login'/>
}