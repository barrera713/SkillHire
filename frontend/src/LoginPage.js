import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from './actions/homepageActions';
import { Button, Form, Label, Header, Container, Div } from 'semantic-ui-react';
import history from './history';





class HomePage extends React.Component {
    



    handleSubmit = (e) => {
        e.preventDefault()
        const loginData = {
            "username": e.target["username"].value,
            "password": e.target["password"].value
        }
        this.props.userLogin(loginData)
        history.push('/freelancers')
    }

    render() {
        return (
            <div className="login-background">
                <Container className="form-background">
                    <Form onSubmit = {this.handleSubmit} className="form">
                        <Label>Username</Label>
                        <Form.Input name="username" placeholder="username" type="text" />
                        <Label>Password</Label>
                        <Form.Input name="password" placeholder="password" type="password" />
                        <Button positive>Sign In</Button>
                    </Form>
                </Container>
            </div>
        )
    }

}

export default connect(null, { userLogin })(HomePage)
