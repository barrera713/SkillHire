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
    
    // displayForm = (e) => {
    //     this.setState({
    //         displayForm: !this.state.displayForm
    //     })
    // }
   
    
    render() {
        // console.log('wutt this?', this.props.review)
        let profileData = this.props.info.data
        console.log('props', profileData)
        let userCard = profileData
        // all reviews
        let sellerData = profileData[1]
        // all skills 

        let skillSet = sellerData.skills.map( skill => {
            return(<div>
            <h3>{magic(skill.expertise)}</h3>
            <p>{skill.description}</p>
            </div>)
        })
            
        let seller = (<div className= 'seller'>
            <div className= 'center-my-img'>
            <img src='https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png' alt="" className="profile-img"/>
            </div>
            <h1>{magic(userCard[0].name)}</h1>
            {skillSet}
            <h3>{userCard[0].email}</h3>
            <hr/>
            <p>{`${magic(userCard[0].city)}, ${magic(userCard[0].state)}`}</p>
            </div>)

        // console.log('usercard', userCard)

        let reviewers = sellerData.reviewers
        

        
        let listReviews = sellerData.reviews.map( review => {
             return reviewers.map( i => {
                if(i.id === review.user_id)
                // return i.name
            
            return(<div className = 'the-review'>
                <p>{i.name}: {review.content}</p>
                <hr/>
            </div>
            )
        })
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
