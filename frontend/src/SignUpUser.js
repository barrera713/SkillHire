import React from 'react';
import { connect } from 'react-redux';
import { createUser } from './actions/userActions';

class SignUpUser extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            "name": e.target["name"].value,
            "username": e.target["username"].value,
            "password": e.target["password"].value,
            "city": e.target["city"].value,
            "state": e.target["state"].value
        };
        this.props.createUser(userData)
    }


    render() {
        return (
            <div>
            <h2>User Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input name="name" placeholder="name" type="text" />
                    <label>Username</label>
                    <input name="username" placeholder="username" type="text" />
                    <label>Password</label>
                    <input name="password" placeholder="password" type="password" />
                    <label>City</label>
                    <input name="city" placeholder="city" type="text" />
                    <label>State</label>
                    <input name="state" placeholder="state" type="text" />
                    <button>Confirm</button>
                </form>
            </div>
        )
    }
}




export default connect(null, { createUser })(SignUpUser);


