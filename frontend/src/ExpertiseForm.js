import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createSkill } from './actions/expertiseActions';
import history from './history';



class ExpertiseForm extends React.Component {

   

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            "expertise": e.target["expertise"].value,
            "description": e.target["description"].value
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
                        <Header as='h3' className="about-skill">How would you like to market yourself?</Header>
                        <Form.Input name="expertise" placeholder="Skill" type="text" />
                    </div>
                    <div>
                        <Header as='h3'>About</Header>
                        <Form.Input name="description" placeholder="Tell us about your experience" type="text" />
                    </div>
                    <Button className="skill-button" type="submit" content='Confirm' primary />
                </Form>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    seller: state.current_user.current_user
})

export default connect(mapStateToProps, { createSkill })(ExpertiseForm)