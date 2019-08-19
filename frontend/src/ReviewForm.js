import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import { createReview } from './actions/reviewActions';


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
        const content = {
            "content": e.target["content"].value,
            rating: this.state.rating,

            
        }
        this.props.createReview(content)
    }

    render() {
        const { rating } = this.state;
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <label>Rating</label>
                        <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={rating}
                        onStarClick={ (e) => this.onStarClick(e)}
                        />
                    </div>
                    <div>
                        <label>Content</label>
                        <br></br>
                        <input name="content" type="text"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}




export default connect(null, { createReview })(ReviewForm)