import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createSkill } from './actions/expertiseActions';


class ExpertiseForm extends React.Component {

    state = {
        photographer: false,
        developer: false,
        designer: false,
        videoeditor: false
    }
   

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            "expertise": e.target["expertise"].value,
            "description": e.target["description"].value,
            photographer: this.state.photographer,
            developer: this.state.developer,
            designer: this.state.designer,
            videoeditor: this.state.videoeditor
        }
        this.props.createSkill(formData)
    }

    handleTrueFalse(e) {
        e.preventDefault()
        let { name } = e.target;
        this.setState({
            [name]: !this.state[name]
        })
    }


    render() {
        return (
            <div>
                <Form className="login-background" onSubmit={ (e) => this.handleSubmit(e)}>
            <h1>Contractor Expertise</h1>
                    <div>
                        <Header as='h3'>How would you like to market yourself?</Header>
                        <Form.Input name="expertise" placeholder="Skill" type="text" />
                    </div>
                    <div>
                        <Header as='h3'>About</Header>
                        <Form.Input name="description" placeholder="Tell us about your experience" type="text" />
                    </div>
                    <div className="row">
                        <div className="column">
                            <Button value={false} name="photographer" onClick={(e) => this.handleTrueFalse(e)} >Photographer</Button>
                        </div>
                        <div className="column">
                            <Button value={false}  name="developer" onClick={ (e) => this.handleTrueFalse(e)}>Developer</Button>
                        </div>
                        <div className="column">
                            <Button value={false}  name="designer" onClick={ (e) => this.handleTrueFalse(e)}>Designer</Button>
                        </div>
                        <div className="column">
                            <Button value={false} name="videoeditor" onClick={ (e) => this.handleTrueFalse(e)}>Video Editor</Button>
                    </div>
                        </div>
                    <Button type="submit" content='Confirm' primary />
                </Form>
            </div>
        )
    }

}

export default connect(null, { createSkill })(ExpertiseForm)