import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchReviews, createReview } from './actions/reviewActions';
import { profile } from './actions/contractorActions';
import ReviewForm from './ReviewForm';


class ContractorProfile extends React.Component {
   

    componentDidMount() {
        this.props.fetchReviews(this.props.match.params.id);
        this.props.profile(this.props.match.params.id);
        console.log(this.props)
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
                    <Header as="h1" textAlign="center">Profile Page</Header>
                    <ReviewForm id={this.props.match.params.id}/>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.contractors.contractors
})

  

export default connect(mapStateToProps, { fetchReviews, createReview, profile })(ContractorProfile)
