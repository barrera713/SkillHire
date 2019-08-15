import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Menu, Modal, Button, Form, Label, Header } from 'semantic-ui-react';
import { userLogin } from './actions/homepageActions';
import { connect } from 'react-redux';
import { createUser } from './actions/userActions';

class NavBar extends Component {

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
            <Menu>
                <Menu.Item>
                    <Modal trigger={<Button>Sign Up</Button>}> 
                    <Form inverted onSubmit={this.handleSubmit}>
                        <Label>Name</Label>
                        <Form.Input fluid label name="name" placeholder="Full Name" type="text" />
                        <Label>Username</Label>
                        <Form.Input fluid label name="username" placeholder="username" type="text" />
                        <Label>Password</Label>
                        <Form.Input fluid label name="password" placeholder="password" type="password" />
                        <Label>City</Label>
                        <Form.Input fluid label name="city" placeholder="city" type="text" />
                        <Label>State</Label>
                        <Form.Input fluid label name="state" placeholder="state" type="text" />
                        <Button size="small" color="green">Confirm</Button >
                    </Form>
                    </Modal>
                </Menu.Item>
            </Menu>
        )
    }
}

export default connect(null, { createUser })(NavBar);

