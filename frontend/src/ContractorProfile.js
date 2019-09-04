import React from 'react';
import { connect } from 'react-redux';
// import { createReview } from './actions/reviewActions';
import { profile } from './actions/ProfileActions';
import ReviewForm from './ReviewForm';
import capitalize from './Capitalize';


class ContractorProfile extends React.Component {

    
    componentDidMount() {
        this.props.profile(this.props.match.params.id);
    }
    
    
    render() {
        
        let sellerData = this.props.contractor
        console.log(sellerData)
        let sellerSkill = sellerData.skills
        console.log(sellerSkill)
        let sellerReviews = sellerData.reviews
        console.log(sellerReviews)

        
        let reviewList = sellerReviews.map(i => {
        return(<div>
        <p>{capitalize(i.user.name)} | {i.content} | {i.rating} stars</p>
        <hr/>
        </div>)
        })
        

       
        
        let userCard = (<div className= 'seller'>
                <div className= 'center-my-img'>
            <img src='https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png' alt="" className="profile-img"/>
                </div>
                <h1>{capitalize(sellerData.name)}</h1>
                <h3>{capitalize(sellerSkill[0].expertise)}</h3>
                <p>{sellerSkill[0].description}</p>
                <h3>{sellerData.email}</h3> 
                <hr/>
                <p>{`${capitalize(sellerData.city)}, ${capitalize(sellerData.state)}`}</p>
            </div>)



        return(
            <div className="main-div">
                <div>
                    {userCard}
                </div>
                <div>
                    <ReviewForm/>
                    <div className="review-list">
                    {reviewList}
                    </div>
                </div>
            </div>
        )
        
    }   
}

        
const mapStateToProps = state => ({
    contractor: state.profileData.data
})



export default connect(mapStateToProps, { profile })(ContractorProfile)
