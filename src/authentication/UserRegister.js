import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {Input, Container, Header, Button} from "semantic-ui-react"
import {register}  from '../api/ApiCalls';

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
                <div className="col">
                    <div className="row text-center ">
                        <form onSubmit={this.onSubmitHandler}>
                            <h1>Register</h1>
                            <input 
                            onChange={this.onChangeField} 
                            name="nameAndSurname" 
                            value={nameAndSurname} 
                            placeholder="name and last name"
                            />
                            <br/>
                            <input 
                            onChange={this.onChangeField} 
                            name="username" 
                            value={username} 
                            placeholder="username" />
                            <br/>
                            <input 
                            onChange={this.onChangeField} 
                            name="email"
                            value={email} 
                            placeholder="email" 
                            />
                            <br/>
                            <input
                            onChange={this.onChangeField} 
                            name ="password" 
                            value={password} 
                            placeholder="password" 
                            type="password"
                            />
                            <br/>
                            <button label="Submit" type="submit" > Submit</button>
                            <h5>If you have already account - <Link to="/login"> Login</Link></h5>
                            <h6>{this.state.requestResult}</h6>
                        </form>
                    </div>
                </div>
         );        
           
     }
}