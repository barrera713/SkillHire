import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import { createReview } from './actions/reviewActions';
import { profile } from './actions/ProfileActions';
import { Button, Form, Label, Header, Container } from 'semantic-ui-react'


class ReviewForm extends React.Component {
    
    state = {
        rating: 1
    }
    
    onStarClick(nextValue, prevValue, name) {
        this.setState({
            rating: nextValue
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('inside handleSubmit in ReviewForm')
        const content = {
            "content": e.target["content"].value,
            rating: this.state.rating,

            
        }
        this.props.createReview(content, this.props.id)
        // this.props.profile(this.props.id)
    }

    render() {
        const { rating } = this.state;
        return (
            <div className="review-form">
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <h3 className="raulplz">Leave a review</h3>
                       
                        <Form.Input name="content" type="text" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={rating}
                        onStarClick={ (e) => this.onStarClick(e)}
                        />
                    </div>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.contractors.contractors,
    reviews: state.reviews
})


export default connect(mapStateToProps, { createReview, profile })( ReviewForm )