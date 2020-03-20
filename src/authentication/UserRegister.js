import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {Input, Container, Header} from "semantic-ui-react"
import {register}  from '../api/ApiCalls';
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

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
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.onChangeField = this.onChangeField.bind(this)
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
            password: this.state.password,
        }
        register(registerRequest)
        .catch(error => this.setState({
            requestResult: error.message
        })) 
        .then(response => this.setState({
            registerRequest: response
        }))
        
    }
        render() {
            const {nameAndSurname, username, email, password}= this.state
            return(
                <React.Fragment>
                    <Grid  container justify = "center" className="user-form"  > 
                    <form onSubmit={this.onSubmitHandler}>
                            <h1 className="text-title">Register</h1>
                            <TextField  fullWidth id="input-nameAndSurname" label="name and surname" variant="outlined"
                                onChange={this.onChangeField} 
                                name="nameAndSurname" 
                                value={nameAndSurname} 
                                placeholder="name and last name"
                                />
                            <br/>
                            <TextField  fullWidth id="input-username" label="username" variant="outlined"
                                onChange={this.onChangeField} 
                                name="username" 
                                value={username} 
                                placeholder="username"
                                />
                            <br/>
                            <TextField  fullWidth id="input-email" label="email" variant="outlined"
                                onChange={this.onChangeField} 
                                name="email"
                                value={email} 
                                placeholder="email" 
                                />
                              <br/>
                            <TextField  fullWidth id="input-password" label="password" variant="outlined"
                                onChange={this.onChangeField} 
                                name ="password" 
                                value={password} 
                                placeholder="password" 
                                type="password"
                            />
                            <br/>
                            <Button fullWidth variant="contained" color="primary" type="submit" style={{ background: '#808080' }}>
                                 Submit
                            </Button>
                            <h6 className="text-info">If you have already account - <Button>
                                <Link to="/login"> 
                                    Login
                                </Link></Button></h6>

                                {this.state.requestResult != "" 
                               ?   <Alert  severity="error">{this.state.requestResult}</Alert> 
                               : null}
                            
                        </form>
                    </Grid>
                </React.Fragment>
         );       
                
     }
}