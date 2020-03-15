import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {loginProfile}  from '../api/ApiCalls';
import { TOKEN } from "../constants/ConstantVariables";
export default class UserLogin extends React.Component{

    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            requestResult:'',
        }
    }
    onChangeHandler =(event) =>{
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
    onSubmitHandler =(event) =>{
        event.preventDefault()
        const loginRequest ={
            username: this.state.username,
            password: this.state.password, 
        }
     loginProfile(loginRequest)
    .then(json=> {localStorage.setItem(TOKEN, json.token)})
    .catch(error => this.setState({
        requestResult: error.message
    }))  
}

    render(){
        const {username, password} = this.state
        return (
            <div className="col">
                <div className="row text-center">
                    <form onSubmit ={this.onSubmitHandler}>
                        <h1>Log in</h1>
                        <input
                        onChange={this.onChangeHandler}
                        name="username"
                        value={username}
                        placeholder="username"
                        />
                        <br/>
                        <input
                        onChange={this.onChangeHandler}
                        name="password"
                        value={password}
                        placeholder="password"
                        type="password"
                        />
                        <br/>
                        <button type="submit">Submit </button>
                        <br/>
                        <h5> If you do not have account - <Link to="/register">Register</Link></h5>
                        <h4>{this.state.requestResult}</h4>
                    </form> 
                </div>
          </div>
        );
    }
}