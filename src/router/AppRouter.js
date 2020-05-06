import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import UserRegister from "../authentication/UserRegister"
import UserLogin from "../authentication/UserLogin";
import Dashboard from "../pages/Dashboard"
import Navbar from "../components/Navbar"
import App from "../App"
import Paste from '../pages/Paste';
import MyAccount from '../pages/MyAccount'
import RequireAuth from './RequireAuth';


const AppRouter = () => (
    <BrowserRouter>
    <Navbar/>
    <Switch>
        <RequireAuth path="/" component={App} exact/>
        <Route path="/register" component={UserRegister}/>
        <Route path="/login" component={UserLogin}/>
        <RequireAuth path="/home" component={Dashboard}/>
        <RequireAuth path="/paste/:id" component={Paste}/>
        <RequireAuth path="/account" component={MyAccount}/>
    </Switch>
</BrowserRouter>

)

export default AppRouter