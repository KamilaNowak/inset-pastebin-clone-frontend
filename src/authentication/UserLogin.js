import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {loginProfile}  from '../api/ApiCalls';
import { TOKEN } from "../constants/ConstantVariables";
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Alert from '@material-ui/lab/Alert';


export default class UserLogin extends React.Component{

    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            requestResult:'',
        }
        this.onSubmitHandler=this.onSubmitHandler.bind(this)
        this.onChangeHandler=this.onChangeHandler.bind(this)
    }
    onChangeHandler =(event) =>{
        console.log("W onChange : "+ localStorage.getItem(TOKEN))
        console.log(event.target.value)
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
        console.log(loginRequest)
     loginProfile(loginRequest)
    .then(json=> {localStorage.setItem(TOKEN, json.token)})
    .catch(error => this.setState({
        requestResult: error.message
    }))  
    console.log("W loginie : "+ localStorage.getItem(TOKEN))
    if(localStorage.getItem(TOKEN)!=''){
        return <Redirect to="/home"/>
    }
}

    render(){
        const {username, password} = this.state
        return (
            <MuiThemeProvider>
            <React.Fragment>
                    <Grid container justify = "center" className="user-form">
                        <form onSubmit ={this.onSubmitHandler} className="user-form-fields">
                            <h1 className="text-title">Log in</h1>
                            <TextField  fullWidth id="input-passwd" label="username" variant="outlined"
                                onChange={this.onChangeHandler}
                                name="username"
                                value={username}
                                floatingTextLabel="username"
                            />
                            <br/>
                        <TextField  fullWidth  id="input-passwd" label="password" variant="outlined"
                                onChange={this.onChangeHandler}
                                name="password"
                                value={password}
                                floatingTextLabel="password"
                                type="password"
                        />
                            <br/>
                        <Button variant="contained" color="primary" type="submit" ON fullWidth style={{ background: '#808080' }}>
                            Submit
                        </Button>
                                <h5 className="text-info">
                                    If you do not have account - 
                                    <Button >
                                            <Link to="/register">Register</Link>
                                    </Button>
                                </h5>
                                    {this.state.requestResult != "" 
                                    ?   <Alert  severity="error">{this.state.requestResult}</Alert> 
                                    : null} 
                        </form> 
                    </Grid>
         </React.Fragment>
         </MuiThemeProvider>
        );
    }
}