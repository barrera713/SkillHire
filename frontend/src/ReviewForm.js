import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import { createReview } from './actions/reviewActions';
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
    }

    render() {
        const { rating } = this.state;
        return (
            <Container>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <Label>Review</Label>
                        <br></br>
                        <Form.Input name="content" type="text"/>
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
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    data: state.contractors.contractors
})


export default connect(mapStateToProps, { createReview })( ReviewForm )