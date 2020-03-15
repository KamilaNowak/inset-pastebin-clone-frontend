import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import UserRegister from "../authentication/UserRegister"
import UserLogin from "../authentication/UserLogin";
import App from "../App"

const AppRouter = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/register" component={UserRegister}/>
        <Route path="/login" component={UserLogin}/>
    </Switch>
</BrowserRouter>
)
export default AppRouter