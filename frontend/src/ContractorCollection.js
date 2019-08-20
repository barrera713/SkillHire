import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { fetchContractors, profile } from './actions/contractorActions';
import { connect } from 'react-redux';
import magic from './magic';
import history from './history';




class ContractorCollection extends React.Component { 
    
    componentDidMount() {
        this.props.fetchContractors();
    }

    handleClick = () => {
        history.push('./review/new')
    }

    contractorProfile = (id) => {
        history.push(`/profile/${id}`);
    }
    

    render() {
        const extra = (
            <a>
                Write Review<Icon name="pen square"/>
            </a>
        )
        const seller = this.props.sellers.map(i => { 
            return i.contractor_skills.map( skill => { 
            return <Card
                onClick = { () => this.contractorProfile(i.contractor.id)}
                image='https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png'
                header={magic(i.contractor.name)}
                meta={magic(skill.expertise)}
                description={`${magic(i.contractor.city)}, ${magic(i.contractor.state)}`}
                extra={extra}
                />
            })
        })
    
        return (
            <div>
            {seller}
        </div>
    )
    }
}





const mapStateToProps = state => ({
    sellers: state.contractors.contractors
})
  
export default connect(mapStateToProps, { fetchContractors, profile })(ContractorCollection)