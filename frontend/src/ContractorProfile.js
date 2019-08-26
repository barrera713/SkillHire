import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createReview } from './actions/reviewActions';
import { profile } from './actions/ProfileActions';
import ReviewForm from './ReviewForm';
import magic from './magic';


class ContractorProfile extends React.Component {
   

    componentDidMount() {
        this.props.profile(this.props.match.params.id);
    }
    
    displayForm = (e) => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

   
    
    render() {
        console.log('wutt this?', this.props.review)
        let currentReview = this.props.review
        let profileData = this.props.info.data
        let userCard = profileData
        let allReviews = profileData[1]
        // console.log('this', allReviews)
        
        
    
        let seller = (<div className= 'seller'>
            <div className= 'center-my-img'>
            <img src='https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png' alt="" className="profile-img"/>

            </div>
            <h1>{magic(userCard[0].name)}</h1>
            <hr/>
            <p>{`${magic(userCard[0].city)}, ${magic(userCard[0].state)}`}</p>
            <h4>{userCard[0].email}</h4>
            </div>)
        

        // console.log('usercard', userCard)

        let listReviews = allReviews.reviews.map( review => {
            return(<div className = 'the-review'>
                <p>{review.content}</p>
                <hr/>
            </div>
            )
        })

        return (
            <div className="main-div">
                    {seller}

                <div className= 'review-container'>

                    <ReviewForm id={this.props.match.params.id}/>
                    
                    <div className="review-list">

                        {listReviews}

                    </div>

                </div>
            
            </div>
        )
    }
}

const mapStateToProps = state => ({
    info: state.sellerData,
    review: state.reviews
})



export default connect(mapStateToProps, { createReview, profile })(ContractorProfile)
