import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {Input, Container, Header} from "semantic-ui-react"
import {register}  from '../api/ApiCalls';
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
export default class UserRegister extends React.Component{
    
    constructor(){
        super()
        this.state={
            nameAndSurname: '',
            username:'',
            email:'',
            password:'' ,
            requestResult:'',
        }
    }
    onChangeField  =  (event) =>{
        const {name, value}= event.target;
        this.setState ({
                [name]:value
            }
        )
    }

    onSubmitHandler = (e) =>{
        e.preventDefault()
        const registerRequest ={
            nameAndSurname: this.state.nameAndSurname,
            username: this.state.username,
            email:this.state.email,
            password: this.state.password
        }
        register(registerRequest)
        .then(response => this.setState({
            registerRequest: response
        }))
        .catch(error => this.setState({
          requestResult: error.errors[0].defaultMessage 
        }))
    }
        render() {
            const {nameAndSurname, username, email, password}= this.state
            return(
                <React.Fragment>
                    <Grid  container justify = "center" className="user-form">
                    <form  onSubmit={this.onSubmitHandler}>
                            <h1 className="text-title">Register</h1>
                            <TextField id="input-email" label="name and surname" variant="outlined"
                                onChange={this.onChangeField} 
                                name="nameAndSurname" 
                                value={nameAndSurname} 
                                placeholder="name and last name"
                                />
                            <br/>
                            <TextField id="input-email" label="username" variant="outlined"
                                onChange={this.onChangeField} 
                                name="username" 
                                value={username} 
                                placeholder="username"
                                />
                            <br/>
                            <TextField id="input-email" label="email" variant="outlined"
                                onChange={this.onChangeField} 
                                name="email"
                                value={email} 
                                placeholder="email" 
                                />
                              <br/>
                            <TextField id="input-email" label="password" variant="outlined"
                                onChange={this.onChangeField} 
                                name ="password" 
                                value={password} 
                                placeholder="password" 
                                type="password"
                            />
                            <br/>
                            <Button variant="contained" color="primary" type="submit">
                            Submit
                            </Button>
                            <h5 className="text-info">If you have already account - <Button>
                                <Link to="/login"> 
                                    Login
                                </Link></Button></h5>
                            <h6>{this.state.requestResult}</h6>
                        </form>
                    </Grid>
                </React.Fragment>
         );              
     }
}