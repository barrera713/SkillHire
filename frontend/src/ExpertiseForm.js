import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createSkill } from './actions/expertiseActions';
import history from './history';



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
        history.push(`/profile/${this.props.seller.id}`)
    }

    handleTrueFalse(e) {
        e.preventDefault()
        let { name } = e.target;
        this.setState({
            [name]: !this.state[name]
        })
    }


    render() {

        console.log('wutt this', this.props.seller.id)
        return (
            <div className="login-background">
                <Form className="skill-form" onSubmit={ (e) => this.handleSubmit(e)}>
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

const mapStateToProps = state => ({
    seller: state.current_user.current_user
})

export default connect(mapStateToProps, { createSkill })(ExpertiseForm)