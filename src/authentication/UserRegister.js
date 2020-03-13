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
        }
    }
    onChangeField  =  (event) =>{
        const {name, value}= event.target;
        this.setState ({
                [name]:value
            }
        )
        console.log(event)
    }

    onSubmitHandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
        const registerRequest ={
            nameAndSurname: this.state.nameAndSurname,
            username: this.state.username,
            email:this.state.email,
            password: this.state.password
        }
        register(registerRequest)
    }
        render() {
            const {nameAndSurname, username, email, password}= this.state
            return(
                <form onSubmit={this.onSubmitHandler}>
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
                </form>
         );        
     }
}