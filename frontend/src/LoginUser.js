import React from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from './actions/userActions';


class LoginUser extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        const loginData = {
            "username": e.target["username"].value,
            "password": e.target["password"].value
        }
        this.props.authenticateUser(loginData)     
    }

    render() {
        return (
            <div>
            <h2>User Sign Up</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>Username</label>
                    <input name="username" placeholder="username" type="text" />
                    <label>Password</label>
                    <input name="password" placeholder="password" type="password" />
                    <button>Sign In</button>
                </form>
            </div>
        )
    }

}

export default connect(null, { authenticateUser })(LoginUser)