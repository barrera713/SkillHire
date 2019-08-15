import React from 'react';
import { connect } from 'react-redux';
import { createContractor } from './actions/contractorActions'

class SignUpContractor extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const contractorData = {
            "name": e.target["name"].value,
            "username": e.target["username"].value,
            "password": e.target["password"].value,
            "city": e.target["city"].value,
            "state": e.target["state"].value,
            "language": e.target["language"].value
        };
        this.props.createContractor(contractorData)
    }


    render() {
        return (
            <div>
                <h2>Contractor Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input name="name" placeholder="name" type="text"  />
                    <label>Username</label>
                    <input name="username" placeholder="username" type="text"  />
                    <label>Password</label>
                    <input name="password" placeholder="password" type="password"  />
                    <label>City</label>
                    <input name="city" placeholder="city" type="text"  />
                    <label>State</label>
                    <input name="state" placeholder="state" type="text"  />
                    <label>Language(s)</label>
                    <input name="language" placeholder="language" type="text"  />
                    <button>Confirm</button>
                </form>
            </div>
        )
    }

}

export default connect(null, { createContractor })(SignUpContractor)