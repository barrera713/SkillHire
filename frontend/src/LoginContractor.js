import React from 'react'

class LoginContractor extends React.Component {

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
        fetch('http://localhost:3000/contractor/authenticate', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then( r => r.json())
        .then( user => localStorage.setItem('token', user.auth_token))
        console.log('login successful')      
    }

    render() {
        return (
            <div>
            <h2>Contractor Sign Up</h2>
                <form>
                    <label>Username</label>
                    <input name="username" placeholder="username" type="text" onChange={this.handleChange}/>
                    <label>Password</label>
                    <input name="password" placeholder="password" type="password" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Confirm</button>
                </form>
            </div>
        )
    }

}

export { LoginContractor }