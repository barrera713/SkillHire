import React from 'react'
import { connect } from 'react-redux'
import { createUser } from './actions/userActions'

class SignUpUser extends React.Component {

    state = {
        name: '',
        username: '',
        password: '',
        location: ''
    }

    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            location: this.state.location
        };
        this.props.createUser(userData)
    }


    render() {
        return (
            <div>
            <h2>User Sign Up</h2>
                <form>
                    <label>Name</label>
                    <input name="name" placeholder="name" type="text" onChange={this.handleChange}/>
                    <label>Username</label>
                    <input name="username" placeholder="username" type="text" onChange={this.handleChange}/>
                    <label>Password</label>
                    <input name="password" placeholder="password" type="password" onChange={this.handleChange}/>
                    <label>Location</label>
                    <input name="location" placeholder="location" type="text" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Confirm</button>
                </form>
            </div>
        )
    }
}




export default connect(null, { createUser })(SignUpUser);


