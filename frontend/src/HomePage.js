import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from './actions/homepageActions'
import { Form, Button, Container, Label, Header } from 'semantic-ui-react';



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
            <Container>
            <Header as="h1" textAlign="center">Login</Header>
                <Form onSubmit = {this.handleSubmit}>
                    <Label>Username</Label>
                    <Form.Input name="username" placeholder="username" type="text" />
                    <Label>Password</Label>
                    <Form.Input name="password" placeholder="password" type="password" />
                    <Button size="small" color="green">Sign In</Button>
                </Form>
            </Container>
        )
    }

}

export default connect(null, { userLogin })(HomePage)
