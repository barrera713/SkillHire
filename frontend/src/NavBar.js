import React, { Component } from 'react';
import {  Menu, Modal, Button, Form, Label, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createUser } from './actions/userActions';
import history from  './history';

class NavBar extends Component {
    state = { activeItem: "home" }

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

    handleClick = (e, { name }) => this.setState({ activeItem: name})


    render() {
        const { activeItem } = this.state
        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item name="home" active={ activeItem === "home"} onClick={this.handleClick}/>
                    <Menu.Item name="client sign up" active={ activeItem === "client sign up"}>
                        <Modal trigger={  <Menu.Item name="client sign up" active={ activeItem === "client sign up"}/>}> 
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
                    <Menu.Item name="freelancer sign up" active={ activeItem === "freelancer sign up"}>
                        <Modal trigger={<Menu.Item name="freelancer sign up" active={ activeItem === "freelancer sign up"}/>}> 
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
            </Segment>
        )
    }
}

export default connect(null, { createUser })(NavBar);

