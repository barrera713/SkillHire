import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import { fetchContractors } from './actions/contractorActions'
import { connect } from 'react-redux';



class ContractorCard extends React.Component { 
    
    componentDidMount() {
        this.props.fetchContractors();
    }
    
    render() {
        console.log(this.props.contractors)
        const seller = this.props.contractors.map(contractor => (
            <Card
                image='https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png'
                header={contractor.name}
                meta='Skill will go here'
                description={`${contractor.city}, ${contractor.state}`}
            />
        ))

        return (
            <div>
                <h2>Contractors</h2>
                {seller}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    contractors: state.contractors.contractors
})
  
export default connect(mapStateToProps, { fetchContractors })(ContractorCard)