import React from 'react'
import { Card, Icon, Image, Button, Grid, Container, Header } from 'semantic-ui-react';
import { fetchContractors } from './actions/contractorActions';
import { profile } from './actions/ProfileActions';
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
        
        const searchTerm = this.props.term
        

        //matches searchterm to name
        let nameMatchesFilter = name => name.toLowerCase().includes(searchTerm.searchTerm.toLowerCase()) 

        //matches searchTerm to skill
        let skillsMatchFilter = skills => {
            let matchedSkills = skills.filter( i => {
                return i.expertise.toLowerCase().includes(searchTerm.searchTerm.toLowerCase())
            })
            return matchedSkills.length > 0 ? true : false
        }

        // matches searchTerm to name or skill 
        let searchName = this.props.sellers.filter(seller => { 
            return nameMatchesFilter(seller.contractor.name) || skillsMatchFilter(seller.contractor_skills)
        }) 
    
            

        let nameCard = searchName.map(i => {
            return i.contractor_skills.map( skill => {
                return <Card
                onClick = { () => this.contractorProfile(i.contractor.id)}
                image='https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png'
                header={magic(i.contractor.name)}
                meta={magic(skill.expertise)}
                description={`${magic(i.contractor.city)}, ${magic(i.contractor.state)}`}
                />
            })
        })
            


        const sellers = this.props.sellers.map(i => { 
            return i.contractor_skills.map( skill => { 
                return <Card
                    onClick = { () => this.contractorProfile(i.contractor.id)}
                    image='https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png'
                    header={magic(i.contractor.name)}
                    meta={magic(skill.expertise)}
                    extra={skill.description}
                    description={`${magic(i.contractor.city)}, ${magic(i.contractor.state)}`}
                />
            })
        })


        
    
        return (
        <div className="collection-background">
        {!!searchTerm.searchTerm && searchTerm.searchTerm.length > 0 ? 
            <Container>
               <Grid relaxed columns={4}>
                  {nameCard}
                </Grid>
            </Container>
            :
            <Container>
                <Grid relaxed columns={4}>
                    {sellers.map(i => {
                        return <Grid.Column>
                            {i}
                        </Grid.Column>
                    })}
                </Grid>
            </Container> 
        }
        </div>
        )
    }
}





const mapStateToProps = state => ({
    sellers: state.contractors.contractors,
    term: state.searchTerm
})
  
export default connect(mapStateToProps, { fetchContractors, profile })(ContractorCollection)