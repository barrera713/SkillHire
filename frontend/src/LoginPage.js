import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from './actions/homepageActions';
import { Button, Form, Label, Header, Container } from 'semantic-ui-react'





class HomePage extends React.Component {
    



    handleSubmit = (e) => {
        e.preventDefault()
        const loginData = {
            "username": e.target["username"].value,
            "password": e.target["password"].value
        }
        this.props.userLogin(loginData)     
    }

    render() {
        return (
            <Container className="form-background">
            <Header as="h2" textAlign="center">Login</Header>
                <Form onSubmit = {this.handleSubmit}>
                    <Label>Username</Label>
                    <Form.Input name="username" placeholder="username" type="text" />
                    <Label>Password</Label>
                    <Form.Input name="password" placeholder="password" type="password" />
                    <Button positive>Sign In</Button>
                </Form>
            </Container>
        )
    }

}

export default connect(null, { userLogin })(HomePage)
