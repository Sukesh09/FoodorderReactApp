import React, { Component } from 'react'

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }

    makeLogin(){
        this.setState((prevState) => ({
            isLoggedIn: true
        }),() => {
            console.log(this.state.isLoggedIn);
        });
    }

    makeLogout(){
        this.setState((prevState) => ({
            isLoggedIn: false
        }),() => {
            console.log(this.state.isLoggedIn);
        });
    }
    
    render() {
        let message
        if(this.state.isLoggedIn){
            message = <div>
                Welcome sukesh
                <p></p>
            <button onClick={()=>this.makeLogout()}>Logout</button> 
                </div>
        }else {
            message = <div>
                Welcome Guest
                <p></p>
            <button onClick={()=>this.makeLogin()}>Login</button>    
            </div>
        }
        return <div>{message}</div>
    }
}

export default Login
