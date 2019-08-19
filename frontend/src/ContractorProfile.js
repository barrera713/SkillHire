import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchReviews, createReview } from './actions/reviewActions';
import { profile } from './actions/contractorActions';
import magic from './magic';
import ReviewForm from './ReviewForm';


class ContractorProfile extends React.Component {
    state = {
        displayForm: false 
    }

    componentDidMount() {
        this.props.fetchReviews();
        this.props.profile();
    }

    displayForm = (e) => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }


    render() {
       
        return (
            <div>
                <Container>
                    <Header as="h1" textAlign="center">Contractor Name</Header>
                    <ReviewForm/>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sellers: state.contractors.contractors
})
  

export default connect(mapStateToProps, { fetchReviews, createReview, profile })(ContractorProfile)
