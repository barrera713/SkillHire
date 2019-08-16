import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from './actions/userActions';
import { createContractor } from './actions/contractorActions'
import { Menu, Segment, Modal, Button, Form, Label } from 'semantic-ui-react'
import history from './history'



class NavBar extends Component {

    state = { 
        activeItem: 'home',
        userSignUp: false,
        contractorSignUp: false,
    }
    
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

    contractorSubmit = (e) => {
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

    handleItemClick = (e, { name }) => this.setState({ 
        activeItem: name,
        userSignUp: true,
        contractorSignUp: true
    })

    handleHome() {
        history.push('/')
    }

    
    render() {

        const { activeItem } = this.state
      
        return (
            <Segment inverted className="navbar">
                <Menu inverted pointing secondary>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleHome}/>
                    <Menu.Item name='client sign up' active={activeItem === 'client sign up'} onClick={this.handleItemClick}/>
                    <Menu.Item name='contractor sign up' active={activeItem === 'contractor sign up'} onClick={this.handleItemClick}/>
                </Menu>
                <Modal open={this.state.userSignUp}>
                        <Modal.Content className="content-background">
                            <Form onSubmit={this.handleSubmit} className="form-background">
                                <Label>Name</Label>
                                <Form.Input fluid Label name="name" placeholder="Full Name" type="text" />
                                <Label>Username</Label>
                                <Form.Input fluid Label name="username" placeholder="username" type="text" />
                                <Label>Password</Label>
                                <Form.Input fluid Label name="password" placeholder="password" type="password" />
                                <Label>City</Label>
                                <Form.Input fluid Label name="city" placeholder="city" type="text" />
                                <Label>State</Label>
                                <Form.Input fluid label name="state" placeholder="state" type="text" />
                                <Button className="form-button"inverted color="green">Confirm</Button >
                            </Form>
                        </Modal.Content>
                    </Modal>
                    <Modal open={this.state.contractorSignUp}>
                        <Modal.Content className="content-background">
                            <Form onSubmit={this.contractorSubmit}>
                            <Label>Name</Label>
                            <Form.Input name="name" placeholder="name" type="text"  />
                            <Label>Username</Label>
                            <Form.Input name="username" placeholder="username" type="text"  />
                            <Label>Password</Label>
                            <Form.Input name="password" placeholder="password" type="password"  />
                            <Label>City</Label>
                            <Form.Input name="city" placeholder="city" type="text"  />
                            <Label>State</Label>
                            <Form.Input name="state" placeholder="state" type="text"  />
                            <Label>Language(s)</Label>
                            <Form.Input name="language" placeholder="language" type="text"  />
                            <Button className="submit-btn">Confirm</Button>
                        </Form>
                        </Modal.Content>
                    </Modal>
            </Segment>
        )
    }
}

export default connect(null, { createUser, createContractor })(NavBar);

