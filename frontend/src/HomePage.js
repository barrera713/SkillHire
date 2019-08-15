import React from 'react';
import { connect } from 'react-redux';
import { loginThisUser } from './actions/homepageActions'


class HomePage extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const loginData = {
            "username": e.target["username"].value,
            "password": e.target["password"].value
        }
        this.props.loginThisUser(loginData)     
    }

    render() {
        return (
            <div>
            <h2>Home</h2>
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

export default connect(null, { loginThisUser })(HomePage)
