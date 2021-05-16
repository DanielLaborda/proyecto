import React, { Component } from "react";
import Register from "../users/register";
import SignIn from "../users/signin";

class Users extends Component {
    constructor() {
        super();

        this.state = {
            show: "signin"
        }
        this.showSignin = this.showSignin.bind(this);
        this.showRegister = this.showRegister.bind(this);
    }
    showSignin() {
        this.setState({ show: "signin" });
    }
    showRegister() {
        this.setState({ show: "register" });
    }
    render() {
        return (
            <div className='users'>
                <ul>
                    <li onClick={this.showSignin}>sign in</li>
                    <li onClick={this.showRegister}>register</li>
                </ul>
                {(this.state.show === 'signin') ?
                    <SignIn />
                    : 
                    <Register />
                }
                
            </div>
        )
    }

}

export default Users;