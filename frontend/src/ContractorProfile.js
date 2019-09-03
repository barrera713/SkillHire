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
    
    
    render() {
        
        let sellerData = this.props.contractor

        let sellerSkill = [{}]

        if(sellerData.skills){
            sellerSkill = sellerData.skills
            console.log("here", sellerSkill[0])
        }

       
        
    
        
        let userCard = (<div className= 'seller'>
                <div className= 'center-my-img'>
            <img src='https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png' alt="" className="profile-img"/>
                </div>
                { sellerData.name ? <h1>{magic(sellerData.name)}</h1> : null }
                <h3>{sellerSkill[0].expertise}</h3>
                <p>{sellerSkill[0].description}</p>
                <h3>{sellerData.email}</h3> 
                <hr/>
                { sellerData.city && sellerData.state ? 
                <p>{`${magic(sellerData.city)}, ${magic(sellerData.state)}`}</p> : null }
            </div>)



        return(
            <div className="main-div">
             {userCard}
            </div>
        )
        
    }   
}

        
const mapStateToProps = state => ({
    contractor: state.profileData.data
})



export default connect(mapStateToProps, { createReview, profile })(ContractorProfile)
