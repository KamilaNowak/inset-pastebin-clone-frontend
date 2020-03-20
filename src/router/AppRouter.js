import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import UserRegister from "../authentication/UserRegister"
import UserLogin from "../authentication/UserLogin";
import Dashboard from "../pages/Dashboard"
import Navbar from "../components/Navbar"
import App from "../App"
import Paste from '../pages/Paste';
import Footer from '../components/Footer';

const AppRouter = () => (
    <BrowserRouter>
    <Navbar/>
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/register" component={UserRegister}/>
        <Route path="/login" component={UserLogin}/>
        <Route path="/home" component={Dashboard}/>
        <Route path="/paste/:id" component={Paste}/>
    </Switch>
</BrowserRouter>

)
export default AppRouter