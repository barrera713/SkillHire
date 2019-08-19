import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { fetchContractors } from './actions/contractorActions'
import { connect } from 'react-redux';
import magic from './magic'
import history from './history'




class ContractorCollection extends React.Component { 
    
    

    componentDidMount() {
        this.props.fetchContractors();
    }

    handleClick = () => {
        history.push('./review/new')
    }

    contractorProfile = (e) => {
        history.push('/profile')
    }
    
    reviewClick = (e) => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    render() {
        const extra = (
            <a>
                Write Review<Icon name="pen square"/>
            </a>
        )

        const seller = this.props.sellers.map(contractor => { 
            return contractor.contractor_skills.map( skill => { 
            return <Card
                image='https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png'
                header={magic(contractor.contractor.name)}
                meta={magic(skill.expertise)}
                description={`${magic(contractor.contractor.city)}, ${magic(contractor.contractor.state)}`}
                extra={extra}
                />
            })
        })
        
        // envelope square
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
  
export default connect(mapStateToProps, { fetchContractors })(ContractorCollection)