import React from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from './actions/userActions';


class LoginUser extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const loginData = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.authenticateUser(loginData)     
    }

    render() {
        return (
            <div>
            <h2>User Sign Up</h2>
                <form>
                    <label>Username</label>
                    <input name="username" placeholder="username" type="text" onChange={this.handleChange}/>
                    <label>Password</label>
                    <input name="password" placeholder="password" type="password" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>
            </div>
        )
    }

}

export default connect(null, { authenticateUser })(LoginUser)