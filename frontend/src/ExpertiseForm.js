import React from 'react'
// import {  Form, Div, TextArea, ConfirmButton, Label, H1 } from './Style'
import { Form, Image, Header, Button } from 'semantic-ui-react'


class ExpertiseForm extends React.Component {

    state = {
        expertise: '',
        description: '',
        photographer: false,
        developer: false,
        designer: false,
        videoeditor: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: !this.state.photographer,
            [e.target.name]: !this.state.developer,
            [e.target.name]: !this.state.designer,
            [e.target.name]: !this.state.videoeditor
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/contractor-expertise', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                expertise: this.state.expertise,
                description: this.state.description,
                photographer: this.state.photographer,
                developer: this.state.password,
                designer: this.state.designer,
                videoeditor: this.state.videoeditor
            })
        })
        console.log('skill created')
    }

    render() {
        return (
            <div>
                <Form className="login-background">
            <h1>Contractor Expertise</h1>
                    <div>
                        <Header as='h3'>How would you like to market yourself?</Header>
                        <Form.Input name="expertise" placeholder="Skill" type="text" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div>
                        <Header as='h3'>About</Header>
                        <Form.Input name="description" placeholder="Tell us about your experience" type="text" onChange={ (e) => this.handleChange(e)}/>
                    </div>
                    <div className="row">
                        <div className="column">
                            <Image name="photographer" onClick={ (e) => this.handleClick(e)} className="photographer-img"src="https://images.pexels.com/photos/1500590/pexels-photo-1500590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                            {/* <Button onClick={ (e) => this.handleClick(e)} className="photographer-img" name="photographer">Photographer</Button> */}
                        </div>
                        <div className="column">
                            <Image name="developer" onClick={ (e) => this.handleClick(e)} className="developer-img"src="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                            {/* <Button name="developer" onClick={ (e) => this.handleClick(e)}>Developer</Button> */}
                        </div>
                        <div className="column">
                            <Image name="designer" onClick={ (e) => this.handleClick(e)} className="designer-img"src="https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                            {/* <Button name="designer" onClick={ (e) => this.handleClick(e)}>Designer</Button> */}
                        </div>
                        <div className="column">
                            <Image name="videoeditor" onClick={ (e) => this.handleClick(e)} className="video-editor-img"src="https://images.pexels.com/photos/2377000/pexels-photo-2377000.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                            {/* <Button name="videoeditor" onClick={ (e) => this.handleClick(e)}>Video Editor</Button> */}
                        </div>
                    </div>
                    <Button content='Confirm' primary onClick={ (event) => this.handleSubmit(event)}/>
                </Form>
            </div>
        )
    }

}

export { ExpertiseForm }