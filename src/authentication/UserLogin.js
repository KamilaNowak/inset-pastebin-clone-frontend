import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {loginProfile}  from '../api/ApiCalls';
import { TOKEN } from "../constants/ConstantVariables";
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
            <React.Fragment>
                    <Grid container justify = "center" className="user-form">
                        <form onSubmit ={this.onSubmitHandler} className="user-form-fields">
                            <h1 className="text-title">Log in</h1>
                            <TextField id="input-passwd" label="password" variant="outlined"
                                onChange={this.onChangeHandler}
                                name="username"
                                value={username}
                                placeholder="username"
                            />
                            <br/>
                        <TextField id="input-passwd" label="password" variant="outlined"
                                onChange={this.onChangeHandler}
                                name="password"
                                value={password}
                                placeholder="password"
                                type="password"
                        />
                            <br/>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                            <h5 className="text-info">
                                If you do not have account - <Button>
                                        <Link to="/register">Register</Link>
                                </Button></h5>
                            <h4>{this.state.requestResult}</h4>
                        </form> 
                    </Grid>
         </React.Fragment>
        );
    }
}