import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from './actions/userActions';
import { createContractor } from './actions/contractorActions'
import { searchTerm } from './actions/NavBarActions';
import { Menu, Segment, Modal, Button, Form, Label, Input } from 'semantic-ui-react';
import history from './history'
import { Link } from 'react-router-dom';
import { profile } from './actions/ProfileActions';



class NavBar extends Component {


    state = { 
        activeItem: 'home',
        userSignUp: false,
        contractorSignUp: false
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
        this.closeUserModal(e)
    }

    contractorSubmit = (e) => {
        e.preventDefault()
        const contractorData = {
            "name": e.target["name"].value,
            "username": e.target["username"].value,
            "password": e.target["password"].value,
            "email": e.target["email"].value,
            "city": e.target["city"].value,
            "state": e.target["state"].value
        };
        this.props.createContractor(contractorData)
        this.closeContractorModal(e)
    }

    handleUserModal = (e, { name }) => this.setState({ 
        activeItem: name,
        userSignUp: true
    })

    closeUserModal = (e) => {
        this.setState({ userSignUp: !this.state.userSignUp })
    }

    handleHome = (e) => {
        this.setState({
            activeItem: 'login'
        })
        history.push('/')
    }

    handleBrowse = (e, { name }) => {
        this.setState({
            activeItem: name
        })
        history.push('/freelancers')
    }

    handleContractorModal = (e, { name }) => this.setState({ 
        activeItem: name,
        contractorSignUp: true
    })

    closeContractorModal = (e) => {
        this.setState({ contractorSignUp: !this.state.contractorSignUp })
    }

    searchChange = (e) => {
        e.preventDefault()
      this.props.searchTerm(e.target.value)
      console.log(e.target.value)
      history.push('/freelancers')
    }
    
    logOut() {
        localStorage.clear()
        window.location = '/'
    }



    render() {        

        const { activeItem } = this.state
      
        return (
             <Segment inverted className="navbar">
                <Menu inverted pointing secondary>
                    <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleHome}/>
                    <Menu.Item name='client sign up' active={activeItem === 'client sign up'} onClick={this.handleUserModal}/>
                    <Menu.Item name='contractor sign up' active={activeItem === 'contractor sign up'} onClick={this.handleContractorModal}/>
                    {['/freelancers', '/profile/:id'].includes(history.location.pathname) ? null :
                    <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleBrowse}/>
                    }
                    <Menu.Menu position='right'>

                    <Menu.Item>
                    {['/freelancers'].includes(history.location.pathname) ? 
                        <Input icon='search' placeholder="Search..." onChange={ (e) => this.searchChange(e)}/>
                        : null }
                    </Menu.Item>
                    <Menu.Item name="log out" onClick={this.logOut} > 
                    </Menu.Item>
                        </Menu.Menu>

                </Menu>
                <Modal open={this.state.userSignUp} onClose={this.closeUserModal} >
                        <Modal.Content className="content-background">
                            <Form onSubmit={ (e) => this.handleSubmit(e)} className="user-form">
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
                    <Modal open={this.state.contractorSignUp} onClose={this.closeContractorModal}>
                        <Modal.Content className="content-background">
                            <Form onSubmit={ (e) => this.contractorSubmit(e)}>
                            <Label>Name</Label>
                            <Form.Input name="name" placeholder="name" type="text"  />
                            <Label>Username</Label>
                            <Form.Input name="username" placeholder="username" type="text"  />
                            <Label>Password</Label>
                            <Form.Input name="password" placeholder="password" type="password"  />
                            <Label>Email</Label>
                            <Form.Input name="email" placeholder="email" type="email"  />
                            <Label>City</Label>
                            <Form.Input name="city" placeholder="city" type="text"  />
                            <Label>State</Label>
                            <Form.Input name="state" placeholder="state" type="text"  />
                            <Button className="submit-btn">Confirm</Button>
                        </Form>
                        </Modal.Content>
                    </Modal>
            </Segment> 
        )
    }
}

export default connect(null, { createUser, createContractor, searchTerm, profile })(NavBar);

