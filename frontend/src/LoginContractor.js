import React from 'react'
import { connect } from 'react-redux';
import { loginContractor } from './actions/contractorActions'

class LoginContractor extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault()
        const loginInfo = {
            "username": e.target["username"].value,
            "password": e.target["password"].value
        }
        this.props.loginContractor(loginInfo)
    }

    render() {
        return (
            <div>
            <h2>Contractor Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input name="username" placeholder="username" type="text" />
                    <label>Password</label>
                    <input name="password" placeholder="password" type="password" />
                    <button>Confirm</button>
                </form>
            </div>
        )
    }

}

export default connect(null, { loginContractor })(LoginContractor)